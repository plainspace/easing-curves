module.exports = function(eleventyConfig) {
  // add markdown plugins
  let markdownIt = require('markdown-it')
  let blockImagePlugin = require('markdown-it-block-image')
  let options = { html: true }
  let markdownLib = markdownIt(options).use(blockImagePlugin)
  eleventyConfig.setLibrary('md', markdownLib)

  // return the config object
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
