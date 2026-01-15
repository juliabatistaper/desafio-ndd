const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = async (on, config) => {
  // Ensure step-definition globs are available to the preprocessor before plugin registration
  config.env = config.env || {};
  config.env.cucumberStepDefinitions = [
    'cypress/features/**/*.steps.js',
    'cypress/features/**/*.steps.ts',
    'cypress/e2e/steps/**/*.js',
    'cypress/features/*steps.js'
  ];

  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
};