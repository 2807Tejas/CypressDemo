const cypress = require("cypress");
const { defineConfig } = require("cypress");
// const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  //reporter:'cypress-Mochawesome-reporter',
  
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     
      // implement node event listeners here
    },
    // baseUrl: 'https://learn.cypress.io/real-world-examples'
  },
  viewportHeight: 1000,
  viewportWidth : 1400,
  watchForFileChanges : false,
  //testIsolation: false,
  //pageLoadTimeout: 90000
});
