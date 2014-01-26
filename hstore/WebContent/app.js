/**
 *= require_self
 */
Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', './extjs/src/ux/');
// create a new instance of Application class
Ext.application({
  // the global namespace
  name: 'HS',

  appFolder: 'app',

  controllers: ['Users'],

  autoCreateViewport: true
});
