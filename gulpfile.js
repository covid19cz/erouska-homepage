'use strict';

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
    source: ['js/libs/simple-lightbox.min.js', 'js/components/**/*.js', 'js/main.js'],
    target: 'js/',
    filename: 'scripts.js',
    watch: ['js/**/*.js', '!js/scripts.js'],
    components: ['js/components/**/*.js', 'js/main.js']
  },
  img: {
    source: 'img/**/*.{gif,jpg,jpeg,png}',
    target: 'img'
  },
  icons: {
    source: 'img/icons/**/*.svg',
    target: 'img/',
    filename: 'icons.svg',
    style: '../css/icons/icons.scss',
    preview: '../css/icons/icons.html',
    prettycode: true
  }
};

// gulp
var gulp = require('gulp');
  // spojení souborů
  var concat = require('gulp-concat');
  // Cheerio - manipulace v HTML/XML souborech
  var cheerio = require('cheerio')
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
// Imagemin - optimalizace obrázků
var imagemin = require('gulp-imagemin');
// generování SVG spritů a ikon
var svgstore = require('gulp-svgstore');
// minimalizace SVG
var svgmin = require('gulp-svgmin');

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

// CSS kompilace (produkce)
gulp.task('makecss', ['csscomb'], function() {
  return gulp.src(settings.css.source)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(postcss(postcssPlugins))
    .pipe(rename(settings.css.filename))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(settings.css.target));
});

// CSScomb - úpravy SASS souborů (řazení vlastností, odsazení...)
gulp.task('csscomb', function() {
  return gulp.src(settings.css.components, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(csscomb())
    .pipe(gulp.dest('./'));
});

// CSS - lintování (Stylelint)
gulp.task('stylelint', ['makecss'], function() {
  return gulp.src(settings.css.components, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(stylelint({
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }));
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

// JavaScript - lintování
gulp.task('jslint', ['makejs'], function() {
  return gulp.src(settings.js.components)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

// Prettier - uhlazení JS souborů
gulp.task('prettier', function() {
  return gulp.src(settings.js.components, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(prettier({ singleQuote: true }))
    .pipe(gulp.dest('./'));
});

// optimalizace obrázků
gulp.task('images', function() {
  return gulp.src(settings.img.source)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(imagemin({
      interlaced: true,
      pngquant: true,
      progressive: true
    }))
    .pipe(gulp.dest(settings.img.target))
});

// generování SVG sprite ikon
gulp.task('svg-icons', function() {
  return gulp.src(settings.icons.source)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(svgstore())
    .pipe(through2.obj(function (file, encoding, cb) {

      var $ = cheerio.load(file.contents.toString(), { xmlMode: true });

      // odstraní fill atributy u souborů, které nemají v názvu color
      $('symbol').not('[id*="color"]').find('*').removeAttr('fill');
      // odstraní style tagy
      $('[style]').removeAttr('style');

      // vytáhneme si název, výšku a šířku
      var data = $('svg > symbol').map(function() {
        var $this = $(this);
        var name = $this.attr('id');
        var viewBox = $this.attr('viewBox').split(' ');

        return {
          name: name,
          width: viewBox[2],
          height: viewBox[3],
        };
      }).get();

      // převedeme na SASS formát
      var dataToStyles = "";
      for (var i = 0; i < data.length; i++) {
        dataToStyles = dataToStyles + '\n.icon--' + data[i].name + ' {' + '\n';
          dataToStyles = dataToStyles + '  width: ' + data[i].width + 'px;\n\n';
          dataToStyles = dataToStyles + '  &:before {' + '\n';
          dataToStyles = dataToStyles + '    padding-top: (' + data[i].height + ' / ' + data[i].width + ') * 100%;' + '\n';
          dataToStyles = dataToStyles + '  }' + '\n';
        dataToStyles = dataToStyles + '}' + '\n';
      }

      // uložíme do soubou
      var fileSASS = new Vinyl({
        path: settings.icons.style,
        contents: new Buffer.from(dataToStyles)
      });

      // vygenerujeme náhledový HTML soubor
      var dataToPreview = "";
      dataToPreview = dataToPreview + '<!DOCTYPE html><html lang="cs"><head><meta charset="utf-8"><title>SVG preview</title><link rel="stylesheet" href="/css/styles.css"></head><body>' + '\n'
      for (var i = 0; i < data.length; i++) {
        dataToPreview = dataToPreview + '<div style="padding:5px;margin:5px;display:inline-block;border:1px dotted gray;">' + '\n'
        dataToPreview = dataToPreview + '<span class="icon icon--' + data[i].name + '">' + '\n'
        dataToPreview = dataToPreview + '  <svg class="icon__svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '\n'
        dataToPreview = dataToPreview + '    <use xlink:href="/img/icons.svg#' + data[i].name + '" x="0" y="0" width="100%" height="100%"></use>' + '\n'
        dataToPreview = dataToPreview + '  </svg>' + '\n'
        dataToPreview = dataToPreview + '</span>' + '\n'
        dataToPreview = dataToPreview + '</div>' + '\n'
      }
      dataToPreview = dataToPreview + '</body>' + '\n'

      // uložíme do soubou
      var fileHTML = new Vinyl({
        path: settings.icons.preview,
        contents: new Buffer.from(dataToPreview)
      });

      file.contents = new Buffer.from($.xml());
      this.push(fileSASS);
      this.push(fileHTML);
      this.push(file);
      cb();

    }))
    .pipe(gulp.dest(settings.icons.target));
})

// optimalizace SVG sprite
gulp.task('svg-optimize', ['svg-icons'], function() {
  return gulp.src(settings.icons.target + settings.icons.filename, { base: './' })
    .pipe(plumber({ errorHandler: onError }))
    .pipe(svgmin({
        plugins: [
          { removeUselessDefs: false },
          { removeXMLProcInst: false },
          { removeDoctype: false },
          { removeTitle: false },
          { cleanupIDs: false },
          { removeViewBox: false }
        ],
        js2svg: { pretty: settings.icons.prettycode }
    }))
    .pipe(gulp.dest('./'));
});

// sledování změn souborů
gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(settings.icons.source, ['svg-optimize']);
  gulp.watch(settings.css.watch, ['sass']);
  gulp.watch(settings.js.watch, ['concatjs', 'browsersync-reload']);
  gulp.watch(settings.browsersync.watch, ['browsersync-reload']);
});

// aliasy tasků
  // úpravy před nahráním do produkce
  gulp.task('deploy', ['stylelint', 'jslint', 'images']);
  // generování ikon + optimalizace
  gulp.task('icons', ['svg-optimize']);
  // defaultni task
  gulp.task('default', ['watch']);
