const assert = require("assert");
const {
  generateChangelog,
  readChangelog,
  writeChangelog
} = require("../index.js");

jest.mock("fs");

const file = "CHANGELOG.md";

describe("changelogkeeper fs mocked", () => {
  it("Generates a next changelog", () => {
    const npmPackageVersion = `${process.env.npm_package_version}--test`;

    const data = readChangelog(file);

    const changelogHeader = `## [${npmPackageVersion}] -`;

    const nextChangelog = generateChangelog(npmPackageVersion, data);

    assert(nextChangelog.includes(changelogHeader));
  });

  it("keep changelog", () => {
    // eslint-disable-next-line camelcase
    process.env.npm_package_version = "1.0.0-test";

    const changelogkeeper = require("../index.js").changelogkeeper;
    const nextChangelog = changelogkeeper();

    const changelogHeader = `## [${process.env.npm_package_version}] -`;
    assert(nextChangelog.includes(changelogHeader));
  });

  it("should read changelog", () => {
    const expectedData = "## [Unreleased]";

    const readData = readChangelog(file);
    expect(readData).toContain(expectedData);
  });

  it("should write changelog", () => {
    const expectedData = "## [Unreleased]";

    const writeData = writeChangelog(expectedData);
    expect(writeData).toBe(expectedData);
  });
});
