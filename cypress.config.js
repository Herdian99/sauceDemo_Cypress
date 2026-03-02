require('dotenv').config()
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
      // expose dotenv variables to Cypress test runner via config.env
      config.env = config.env || {}
      if (process.env.PASSWORD) {
        // map to lower-case key expected by tests
        config.env.password = process.env.PASSWORD
      }
      return config
    },
  },
});
