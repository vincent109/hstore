Ext.define('HS.view.searchForm', {
	extend : 'Ext.form.Panel',
	xtype : 'user.searchForm',
	defaults : {
		padding : '10 10 10',
		xtype : 'textfield',
		labelWidth : 70
	},
	items : [ {
		name : 'name',
		fieldLabel : '姓名'
	}, {
		name : 'major',
		fieldLabel : '专业'
	}],
	buttons : [ {
		text : '查询',
		itemId : 'searchBtn'
	}]
});