#! /usr/bin/env node

require('dotenv').config()

const generateImage = require('../lib/generate-image');
const runScriptWithArgs = require('../lib/run-script-with-args');

runScriptWithArgs(generateImage);