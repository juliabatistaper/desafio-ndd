const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/features/**/*.feature',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/prepare')(on, config);
    }
  }
});
