const gulp = require('gulp')
const config = require('../config')
const production = config.production
const html = require('@pixel2html/pipes').html
const BASE = config.directories.dist.base

// Epic h4xxxxx
const JS_DIR = config.directories.dist.scripts.split(`${BASE}/`)[1]
const CSS_DIR = config.directories.dist.styles.split(`${BASE}/`)[1]

const JS_EXT = '.js'
const CSS_EXT = production ? '.min.css' : '.css'

const js = [
  `${JS_DIR}/main${JS_EXT}`
]

if (production) js.unshift('//code.jquery.com/jquery-3.3.1.min.js')

const css = [
  `${CSS_DIR}/vendor${CSS_EXT}`,
  `${CSS_DIR}/main${CSS_EXT}`
]

gulp.task('markup', () =>
  gulp.src(config.directories.src.markup + '/*.html')
    .pipe(html({
      cssModules: `./${config.directories.src.cssModules}`,
      htmlReplace: { js, css }
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.markup))
)
