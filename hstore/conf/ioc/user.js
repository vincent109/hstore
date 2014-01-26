/*
 * 这个配置文件配置了一个服务类 UserService ,用来封装实体的数据库访问。
 * 并且，为UserModule 注入UserService
 */
var ioc = {
	/*
	 * Pet 的服务类
	 */
	users : {
		type : "org.joyliu.demo.service.UserService",
		args : [ {
			refer : "dao"
		} ]
	},
	/*
	 * 组合 UserModule，该模块，需要有属性userService。 UserModule 类上，必须声明注入名
	 * @InjectName("userModule")
	 */
	userModule : {
		type : "org.joyliu.demo.module.UserModule",
		fields : {
			userService : {
				refer : "users"
			}
		}
	}
};