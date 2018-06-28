# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [1.4.1] - 2018-06-28
### Fixed
* We now explicitly depend on `underscore`, which since Meteor 1.7, is no longer
  a default package.  Thanks, @MaxGuitet!  (#16)

## [1.4.0] - 2016-10-31
### Added
* We now support the case where the `template` property is changed.  Previously
  this had no effect, but now the newly requested template will be rendered in
  place.  Useful for router actions where the template can vary.  Thanks,
  @lmachens.  (#8)  

## [1.3.0] - 2016-10-06
### Added
* Support a `className` parameter to set the `class` attribute on the `<span>`
  tag.  Thanks, @Praxie.  (#6)

## [1.2.0] - 2016-08-10
### Added
* If the template argument is a string name, and it doesn't exist, we
  warn the user to ensure the `templating` packing is installed.
* Ability to pass a Blaze.Template instance directly to the component's
  template arg, and if neither that nor a string is provided, throw a
  clear error.

## [1.1.2] - 2016-08-09
### Fixed
* Require `templating` as a direct package dep instead of assuming the user is
  using templates in their app, fixes #5.

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

[Unreleased]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.1.2...v1.1.0
[1.1.2]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/gadicc/meteor-blaze-react-component/compare/v1.0.0...v1.1.0
