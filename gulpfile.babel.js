import { src, dest, watch as watchSrc, parallel, series } from 'gulp'
import del from 'del'
import plumber from 'gulp-plumber'
import cp from 'child_process'

import sass from 'gulp-sass'
sass.compiler = require('node-sass')
import postcss from 'gulp-postcss'
import cssEnv from 'postcss-preset-env'

import browserSync from 'browser-sync'

// where are source files
const input = {
  scripts: `assets/scripts/**/*.js`,
  styles: `assets/styles/**/*.scss`,
  fonts: `assets/fonts/**/*`,
  images: `assets/img/**/*`,
  pages: `src/**/*`
}

// where is output expected
const OUTPUT = 'dist'

// source file globs
// const SCRIPTS_GLOB = `${SRC}/scripts/**/*.js`
// const STYLES_GLOB = `${SRC}/styles/**/*.scss`
// const FONTS_GLOB = `${SRC}/fonts/**/*`
// const IMAGES_GLOB = `${SRC}/img/**/*`
// const VIEWS_GLOB = `${SRC}/views/**/*`

// clean the output directory
export const clean = () => {
  return del([OUTPUT])
}

// @TODO decide on script strategy
export const scripts = () => {
  return src(input.scripts)
    .pipe(dest(`${OUTPUT}/js`))
    .pipe(browserSync.stream())
}

// compile styles
export const styles = () => {
  return src(input.styles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([cssEnv({ stage: 0 })]))
    .pipe(dest(`${OUTPUT}/css`))
    .pipe(browserSync.stream())
}

export const images = () => {
  return (
    src(input.images)
      // @TODO Minify
      .pipe(plumber())
      .pipe(dest(`${OUTPUT}/img`))
      .pipe(browserSync.stream())
  )
}

export const fonts = () => {
  return src(input.fonts).pipe(dest(`${OUTPUT}/fonts`))
}

export const generate = done => {
  return cp.spawn('eleventy').on('close', code => {
    if (code === 0) {
      browserSync.reload()
      done()
    } else {
      console.error(`build failed with code ${code}`)
      browserSync.notify('build failed 😞')
      done()
    }
  })
}

export const watch = () => {
  browserSync.init({ server: OUTPUT })
  watchSrc(input.scripts, scripts)
  watchSrc(input.styles, styles)
  watchSrc(input.images, images)
  watchSrc(input.fonts, fonts)
  watchSrc(input.pages, generate)
}

const assets = parallel(scripts, styles, fonts, images)
export const dev = series(clean, generate, assets, watch)
export const build = series(clean, generate, assets)

// set bare 'gulp' command to dev
export default dev
