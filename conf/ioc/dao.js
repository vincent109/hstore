var ioc = {
	    // Dao
		dao : {
                type : "org.nutz.dao.impl.NutDao",
                args : [{refer:"dataSource"}]
        },
        // 数据源
        dataSource : {
                type : "com.alibaba.druid.pool.DruidDataSource",
                events : {
                	depose : "close"
                },
                fields : {
                		driverClassName : {java : '$conf.get("db_driver")'},
                        url : {java : '$conf.get("db_url")'},
                        username : {java : '$conf.get("db_user")'},
                        password : {java : '$conf.get("db_passwd")'},
                        initialSize     : 10,
            			maxActive       : 100,
            			minIdle         : 10,
            			maxIdle         : 20,
            			defaultAutoCommit: false
                }
        }
};