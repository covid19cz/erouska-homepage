'use strict';

const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");
const TurndownService = require("turndown");
const fetch = require("node-fetch");
const admin = require("firebase-admin");

const WEBSITE_URL = process.env.WEBSITE_URL || "https://covid19.web.app/";
const CREDENTIALS_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const getServiceAccount = () => require(path.resolve(CREDENTIALS_FILE));

// nastavení
var settings = {
  browsersync: {
    url: 'http://erouska.test/',
    watch: ['*.html', '*.htm', '*.php']
  },
  css: {
    source: 'css/styles.scss',
    target: 'css/',
    filename: 'styles.css',
    watch: ['css/**/*.scss', 'css/**/*.css', '!css/styles.css'],
    components: ['css/base/**/*.scss', '!css/base/print.scss', '!css/base/variables.scss', 'css/components/**/*.scss']
  },
  js: {
    source: ['js/main.js'],
    target: 'js/',
    filename: 'scripts.js',
    watch: ['js/**/*.js', '!js/scripts.js'],
    components: ['js/components/**/*.js', 'js/main.js']
  },
  img: {
    source: 'img/**/*.{gif,jpg,jpeg,png}',
    target: 'img'
  }
};

// gulp
var gulp = require('gulp');
  // spojení souborů
  var concat = require('gulp-concat');
  // Cheerio - manipulace v HTML/XML souborech
  var cheerio = require('cheerio');
  // plumber - odchycení chybových hlášek
  var plumber = require('gulp-plumber');
  // přejmenování souborů
  var rename = require("gulp-rename");
  // sourcemaps - generování map zdrojů
  var sourcemaps = require('gulp-sourcemaps');
  // through2 - Node wrapper
  var through2 = require('through2');
  // Vinyl - konvertor streamu
  var Vinyl = require('vinyl');
// BrowserSync - live realod, server, ovládání prohlížeče
var browsersync = require('browser-sync');
// SASS - generování CSS z preprocesoru
var sass = require('gulp-sass');
// postCSS - postprocessing CSS (minifikace, autoprefixer...)
var postcss = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');
  var cssnano = require('cssnano');
  var flexbugs = require('postcss-flexbugs-fixes');
  var pxtorem = require('postcss-pxtorem');
// CSScomb - uhlazení SASS souborů (řazení vlastností, odsazení...)
var csscomb = require('gulp-csscomb');
// lintování CSS
var stylelint = require('gulp-stylelint');
// minifikace JavaScriptu
var uglify = require('gulp-uglify');
// lintování JavaScriptu
var jshint = require('gulp-jshint');
// Prettier - uhlazení JS souborů
var prettier = require('gulp-prettier');
// generování SVG spritů a ikon
var svgstore = require('gulp-svgstore');
// minimalizace SVG
var svgmin = require('gulp-svgmin');
var runSequence = require('run-sequence');

// postCSS pluginy a nastavení
var postcssPlugins = [
  flexbugs(),
  pxtorem(),
  autoprefixer(),
  cssnano()
];

// výpis chybových hlášek
var onError = function (err) {
  console.log(err);
  this.emit('end');
};

// nastavení BrowserSync
gulp.task('browser-sync', function() {
  browsersync({
    proxy: settings.browsersync.url
  });
});

// BrowserSync live-reload
gulp.task('browsersync-reload', function () {
    browsersync.reload();
});

// SASS kompilace
gulp.task('sass', function() {
  return gulp.src(settings.css.source)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(rename(settings.css.filename))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(settings.css.target))
    .pipe(browsersync.reload({ stream: true }));
});

// CSScomb - úpravy SASS souborů (řazení vlastností, odsazení...)
gulp.task('csscomb', function() {
  return gulp.src(settings.css.components, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(csscomb())
    .pipe(gulp.dest('./'));
});

// CSS kompilace (produkce)
gulp.task('makecss', ['csscomb'], function() {
  return gulp.src(settings.css.source)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'compressed' }))
    .pipe(postcss(postcssPlugins))
    .pipe(rename(settings.css.filename))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(settings.css.target));
});

// JavaScript - spojení souborů
gulp.task('concatjs', ['prettier'], function() {
  return gulp.src(settings.js.source, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(concat(settings.js.target + settings.js.filename))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'))
    .pipe(browsersync.reload({ stream: true }));
});

// JavaScript - spojení a minifikace (produkce)
gulp.task('makejs', ['concatjs'], function() {
  return gulp.src(settings.js.target + settings.js.filename, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'));
});

// Prettier - uhlazení JS souborů
gulp.task('prettier', function() {
  return gulp.src(settings.js.components, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(prettier({ singleQuote: true }))
    .pipe(gulp.dest('./'));
});

// kopírování souborů
gulp.task('transfer', function() {
  return gulp.src(['./*.html', 'favicon.ico', 'robots.txt', 'css/styles.css', 'css/styles.css.map', 'js/scripts.js', 'js/scripts.js.map', 'img/**/*', 'downloads/**/*'], { base:"." })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest('dist/'));
});

// sledování změn souborů
gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(settings.css.watch, ['sass']);
  gulp.watch(settings.js.watch, ['concatjs', 'browsersync-reload']);
  gulp.watch(settings.browsersync.watch, ['browsersync-reload']);
});

function renderHandlebars(templateFile, context, output) {
    const template = fs.readFileSync(templateFile).toString();
    const page = Handlebars.compile(template);
    const result = page(context);
    fs.writeFileSync(output, result);
}

function normalizeMarkdown(content) {
  return content.replace(/\n/g, "\\n");
}

function markdownifyFile(path) {
  const content = fs.readFileSync(path).toString();
  const turndownService = new TurndownService();
  return turndownService.turndown(content);
}

function isDirty(data, values) {
  for (const key of Object.keys(values)) {
    if (data[key] === undefined || data[key]["defaultValue"]["value"] !== values[key]) {
      console.log(`Key ${key} is dirty`);
      return true;
    }
  }
  return false;
}

async function updateRemoteConfig(values) {
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

      if (!isDirty(body["parameters"], values)) {
        console.log("Values not changed, skipping");
        return;
      }

      for (const key of Object.keys(values)) {
        const value = values[key];
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
    }
    catch (e) {
      console.error(e);
    }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

gulp.task('build-team', function () {
    const content = fs.readFileSync("people.json").toString();
    const data = JSON.parse(content);
    data.sort((a, b) => a.id - b.id);

    for (const section of data) {
      for (const person of section["people"] || []) {
        const url = person["photoUrl"];
        if (url === undefined) {
          person["photoUrl"] = `${WEBSITE_URL}img/photo-avatar.png`;
        } else {
          person["photoUrl"] = `${WEBSITE_URL}img/photos/${url}`;
        }
      }
    }
    fs.writeFileSync("dist/peoples.json", JSON.stringify(data));

    const ctx = {
      sections: data
    };

    renderHandlebars("tym.hbs", ctx, "dist/tym.html");
});
gulp.task('build-faq', function () {
    const content = fs.readFileSync("faq.html.template").toString();
    renderHandlebars("caste-dotazy.hbs", {faq: content}, "dist/caste-dotazy.html");
});
gulp.task('update-remote-config', async function() {
    if (CREDENTIALS_FILE === undefined) {
      console.log("CREDENTIALS_FILE not set, skipping remote config upload");
      return;
    }
    const faq = normalizeMarkdown(markdownifyFile("faq.html.template"));
    const values = {
      helpMarkdown: faq
    };
    for (const file of fs.readdirSync("navody")) {
      const filePath = `navody/${file}`;
      const name = `batteryOptimization${capitalize(path.basename(filePath, ".md"))}Markdown`;
      values[name] = normalizeMarkdown(fs.readFileSync(filePath).toString());
    }

    await updateRemoteConfig(values);
});

gulp.task('dist', function(done) {
    runSequence('makecss', 'makejs', 'transfer', 'build-team', 'build-faq', 'update-remote-config', function() {
        done();
    });
});

// defaultni task
gulp.task('default', ['watch']);
