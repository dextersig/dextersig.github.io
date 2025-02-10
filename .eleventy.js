const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
    // call functions on eleventyConfig here

    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addFilter('readableDate', (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
        'LLL dd, yyyy'
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