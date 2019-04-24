const assert = require("assert");
const generateChangelog = require("../index.js").generateChangelog;
const fs = require("fs");

describe("changelogkeeper", () => {
  it("Generates a next changelog", () => {
    const npmPackageVersion = `${process.env.npm_package_version}--test`;

    const data = fs.readFileSync("CHANGELOG.md").toString();

    const changelogHeader = `## [${npmPackageVersion}] -`;

    const nextChangelog = generateChangelog(npmPackageVersion, data);

    assert(nextChangelog.includes(changelogHeader));
  });
});
