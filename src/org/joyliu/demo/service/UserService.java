package org.joyliu.demo.service;

import java.util.List;

import org.joyliu.demo.model.User;
import org.nutz.dao.Condition;
import org.nutz.dao.Dao;
import org.nutz.dao.pager.Pager;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.service.IdNameEntityService;

/**
 * <p>功能描述 ： </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
@IocBean(fields={"dao"})
public class UserService extends IdNameEntityService<User>{

	public UserService(){
		super();
	}
	
	public UserService(Dao dao){
		super(dao);
	}
	
	public Pager qryPager(int pageNum, int pageCount){
		return new Pager().setPageNumber(pageNum).setPageSize(pageCount);
	}
	
	public void saveUser(User obj) {
		this.dao().insert(obj);
	}

	public int updateUser(User obj) {
		return this.dao().update(obj);
	}

	public int queryCount(Condition condition) {
		List<User> users = this.dao().query(User.class, condition);
		return users.size();
	}
	
	public List<User> query(Condition condition,Pager page) {
		List<User> users = this.dao().query(User.class, condition, page);
		return users;
	}

	public int delUser(int id) {
		return this.dao().delete(User.class, id);
	}

	public int delUsers(int[] ids) {
		int id =0;
		int flag = 0;
		for (Object obj : ids) {
			id = (Integer) obj;
			flag = this.delUser(id);
		}
		return flag;
	}

	public User qryUser(int id) {
		return this.dao().fetch(User.class, id);
	}
}
