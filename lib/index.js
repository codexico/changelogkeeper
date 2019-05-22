const fs = require("fs");
const path = require("path");

function filePath() {
  return path.resolve(process.cwd(), process.argv[2] || "CHANGELOG.md");
}

function generateChangelog(npmPackageVersion, data) {
  const nextChangelogData = `## [Unreleased]

## [${npmPackageVersion}] - ${new Date().toISOString().split("T")[0]}`;

  return data.replace("## [Unreleased]", nextChangelogData);
}

function readChangelog() {
  return fs.readFileSync(filePath()).toString();
}

function writeChangelog(data) {
  return fs.writeFileSync(filePath(), data);
}

function changelogkeeper() {
  const npmPackageVersion = process.env.npm_package_version;

  const actualChangelog = readChangelog();

  const nextChangelog = generateChangelog(npmPackageVersion, actualChangelog);

  return writeChangelog(nextChangelog);
}

module.exports = {
  changelogkeeper,
  generateChangelog,
  readChangelog,
  writeChangelog
};
