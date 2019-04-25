const assert = require("assert");
const { generateChangelog } = require("../index.js");
const fs = require("fs");

const file = "CHANGELOG.md";

describe("changelogkeeper", () => {
  it("Generates a next changelog", () => {
    const npmPackageVersion = `${process.env.npm_package_version}--test`;

    const data = fs.readFileSync(file).toString();

    const changelogHeader = `## [${npmPackageVersion}] -`;

    const nextChangelog = generateChangelog(npmPackageVersion, data);

    assert(nextChangelog.includes(changelogHeader));
  });
});
