Ext.define('HS.view.user.View', {
	 extend: 'Ext.window.Window',
	  alias : 'widget.userview',
	  title : '用户明细->maybe XTemplate is the better choice.',
	  width:340,
	  //style:'opacity: 0.8;filter: alpha(opacity=80);',
	  height:320,
	  buttonAlign:'center',
	  layout: 'fit',
	  autoShow: true,

	  initComponent: function() {
	    this.items = [{
	      xtype: 'form',
	      bodyStyle:'padding:5px 5px 0px',
	      autoScroll: true,
	      frame:true,
	      border:false, 
	      fieldDefaults: {
	          labelAlign: 'right',
	          style:'margin-top:8px;',
	          labelWidth: 80,
	          msgTarget: 'side'
	      },
	      items: [{
	          xtype: 'container',
	          anchor: '100%',
	          border: false,
	          layout:'column',
	          items:[{
	          	xtype:'hidden',
	            name: 'id'
	          },{
	              xtype: 'container',
	              columnWidth:1,
	              layout: 'anchor',
		          items: [{
		              	  xtype:'displayfield',
		                  fieldLabel: '姓名',
		                  name: 'name',
		                  maxLength:32,
		                  anchor:'95%'
		              },{
		    				xtype : 'radiogroup',
		    				fieldLabel : '性别<font color=red>*</font>',
		    				name : 'gender',
		    				msgTarget:'qtip',
		    				anchor : '95%',
		    				items : [{
		    							boxLabel : '男',
		    							name : 'sex',
		    		    				readOnly:true,
		    							inputValue : '1'
		    							},{
		    							boxLabel : '女',
		    							name : 'sex',
		    		    				readOnly:true,
		    							inputValue : '2'
		    						}]
		    			},{
		                	xtype:'datefield',
		                    fieldLabel: '出生年月',
		                    name: 'birthday',
		                    format:'Y-m-d',
		                    readOnly:true,
		                    anchor:'95%'
		              },{
		                	xtype:'datefield',
		                    fieldLabel: '入司时间',
		                    format:'Y-m-d',
		                    readOnly:true,
		                    name: 'joinTime',
		                    anchor:'95%'
		              },{
		              	  xtype:'displayfield',
		                  fieldLabel: '专业',
		                  name: 'major',
		                  maxLength:32,
		                  anchor:'95%'
		              },{
		              	  xtype:'displayfield',
		                  fieldLabel: '岗位',
		                  name: 'position',
		                  maxLength:32,
		                  anchor:'95%'
		              }]
	          }]
	      }]
	    }];

	    this.buttons = [ {
	      text: '关闭',
	      scope: this,
	      iconCls:'cancel',
	      handler: this.close
	    }];

	    this.callParent(arguments);
	  }
});
