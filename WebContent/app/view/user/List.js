Ext.define('HS.view.user.List' ,{
  extend: 'Ext.grid.Panel',
  alias : 'widget.userlist',
  multiSelect:true,
  title : '用户列表',
  initComponent: function() {
	this.store = 'Users';
	this.selModel = Ext.create('Ext.selection.CheckboxModel');
    this.columns = [{
        xtype: 'rownumberer',
        sortable: false
    },
      { header: '姓名',  dataIndex: 'name',  flex: 1 },
      {
          xtype:'actioncolumn',
          width:50,
          text:'性别',
          id:'actionView',
          align:'center',
          items: [{
              getClass: function(v, metaData, record) {          // Or return a class from a function
                  if (record.get('sex')===1) {
                	  metaData.tdAttr = 'data-qtip="男"';
                      return 'male';
                  } else {
                	  metaData.tdAttr = 'data-qtip="女"';
                      return 'female';
                  }
              },
              handler: function(grid, rowIndex, colIndex) {//add on 2014-1-23
            	  var rec = grid.getStore().getAt(rowIndex);  
                  this.fireEvent('actionViewUser', {  
                      record: rec  
                  });  
              }
          }]
      },
      { header: '专业',  dataIndex: 'major',  flex: 1 },
      { header: '岗位',  dataIndex: 'position',  flex: 1 },
      { header: '出生日期', dataIndex: 'birthday',menuDisabled: true,  flex: 1,format:'Y-m-d'},
      { header: '入司时间', dataIndex: 'joinTime',menuDisabled: true, flex: 1,format:'Y-m-d'},
      { header: '状态', dataIndex: 'status', flex: 1,renderer:function(v){
    	  if(v===1){
    		  return "有效";
    	  }else{
    		  return "<font color=red>失效</font>";
    	  }
      }}
    ];

    this.addUserButton = new Ext.Button({
      text: '新增',
      iconCls:'add',
      action: 'addUser'
    });

    this.editUserButton = new Ext.Button({
      text: '编辑',
      iconCls:'edit',
      action: 'editUser',
      disabled: true
    });

    this.deleteUserButton = new Ext.Button({
      text: '删除',
      iconCls:'delete',
      action: 'deleteUser',
      disabled: true
    });
    this.viewUserButton = new Ext.Button({
        text: '查看',
        iconCls:'view',
        action: 'viewUser',
        disabled: true
      });
    this.helpButton = new Ext.Button({
    	text: '帮助',
        iconCls:'help',
        handler: function() {
            Ext.MessageBox.alert('帮助<<font color=red>纳尼，你确信米有点错？？</font>>', '<li>*一个人，一本书，一杯茶，一帘梦。</li>'
            						+ '<li>*过去的倔强与轻狂，原来如此荒诞不羁。</li>'                
            						+ '<li>*俗世喧嚣，总会想在空灵停滞的时空内，独倚幽窗，</li>'
                                    + '<li>*品一壶清茶，细细体味光阴如梭，年华老去。</li>'
                            );
        }
      });
    this.pageUtil = Ext.create('Ext.PagingToolbar', {
        store: 'Users',
        displayInfo: true,
        pageSize: 15,
        //displayMsg: '当前显示 {0} - {1} / {2}',
        emptyMsg: "当前没有用户",
        plugins: Ext.create('Ext.ux.ProgressBarPager', {
        	defaultText:'正在加载……',
        	width:360
        })
    });
    this.s_name = Ext.create('Ext.form.field.Text',{
            name: 'name',
            labelWidth:50,
            labelAlign:'right',
            fieldLabel: '姓&nbsp;&nbsp;名'
        });
    this.searchBtn = new Ext.Button({
        text: '查询',
        iconCls:'search',
        action: 'searchUser'
      });
    this.resetBtn = new Ext.Button({
        text: '重置',
        iconCls:'reset',
        action: 'resetSearch'
      });
    this.tbar = [this.addUserButton, this.editUserButton, this.deleteUserButton,this.viewUserButton,
                 '-',this.s_name,this.searchBtn,this.resetBtn,'->',this.helpButton];

    this.bbar = [this.pageUtil];
    this.callParent(arguments);
  },

  getSelectedUser: function() {
    return this.getSelectionModel().getSelection();
  },
  //get search text
  getSearchText:function(){
	  return this.s_name.getValue();
  },
  //clear search text
  resetSearchText:function(){
	  this.s_name.reset();
  },
  
  enableRecordButtons: function() {
    this.editUserButton.enable();
    this.deleteUserButton.enable();
    this.viewUserButton.enable();
  },

  disableRecordButtons: function() {
    this.editUserButton.disable();
    this.deleteUserButton.disable();
    this.viewUserButton.disable();
  }
});
