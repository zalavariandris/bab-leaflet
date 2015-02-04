Package.describe({
  name: 'bab:leaflet',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'leaflet map tempalte for meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['coffeescript', 'templating'], 'client');
  api.use('mrt:leaflet', 'client');
  api.addFiles(['bab:blazeicon.js' ,'bab:leaflet.html', 'bab:leaflet.coffee'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bab:leaflet');
  api.addFiles('bab:leaflet-tests.js');
});
