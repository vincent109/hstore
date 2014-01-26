// Models are typically used with a Store, which is basically a collection of Model instances.
Ext.define('HS.store.Users', {
  extend: 'Ext.data.Store',

  model: 'HS.model.User',
  autoLoad: true,
  pageSize: 15,
  autoSync: false,

  listeners: {
    load: function() {
     // console.log(arguments);
    },
    update: function() {
     // console.log(arguments);
    },
    beforesync: function() {
     // console.log(arguments);
    }
  }
});
