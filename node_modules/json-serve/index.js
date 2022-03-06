#!/usr/bin/env node
const {version} = require('./package.json');
const program = require('commander');
const path = require('path');
const glob = require('glob');
const chokidar = require('chokidar');

const app = require('./expressApp');

program
  .version(version)
  .option('-p, --port <port>', 'port to listen')
  .option('-w, --watch', 'watch the directory for changes')
  .parse(process.argv);

const [dir] = program.args;

if (!dir) {
  console.error('directory required');
  process.exit(1);
}

const jsondir = path.join(__dirname, dir);
const jsonGlob = path.join(__dirname, dir, '*.json');

let closeApp;

function startApp() {
  const jsonFileNames = glob.sync(jsonGlob).map(function(filename) {
    return path.basename(filename, '.json');
  });

  closeApp = app(jsonFileNames, jsondir, program.port)
}

startApp()

if (program.watch) {
  const watcher = chokidar.watch(jsonGlob);

  watcher
    .on('ready', function() { console.log('watching ' + jsonGlob + '...')})
    .on('raw', function() {
      if (closeApp) {
        console.log('Change detected, restarting...');
        closeApp();
      }
      startApp();
    })
}
