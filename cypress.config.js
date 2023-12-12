const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Configure the viewport and disable the video feature
  viewportHeight: 1080,
  viewportWidth: 1920,  
  video:false,
  e2e: {
    baseUrl: "web", //Insert the BaseURL for the app
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
