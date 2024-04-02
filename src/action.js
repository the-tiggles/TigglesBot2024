const core  = require('@actions/core');
const github = require('@actions/github');
async function run() {
  console.log('hello world');
  const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
  console.log(GITHUB_TOKEN);
}

run();