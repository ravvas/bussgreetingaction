const core = require('@actions/core');
const moment = require('moment');

try {
  const name = core.getInput('name');
  console.log(`Hello, ${name}. We appreciate your business!`);
  const timestamp = "2024 12 12";
  console.log(`Greeting issued at: ${timestamp}`);
  core.setOutput("timestamp", timestamp);
} catch (error) {
  core.setFailed(error.message);
}