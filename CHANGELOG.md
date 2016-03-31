# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.1.1] - 2016-03-31
### Changed
- We now render into a `<span />` instead of a `<div />`.  This should be a
  transparent change in most cases, although I apologize if you have to re-fix
  any CSS you might have used to work around the original un-intended
  behaviour.

## [1.1.0] - 2016-03-26
### Added
- A `blazeToReact()` shortcut for those that want it, see the notes in the
  README. 

## 1.0.0 - 2016-03-21

Initial release.

[Unreleased]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.1.1...HEAD
[1.1.1]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.0.0...v1.1.0