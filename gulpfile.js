'use strict';

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const admin = require("firebase-admin");
const onesky = require("@brainly/onesky-utils");
const dot = require('dot-object');
const {series} = require('gulp');
const TurndownService = require("turndown");

const CREDENTIALS_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const getServiceAccount = () => require(path.resolve(CREDENTIALS_FILE));

const SKYAPP_PROJECT_ID = "359388";
const SKYAPP_PUBLIC_KEY = "e0DfHgNmzrc67zt3RabZRWcYpkSISL1W";
const SKYAPP_SECRET_KEY = process.env.SKYAPP_SECRET_KEY;

const DEFAULT_LANGUAGE = "cs";
const TRANSLATED_LANGUAGES = ["en", "vi", "ru", "ro", "sk"];
const TRANSLATED_LANGS_WEB = ["en", "sk"]
const LANGUAGE_TO_SKYAPP = {
    "en": "en-GB"
};
const SKYAPP_TO_VUE = {
    "en-GB": "en"
};
const FALLBACK_LANGUAGE = {
    "en": DEFAULT_LANGUAGE,
    "vi": "en",
    "ru": "en",
    "ro": "en",
    "sk": DEFAULT_LANGUAGE
};
const DEFAULT_RC_LANGUAGE_VALUE = "DEFAULT";
const LANGUAGE_TO_RC = {
    "cs": "Cz value",
    "sk": "Sk value",
    "en": DEFAULT_RC_LANGUAGE_VALUE
};

const TRANSLATION_SOURCE_FILE = "web.json";
const TRANSLATION_BUILD_FILE = "./locales/web.json";
const FAQ_STRUCTURE_FILE = "./assets/faq.json";
const TEAM_FILE = "./assets/people.json";
const LEGACY_TEAM_PATH = "static/peoples.json";

const mobileFaqSectionOrder = [5, 3, 0, 1, 4, 2];

var currentVueKey = "";

function escapeLineEndings(content) {
    return content.replace(/\n/g, "\\n");
}
function convertToMarkdown(content) {
    const turndownService = new TurndownService();
    return turndownService.turndown(content);
}

function isRemoteConfigDirty(data, values) {
    let isDirty = false;
    for (const key of Object.keys(values)) {
        if (data[key] === undefined || data[key]["defaultValue"]["value"] !== values[key]) {
            console.log(`Key ${key} is dirty`);
            isDirty = true;
        }
    }
    return isDirty;
}

async function updateRemoteConfigValues(values) {
    try {
        const account = getServiceAccount();
        const firebaseProject = account.project_id;
        console.log(`Updating remote config of ${firebaseProject}`);
        const credential = admin.credential.cert(account);
        const token = (await credential.getAccessToken()).access_token;
        const config = await fetch(`https://firebaseremoteconfig.googleapis.com/v1/projects/${firebaseProject}/remoteConfig`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept-Encoding": "gzip",
            }
        });
        if (config.status !== 200) {
            console.log(`FAQ remote config fetch failed: ${config.status}: ${config.statusText}`);
            return;
        }

        const etag = config.headers.raw().etag[0];
        const body = await config.json();
        const parameters = body["parameters"] || {};
        const conditions = body["conditions"] || [];

        if (!isRemoteConfigDirty(body["parameters"], values)) {
            console.log("Values not changed, skipping");
            return;
        }

        for (const key of Object.keys(values)) {
            const value = values[key];
            if (value === '') {
                console.warn(`Skipping remote config key ${key} because it's empty`);
                continue;
            }
            let object;
            if (value.hasOwnProperty('defaultValue')) {
                object = value;
                if (parameters[key] !== undefined) {
                    object = parameters[key];
                }
                object = value;
            } else {
                object = {
                    defaultValue: {
                        value
                    }
                };
                if (parameters[key] !== undefined) {
                    object = parameters[key];
                }
                object.defaultValue.value = value;
            }
            parameters[key] = object;
        }

        const data = {
            parameters,
            conditions
        };
        const dataJson = JSON.stringify(data);
        const result = await fetch(`https://firebaseremoteconfig.googleapis.com/v1/projects/${firebaseProject}/remoteConfig`, {
            method: "PUT",
            headers: {
                "Content-Length": dataJson.length,
                "Content-Type": "application/json; UTF8",
                "Authorization": `Bearer ${token}`,
                "Accept-Encoding": "gzip",
                "If-Match": etag
            },
            body: dataJson
        });
        const status = result.status;
        if (status === 200) {
            console.log("FAQ remote config uploaded");
        } else {
            console.error(`FAQ remote config upload failed: ${status}: ${result.statusText}`);
        }
    } catch (e) {
        console.error(e);
    }
}

async function translateFile(file, language = undefined, format = "HTML") {
    const options = {
        secret: SKYAPP_SECRET_KEY,
        apiKey: SKYAPP_PUBLIC_KEY,
        projectId: SKYAPP_PROJECT_ID,
        fileName: file,
        format: format || null,
        language: LANGUAGE_TO_SKYAPP[language] || language
    };

    try {
        if (language === undefined) {
            return await onesky.getMultilingualFile(options);
        } else {
            return await onesky.getFile(options);
        }
    } catch (e) {
        console.error(`Failed to translate ${file} into ${language}: ${JSON.stringify(e)}`);
        return "";
    }
}

async function sendAppForTranslation(fileName, content, format = "HIERARCHICAL_JSON", force = false) {
    console.log(`Sending ${fileName} for translation`);
    const options = {
        secret: SKYAPP_SECRET_KEY,
        apiKey: SKYAPP_PUBLIC_KEY,
        projectId: SKYAPP_PROJECT_ID,
        language: DEFAULT_LANGUAGE,
        fileName: fileName,
        format,
        content,
        keepStrings: !force // avoid deleting all translations with an erroneous upload
    };

    try {
        await onesky.postFile(options);
    } catch (e) {
        console.error(`Failed to upload translation of ${fileName}: ${JSON.stringify(e)}`);
    }
}

function processByRegex(data) {
    if (Array.isArray(data)) {
        return data.map(processByRegex);
    }
    else if (typeof data === "string") {
        // non-breaking space (nbsp)
        if (currentVueKey === "cs" || currentVueKey === "sk") {
            data = data.replace(/(?<=\s)([kvszaiou])\s/gi, "$1\u00A0");
        } else if (currentVueKey === "en") {
            data = data.replace(/(?<=\s)(a|an|the)\s/gi, "$1\u00A0");
        }

        // localize erouska.cz links
        if (TRANSLATED_LANGS_WEB.includes(currentVueKey)) {
            data = data.replace(/(https:\/\/erouska.cz\/)(\w\w\/)?/gi, "$1" + currentVueKey + "/");
        }

        return data;
    }
    else if (typeof data === 'object' && data !== null) {
        const modified = {};
        for (const key of Object.keys(data)) {
            modified[key] = processByRegex(data[key]);
        }
        return modified;
    }
    throw Error(`Wrong type supplied to processByRegex: ${typeof data}, ${data}`);
}

function getFallback(language) {
    if (FALLBACK_LANGUAGE.hasOwnProperty(language)) {
        return FALLBACK_LANGUAGE[language];
    }
    return DEFAULT_LANGUAGE;
}

function normalizeTranslations(translations, language) {
    const fallback = getFallback(language);
    const data = translations[language];

    if (language !== DEFAULT_LANGUAGE) {
        for (const key of Object.keys(translations[DEFAULT_LANGUAGE])) {
            if (!data.hasOwnProperty(key)) {
                data[key] = translate(translations, fallback, key);
            }
        }
    }
    for (const key of Object.keys(data)) {
        if (Array.isArray(data[key])) {
            data[key] = data[key].join(" ").trim();
        }
    }
}

async function buildI18n(content) {
    const vueTranslation = {};

    for (const key of Object.keys(content)) {
        const vueKey = SKYAPP_TO_VUE[key] || key;
        let currentTranslation = content[key];
        normalizeTranslations(content, key);
        currentVueKey = vueKey;
        currentTranslation = processByRegex(currentTranslation);
        vueTranslation[vueKey] = dot.object(currentTranslation);
    }

    const directory = "locales";
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    fs.writeFileSync(`${directory}/web.json`, JSON.stringify(vueTranslation, null, 4));
}

/**
 * Creates ~/locales/web.json from OneSky translations.
 */
async function buildI18nOneSky() {
    const translationFile = await translateFile("web.json", undefined, "I18NEXT_MULTILINGUAL_JSON");
    const content = JSON.parse(translationFile);
    const translation = {};
    const allLanguages = [...TRANSLATED_LANGUAGES, DEFAULT_LANGUAGE]
    for (const language of allLanguages) {
        const key = LANGUAGE_TO_SKYAPP[language] || language;
        let data = {};
        if (content.hasOwnProperty(key))
        {
            data = content[key]["translation"];
        }
        else console.warn(`Language ${language} not found in OneSky`);
        translation[language] = data;
    }
    await buildI18n(translation);
}

/**
 * Creates ~/locales/web.json directly from ~/web.json to allow test of changes in ~/web.json for local development
 */
async function buildI18nLocal() {
    const translationFile = fs.readFileSync(TRANSLATION_SOURCE_FILE).toString();
    const content = {
        [DEFAULT_LANGUAGE]: JSON.parse(translationFile)
    };
    await buildI18n(content);
}

function translate(translation, language, key) {
    const strings = translation[language] || {};
    let result;
    if (strings.hasOwnProperty(key)) {
        result = strings[key];
    }
    else result = dot.pick(key, strings);

    if (result === undefined) {
        if (language === DEFAULT_LANGUAGE) {
            throw Error(`${key} not found for default language`);
        }
        const fallback = getFallback(language);
        console.warn(`${key} not found for ${language}, using ${fallback}`);
        return translate(translation, fallback, key);
    }
    return result;
}

async function renderFAQToMarkdown(translation) {
    const faq = require(FAQ_STRUCTURE_FILE);
    const values = {
        v2_helpMarkdown: {
            defaultValue: {},
            conditionalValues: {}
        },
        v2_helpJson: {
            defaultValue: {},
            conditionalValues: {}
        }
    };
    const referenceStructure = translation[DEFAULT_LANGUAGE];

    for (const language of Object.keys(translation)) {
        let helpMarkdown = '';
        let sectionArray = [];

        for (const sectionIndex of mobileFaqSectionOrder) {
            const sectionId = faq[sectionIndex]["section_id"];
            const sectionName = translate(translation, language, `web.faq.sections.${sectionId}.title`);
            const sectionDescription = translate(translation, language, `web.faq.sections.${sectionId}.description`);
            helpMarkdown += `# ${sectionName}\n`;
            let questionArray = [];

            for (const question of faq[sectionIndex]["questions"]) {
                const questionId = question["id"];
                const questionText = translate(translation, language, `web.faq.questions.${questionId}.question`);
                helpMarkdown += `## ${questionText}\n`;
                const answers = dot.pick(`web.faq.questions.${questionId}.answer`, referenceStructure) || [];
                let answerMarkdown = '';

                if (answers.length === 0) {
                    console.warn(`Missing answers for question ${questionId}`);
                }

                for (let index = 0; index < answers.length; index++) {
                    const key = `web.faq.questions.${questionId}.answer.${index}`;
                    const answer = convertToMarkdown(translate(translation, language, key));
                    helpMarkdown += `${answer}\n\n`;
                    answerMarkdown += (index ? '\n\n' : '') + answer;
                }

                questionArray.push({
                    question: questionText,
                    answer: answerMarkdown
                });
            }

            sectionArray.push({
                title: sectionName,
                subtitle: sectionDescription,
                icon: faq[sectionIndex]['icon'],
                questions: questionArray
            });
        }

        helpMarkdown = escapeLineEndings(helpMarkdown);
        let helpJson = JSON.stringify(sectionArray);

        if (LANGUAGE_TO_RC[language] === DEFAULT_RC_LANGUAGE_VALUE) {
            values.v2_helpMarkdown.defaultValue = { helpMarkdown };
            values.v2_helpJson.defaultValue = { helpJson };
        } else if (LANGUAGE_TO_RC[language]) {
            values.v2_helpMarkdown.conditionalValues[LANGUAGE_TO_RC[language]] = { helpMarkdown };
            values.v2_helpJson.conditionalValues[LANGUAGE_TO_RC[language]] = { helpJson };
        }
    }
    return values;
}

function translateTeam(translation, language, team) {
    return team.map(section => ({
        ...section,
        name: translate(translation, language, section["name"])
    }));
}

async function createLegacyTeamJson() {
    if (!fs.existsSync(TRANSLATION_BUILD_FILE)) {
        throw new Error(`${TRANSLATION_BUILD_FILE} seems to be missing. Please run \`gulp dist\` first`);
    }

    const translation = require(TRANSLATION_BUILD_FILE);
    const team = translateTeam(translation, DEFAULT_LANGUAGE, require(TEAM_FILE));
    fs.writeFileSync(LEGACY_TEAM_PATH, JSON.stringify(team));
}

async function updateRemoteConfig() {
    if (CREDENTIALS_FILE === undefined) {
        console.log("GOOGLE_APPLICATION_CREDENTIALS not set, skipping remote config upload");
        return;
    }
    if (!fs.existsSync(TRANSLATION_BUILD_FILE)) {
        throw new Error(`${TRANSLATION_BUILD_FILE} seems to be missing. Please run \`gulp dist\` first`);
    }

    const translation = require(TRANSLATION_BUILD_FILE);
    const values = {
        ...await renderFAQToMarkdown(translation)
    };

    await updateRemoteConfigValues(values);
}

async function uploadStrings() {
    await sendAppForTranslation(TRANSLATION_SOURCE_FILE, fs.readFileSync(TRANSLATION_SOURCE_FILE).toString());
}

async function forceUploadStrings() {
    await sendAppForTranslation(TRANSLATION_SOURCE_FILE, fs.readFileSync(TRANSLATION_SOURCE_FILE).toString(), undefined, true);
}

exports.buildI18nLocal = buildI18nLocal;
exports.buildI18n = buildI18nOneSky;
exports.updateRemoteConfig = updateRemoteConfig;
exports.uploadStrings = uploadStrings;

exports.up = uploadStrings;
exports.uploadF = forceUploadStrings;
exports.down = buildI18nOneSky;
exports.loc = buildI18nLocal;

exports.dist = series(buildI18nOneSky, createLegacyTeamJson);
exports.deploy = series(updateRemoteConfig);

exports.default = exports.dist;
