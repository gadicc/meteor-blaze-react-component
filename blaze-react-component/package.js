Package.describe({
  name: 'gadicc:blaze-react-component',
  version: '1.3.0',
  summary: '<Blaze template="itemsList" items={items} />',
  git: 'https://github.com/gadicc/meteor-blaze-react-component',
  documentation: '../README.md'
});

Package.onUse(function(api) {
  api.versionsFrom([ '1.3-rc.0', '1.3-beta.10', '1.3-modules-beta.0' ]);
  api.use('ecmascript');
  api.use('blaze');
  api.use('templating');

  api.use('reactive-var', 'client');
  api.mainModule('blaze-react-component-client.js', 'client');

  api.mainModule('blaze-react-component-server.js', 'server');

  api.export('BlazeComponent');
  api.export('blazeToReact');
});

// Note: tests are in test-app, since we can't test-packages with
// peer dependencies.
