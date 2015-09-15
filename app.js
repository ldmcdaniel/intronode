#!/usr/bin/env node

var argv = require('yargs').argv;
var prompt = require('prompt');
var help = require('./app/help')
var fs = require('fs');
var zipFile = require('./app/zipfile');
var csv = require('./app/csv');

if(argv.help) {
  help();
}

if(argv.file) {
  zipFile(argv.file);
}

if(argv.csv) {
  csv(argv.csv);
}

prompt.override = argv;
prompt.message = prompt.delimiter = '';
prompt.start();

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);
})

function printHelloMessage(name) {
  console.log("Hello " + name + '!');
  // var stream = fs.createReadStream('./app/bigfile');
  process.stdout.write('Hello ' + name + ' Again!!\n');
  // stream.pipe(process.stdout);
}



