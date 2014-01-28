Ext.define('HS.controller.Users', {
  extend: 'Ext.app.Controller',

  stores: ['Users'],
  models: ['User'],

  views: [
    'user.List',
    'user.Form',
    'user.View'
  ],

  refs : [ {
		ref : 'list',
		selector : 'userlist'
	}, {
		ref : 'view',
		selector : 'userview'
	  }],

  init: function() {
    this.control({
      'userlist': {
        itemdblclick: this.editUser,
        selectionchange: this.selectionChange
      },
      'userform button[action=save]': {
        click: this.createOrUpdateUser
      },
      'userform button[action=saveSync]': {
          click: this.syncUser
        },
      'button[action=addUser]': {
        click: this.addUser
      },
      'button[action=editUser]': {
        click: this.editUser
      },
      'button[action=deleteUser]': {
        click: this.deleteUser
      },
      'button[action=searchUser]': {
          click: this.searchUser
        },
      'button[action=resetSearch]': {
         click: this.resetSearch
       },
      'button[action=viewUser]': {
          click: this.viewUser
        },
       'actioncolumn#actionView':{
    	   actionViewUser:this.actionViewUser
       }
    });
  },

  addUser: function() {
    var view = Ext.widget('userform');
    view.show();
  },
  actionViewUser:function(obj){
	  var view = Ext.widget('userview');
	  var form = view.down('form');
	  form.loadRecord(obj.record); 
  },  
  viewUser:function(){
	  	var record = this.getList().getSelectedUser();
	    if(record.length>1){
	    	Ext.MessageBox.alert('提示', '只能查看一条记录！'); 
	    	return;
	    }
	    var view = Ext.widget('userview');
	    var form = view.down('form');
	    form.loadRecord(record[0]);
  },
  //search with condition name
  searchUser:function(){
	  var store = this.getUsersStore();
	  var params = store.getProxy().extraParams;
	  var name = this.getList().getSearchText();
		params.name = encodeURIComponent(name);
		store.loadPage(1);
  },
  //clear search condition
  resetSearch:function(){
	  this.getList().resetSearchText();
	  this.searchUser();
  },  
  editUser: function() {
    var record = this.getList().getSelectedUser();
    if(record.length>1){
    	Ext.MessageBox.alert('提示', '只能修改一条记录！'); 
    	return;
    }
    var view = Ext.widget('userform');
    var form = view.down('form');
    Ext.Ajax.request({ 
		url: 'user/retrieve.nt', 
		params: {id:record[0].getId()},
		method: 'post', 
		async :  false,
		success: function(result, request) { 
			if(result.status ===200){
				 var rc = Ext.decode(result.responseText);
				 var dd = Ext.create('HS.model.User',rc);
				 form.loadRecord(dd);
			}
		}, 
		failure: function(result, request) { 
			Ext.MessageBox.alert('系统异常', '请求数据失败！'); 
		} 
	});
  },
  syncUser:function(button){
	  var win = button.up('window');
	    var form = win.down('form');
	    var store = this.getUsersStore();
	    var values = form.getValues();
	    var user = Ext.create('HS.model.User', values);
	    var errors = user.validate();
	    if (errors.isValid()) {
	      var formRecord = form.getRecord();
	      if (formRecord) {
	    	  store.remove(formRecord);
	    	  store.add(user);
	    	  store.sync({
  				success:function(r,op){
  					debugger;
  					var o=Ext.decode(op.response.responseText);
  				},
  				failure: function(r,op) {
  					store.rejectChanges();
  				}
  			});
	      }
	    }
  },
  createOrUpdateUser: function(button) {
    var win = button.up('window');
    var form = win.down('form');
    var store = this.getUsersStore();
    var values = form.getValues();
    var user = Ext.create('HS.model.User', values);
    var errors = user.validate();
    if (errors.isValid()) {
      var formRecord = form.getRecord();
      if (formRecord) {
        Ext.Ajax.request({ 
			url: 'user/update.nt', 
			params: values,
			method: 'post', 
			async :  false,
			success: function(result, request) { 
				if(result.status ===200){
					win.close();
					Ext.MessageBox.alert('提示', '保存成功'); 
					store.load();
				}
			}, 
			failure: function(result, request) { 
				Ext.MessageBox.alert('系统异常', '请求数据失败！'); 
			} 
		});
      } else {
        Ext.Ajax.request({ 
			url: 'user/add.nt', 
			params: values,
			method: 'post', 
			async :  false,
			success: function(result, request) { 
				if(result.status ===200){
					win.close();
					Ext.MessageBox.alert('提示', '保存成功'); 
					store.load();
				}
			}, 
			failure: function(result, request) { 
				Ext.MessageBox.alert('系统异常', '请求数据失败！'); 
			} 
		});
        
      }

    } else {
      form.getForm().markInvalid(errors);
    }
  },

  deleteUser: function() {
//    var grid = o.ownerCt.ownerCt;
//    var record = grid.getSelectionModel().getSelection();
	  var store = this.getUsersStore();
	  var record = this.getList().getSelectedUser();
	  if (record) {
    	Ext.Msg.confirm('提示','确定要删除这条记录？',function(v){
    		if(v == 'yes'){
    			var ids = new Array();
    			for(var i=0;i<record.length;i++){
					ids.push(record[i].getId());
				}
    			Ext.Ajax.request({ 
        			url: 'user/deleteUsers.nt', 
        			params: {ids:ids},
        			method: 'post', 
        			async :  false,
        			success: function(result, request) { 
        				if(result.status ===200){
        					Ext.MessageBox.alert('提示', '删除成功！'); 
        					store.load();
        				}
        			}, 
        			failure: function(result, request) { 
        				Ext.MessageBox.alert('系统异常', '请求数据失败！'); 
        			} 
        		});
    		}
    	});
    }
  },

  selectionChange: function(selectionModel, selections) {
    var grid = this.getList();

    if (selections.length > 0) {
      grid.enableRecordButtons();
    } else {
      grid.disableRecordButtons();
    }
  }

});
