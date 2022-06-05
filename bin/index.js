#! /usr/bin/env node
"use strict";

const fs = require("fs");
const yargs = require("yargs");

const usage = "\nUsage: aidx <file_type> <file_name>";
const options = yargs.usage(usage).help(true).argv;
const args = yargs.argv._;
const type = args[0];
const fileName = args[1];

const rawdata = fs.readFileSync("autoindexer.json");
const config = JSON.parse(rawdata);

fs.writeFile(config[type].dir + "/" + fileName + ".js", "", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("FIle created successfully.");
  }
});

fs.appendFile(
  config[type].dir + "/" + "index.js",
  "\nexport { default as " + fileName + ' } from "./' + fileName + '";',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Index updated.");
    }
  }
);
