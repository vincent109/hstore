Ext.define('HS.model.User', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'sex', type: 'int' },
    { name: 'major', type: 'String' },
    { name: 'position', type: 'String' },
    { name: 'birthday', type: 'date',dataFormat:'Y-m-d',convert:function(v){
    	if(Ext.isDate(v)){
			 return new Date(v).format("Y-m-d");  
		}else{  
			 return v.substring(0,10);  
		}
    }},
    { name: 'joinTime', type: 'date',dataFormat:'Y-m-d',convert:function(v){
    	if(Ext.isDate(v)){
			 return new Date(v).format("Y-m-d");  
		}else{  
			 return v.substring(0,10);  
		}
   }},
    { name: 'status', type: 'int' }
  ],
  validations: [
    { type: 'presence', field: 'name' },
    { type: 'presence', field: 'major' },
    { type: 'presence', field: 'position' }
  ],

  idProperty: 'id',
  proxy: {
	  type: 'ajax',
      url: 'user/query.nt',
      reader: {
          type: 'json',
          root: 'list',
          totalProperty: 'pager.recordCount'
      },
    writer: {
      getRecordData: function(record) {
        return { user: record.data };
      }
    }
  }
});
