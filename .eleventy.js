const { DateTime } = require('luxon');
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  
  //RSS Feed Configuration
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss", // or "atom", "json"
    outputPath: "blog/rss.xml",
    collection: {
      name: "posts",
      limit: 0,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Death, Taxes, & Off-By-One Errors",
      subtitle: "",
      base: "https://dextersig.ca",
      author: {
        name: "Dexter Sigurdson",
        email: "dextersig@protonmail.com"
      }
    }
  });
  
  
  // Passthrough Files
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/CNAME");

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
  
  