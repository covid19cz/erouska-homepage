'use strict';

const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const admin = require("firebase-admin");
const onesky = require("@brainly/onesky-utils");
const dot = require('dot-object');
const {series} = require('gulp');

const CREDENTIALS_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const getServiceAccount = () => require(path.resolve(CREDENTIALS_FILE));

const SKYAPP_PROJECT_ID = "359388";
const SKYAPP_PUBLIC_KEY = "e0DfHgNmzrc67zt3RabZRWcYpkSISL1W";
const SKYAPP_SECRET_KEY = process.env.SKYAPP_SECRET_KEY;

const PHONE_GUIDE_FILES = [
    "asus.html",
    "huawei.html",
    "lenovo.html",
    "samsung.html",
    "sony.html",
    "xiaomi.html"
];
const DEFAULT_LANGUAGE = "cs";
const TRANSLATED_LANGUAGES = ["en"];
const LANGUAGE_TO_SKYAPP = {
    "en": "en_GB"
};
const SKYAPP_TO_VUE = {
    "en-GB": "en"
};

function normalizeMarkdown(content) {
    return content.replace(/\n/g, "\\n");
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
            let object = {
                defaultValue: {
                    value
                }
            };
            if (parameters[key] !== undefined) {
                object = parameters[key];
            }
            object.defaultValue.value = value;
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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
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

async function sendAppForTranslation(fileName, content) {
    const options = {
        secret: SKYAPP_SECRET_KEY,
        apiKey: SKYAPP_PUBLIC_KEY,
        projectId: SKYAPP_PROJECT_ID,
        language: DEFAULT_LANGUAGE,
        fileName: fileName,
        format: 'HIERARCHICAL_JSON',
        content,
        keepStrings: true // avoid deleting all translations with an erroneous upload
    };

    try {
        await onesky.postFile(options);
    }
    catch (e) {
        console.error(`Failed to upload translation of ${fileName}: ${JSON.stringify(e)}`);
    }
}

async function buildI18n() {
    const translationFile = await translateFile("web.json", undefined, "I18NEXT_MULTILINGUAL_JSON");
    const content = JSON.parse(translationFile);
    const vueTranslation = {};

    for (const key of Object.keys(content)) {
        const vueKey = SKYAPP_TO_VUE[key] || key;
        vueTranslation[vueKey] = {
            t: dot.object(content[key]["translation"])
        };
    }

    const directory = "locales";
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    fs.writeFileSync(`${directory}/web.json`, JSON.stringify(vueTranslation, null, 4));
}

async function updateRemoteConfig() {
    if (CREDENTIALS_FILE === undefined) {
        console.log("GOOGLE_APPLICATION_CREDENTIALS not set, skipping remote config upload");
        return;
    }

    const FAQ_FILE = "faq.html";
    const faq = normalizeMarkdown(await translateFile(FAQ_FILE, DEFAULT_LANGUAGE));
    const values = {
        helpMarkdown: faq
    };
    for (const language of TRANSLATED_LANGUAGES) {
        values[`helpMarkdown_${language}`] = normalizeMarkdown(await translateFile(FAQ_FILE, language));
    }

    for (const file of PHONE_GUIDE_FILES) {
        const id = path.basename(file, ".html");
        const name = `batteryOptimization${capitalize(id)}Markdown`;
        values[name] = normalizeMarkdown(await translateFile(file, DEFAULT_LANGUAGE));
        for (const language of TRANSLATED_LANGUAGES) {
            values[`${name}_${language}`] = normalizeMarkdown(await translateFile(file, language));
        }
    }

    await updateRemoteConfigValues(values);
}

async function uploadStrings() {
    await sendAppForTranslation("web.json", fs.readFileSync("web.json").toString());
}

exports.buildI18n = buildI18n;
exports.updateRemoteConfig = updateRemoteConfig;
exports.uploadStrings = uploadStrings;

exports.dist = series(buildI18n);
exports.deploy = series(updateRemoteConfig);

exports.default = exports.dist;
