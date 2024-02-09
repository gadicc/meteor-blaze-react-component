Package.describe({
  name: 'gadicc:blaze-react-component',
  version: '1.4.4',
  summary: '<Blaze template="itemsList" items={items} />',
  git: 'https://github.com/gadicc/meteor-blaze-react-component',
  documentation: '../README.md'
});

Package.onUse(function(api) {
  api.versionsFrom([ '3.0-beta.0' ]);
  api.use('ecmascript');
  api.use('blaze');
  api.use('templating');
  api.use('underscore');

  api.use('reactive-var', 'client');
  api.mainModule('blaze-react-component-client.js', 'client');

  api.mainModule('blaze-react-component-server.js', 'server');

  api.export('BlazeReactComponent');
  api.export('blazeToReact');
});

// Note: tests are in test-app, since we can't test-packages with
// peer dependencies.
