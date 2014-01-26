Ext.define('HS.view.user.Form', {
  extend: 'Ext.window.Window',
  alias : 'widget.userform',
  title : '用户信息',
  width:300,
  style:'opacity: 0.8;filter: alpha(opacity=80);',
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
	              	  xtype:'textfield',
	                  fieldLabel: '姓名<font color=red>*</font>',
	                  name: 'name',
	                  maxLength:32,
	                  emptyText:'请输入姓名',
	                  allowBlank : false,
	                  anchor:'95%'
	              },{
	    				xtype : 'radiogroup',
	    				fieldLabel : '性别<font color=red>*</font>',
	    				name : 'gender',
	    				allowBlank : false,
	    				msgTarget:'qtip',
	    				anchor : '95%',
	    				items : [{
	    							boxLabel : '男',
	    							name : 'sex',
	    							inputValue : '1',
	    							checked : true
	    						},{
	    							boxLabel : '女',
	    							name : 'sex',
	    							inputValue : '2'
	    						}]
	    			},{
	                	xtype:'datefield',
	                    fieldLabel: '出生年月',
	                    name: 'birthday',
	                    format:'Y-m-d',
	                    maxValue: new Date(),
	                    anchor:'95%'
	              },{
	                	xtype:'datefield',
	                    fieldLabel: '入司时间',
	                    format:'Y-m-d',
	                    name: 'joinTime',
	                    anchor:'95%'
	              },{
	              	  xtype:'textfield',
	                  fieldLabel: '专业',
	                  name: 'major',
	                  maxLength:32,
	                  anchor:'95%'
	              },{
	              	  xtype:'textfield',
	                  fieldLabel: '岗位',
	                  name: 'position',
	                  maxLength:32,
	                  anchor:'95%'
	              }]
          }]
      }]
    }];

    this.buttons = [{
      text: '保存',
      iconCls:'submit',
      action: 'save'
    }, {
      text: '取消',
      scope: this,
      iconCls:'cancel',
      handler: this.close
    }];

    this.callParent(arguments);
  }
});

