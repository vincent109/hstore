package org.joyliu.demo.setup;

import java.util.Date;

import org.joyliu.demo.model.User;
import org.nutz.dao.Dao;
import org.nutz.ioc.Ioc;
import org.nutz.mvc.NutConfig;
import org.nutz.mvc.Setup;

/**
 * <p>功能描述 ： </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
public class AppSetup implements Setup{

	@Override
	public void destroy(NutConfig cfg) {
		System.out.println("正在销毁……");
	}

	/**
	 * 当服务启动的时候，自动检查数据库，如果必要的数据表不存在，创建它们 .
	 */
	@Override
	public void init(NutConfig cfg) {
		Ioc ioc = cfg.getIoc();
		Dao dao = ioc.get(Dao.class, "dao");
		if(!dao.exists("hs_user")){//判断HS_USER是否存在
			dao.create(User.class, false);//创建HS_USER
			User user = new User();
			user.setJoinTime(new Date());
			user.setBirthday(new Date());
			user.setMajor("计算机科学与技术");
			user.setName("WebMaster");
			user.setPosition("PE");
			user.setSex(1);
			dao.insert(user);
		}
	}

}
