const fs = require("fs");

function generateChangelog(npmPackageVersion, data) {
  const nextChangelogData = `## [Unreleased]

## [${npmPackageVersion}] - ${new Date().toISOString().split("T")[0]}`;

  return data.replace("## [Unreleased]", nextChangelogData);
}

function readChangelog() {
  return fs.readFileSync("CHANGELOG.md").toString();
}

function writeChangelog(data) {
  return fs.writeFileSync("CHANGELOG.md", data);
}

function changelogkeeper() {
  const npmPackageVersion = process.env.npm_package_version;

  const actualChangelog = readChangelog();

  const nextChangelog = generateChangelog(npmPackageVersion, actualChangelog);

  writeChangelog(nextChangelog);
}

module.exports = {
  changelogkeeper,
  generateChangelog
};
