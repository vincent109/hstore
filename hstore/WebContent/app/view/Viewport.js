Ext.define('HS.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',
  items: [{
    xtype: 'userlist',
    title: '用户管理',
    html : 'List of users will go here'
  }]
});
