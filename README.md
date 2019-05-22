# changelogkeeper [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Write changelog using [keepachangelog](https://keepachangelog.com/en/1.0.0/) conventions

## Installation

```sh
$ npm install --save-dev changelogkeeper
```

## Usage

Add these scripts to package.json:

```json
// package.json
"scripts": {
  ...
  "commitChangelog": "git add CHANGELOG.md && git commit -m 'Bump changelog'",
  "postversion": "changelogkeeper && npm run commitChangelog",
  ...
}
```

And then run [npm version](https://docs.npmjs.com/cli/version.html):

```sh
npm version [major | minor | patch | ...]
```

It will read the package version and update the changelog accordingly.

### Options

If you have your changelog in another location you can pass the relative path like this:

```json
// package.json
"postversion": "changelogkeeper '../CHANGELOG.md' && npm run commitChangelog"
```

### Example

Before:

```json
// package.json
{
  ...
  "version": "3.1.4",
  ...
}
```

```md
// CHANGELOG.md

# Changelog

## [Unreleased]

### Added

- Some new Feature

## [3.1.4] - 2018-02-04

### Fixed

- Fixed something

## [3.1.3] - 2018-02-03

...
```

Then run:

```sh
npm version minor
```

After:

```json
// package.json
{
  ...
  "version": "3.2.0",
  ...
}
```

```md
// CHANGELOG.md

# Changelog

## [Unreleased]

## [3.2.0] - 2018-02-04

### Added

- Some new Feature

## [3.1.4] - 2018-02-04

### Fixed

- Fixed something

## [3.1.3] - 2018-02-03

...
```

## Development

Don't forget to run `npm link` so changelogkeeper can run itself.

## License

MIT © [Francisco Kahil]()

[npm-image]: https://badge.fury.io/js/changelogkeeper.svg
[npm-url]: https://npmjs.org/package/changelogkeeper
[travis-image]: https://travis-ci.org/codexico/changelogkeeper.svg?branch=master
[travis-url]: https://travis-ci.org/codexico/changelogkeeper
[daviddm-image]: https://david-dm.org/codexico/changelogkeeper.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/codexico/changelogkeeper
[coveralls-image]: https://coveralls.io/repos/codexico/changelogkeeper/badge.svg
[coveralls-url]: https://coveralls.io/r/codexico/changelogkeeper
