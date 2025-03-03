const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    // call functions on eleventyConfig here

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");

    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'yyyy-MM-dd'
      );
    })
  
    return {
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
      dir: {
        input: "src",
        output: "docs",
      },
    };
  };