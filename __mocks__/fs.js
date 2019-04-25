// __mocks__/fs.js
"use strict";

const fs = jest.genMockFromModule("fs");

function readFileSync() {
  return "## [Unreleased]";
}

function writeFileSync(file, data) {
  return data;
}

fs.writeFileSync = writeFileSync;
fs.readFileSync = readFileSync;

module.exports = fs;
