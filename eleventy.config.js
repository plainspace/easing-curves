module.exports = function(config) {
  config.addPassthroughCopy({"src/static": "static"})

  return {
    dir: {
      input: "src/views", // <- all other options relative to here
      // layouts: "_layouts",
      data: "../data"
    }
  }
}
