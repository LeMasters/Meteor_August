Package.describe({
  name: 'mixpanel',
  summary: 'A local mixpanel package for MSB research project.'
});

Package.on_use(function (api){
  api.add_files('mixpanel.js', ['client']);
});