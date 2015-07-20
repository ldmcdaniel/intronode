#!/usr/bin/env node

var argv = require('yargs').argv;
var prompt = require('prompt');
var help = require('./app/help')

if(argv.help) {
  help();
}

prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);
})

function printHelloMessage(name) {
  console.log("Hello " + name + '!');
  process.stdout.write('Hello ' + name + ' Again!!\n');
}




