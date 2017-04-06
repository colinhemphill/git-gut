#! /usr/bin/env node

var shell = require('shelljs');

var userArgs = process.argv.slice(2);
var commands = userArgs[0];

console.log(commands);
