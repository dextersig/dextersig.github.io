module.exports = function(eleventyConfig) {
    // call functions on eleventyConfig here

    eleventyConfig.addPassthroughCopy("src/css");
  
    return {
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      dir: {
        input: "src",
      },
    };
  };