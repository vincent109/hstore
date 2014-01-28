package org.joyliu.demo.module;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.joyliu.demo.model.User;
import org.joyliu.demo.service.UserService;
import org.nutz.dao.Cnd;
import org.nutz.dao.Condition;
import org.nutz.dao.pager.Pager;
import org.nutz.ioc.annotation.InjectName;
import org.nutz.ioc.loader.annotation.Inject;
import org.nutz.ioc.loader.annotation.IocBean;
import org.nutz.lang.Strings;
import org.nutz.log.Log;
import org.nutz.log.Logs;
import org.nutz.mvc.annotation.At;
import org.nutz.mvc.annotation.Fail;
import org.nutz.mvc.annotation.Ok;
import org.nutz.mvc.annotation.Param;

/**
 * <p>功能描述 ： </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
@IocBean
@InjectName("userModule")
@At("/user")
@Fail("json")
public class UserModule {
	private static final Log log = Logs.get();
	
	@Inject
	private UserService userService;
	
	@At
	@Ok("json")
    public User retrieve(@Param("id") int id){
    	return this.userService.qryUser(id);
    }
	/**
	 * <p>功能描述 ：新增用户 </p>
	 *
	 * @author:Vincent(vincentwong@joyliu.org)
	 *
	 * @param obj User
	 * @return
	 */
	@At
	public boolean add(@Param("..") User obj){
		try{
			userService.saveUser(obj);
			return true;
		}catch (Throwable e) {
			if (log.isDebugEnabled())
				log.debug("E!!",e);
			return false;
		}
	}
	/**
	 * 
	 * <p>功能描述 ：批量删除用户 </p>
	 *
	 * @author:Vincent(vincentwong@joyliu.org)
	 *
	 * @param ids 用户IDs
	 * @return
	 */
	@At
	public int deleteUsers(@Param("ids") int[] ids){
		System.out.println("====="+ids.length);
		try {
			return userService.delUsers(ids);
		} catch (Exception e) {
			if (log.isDebugEnabled())
				log.debug("E!!",e);
		}
		return 0;
	}
	/**
	 * 
	 * <p>功能描述 ：删除单个用户 </p>
	 *
	 * @author:Vincent(vincentwong@joyliu.org)
	 *
	 * @param id 用户id
	 * @return
	 */
	@At
	public int delete(@Param("id") int id){
		System.out.println("-----------delete item------------id="+id);
		try {
			return userService.delete(id);
		} catch (Exception e) {
			if (log.isDebugEnabled())
				log.debug("E!!",e);
		}
		return 0;
	}
	/**
	 * <p>功能描述 ：修改记录 </p>
	 *
	 * @author:Vincent(vincentwong@joyliu.org)
	 *
	 * @param obj
	 * @return
	 */
	@At
	public boolean update(@Param("..") User obj){
		try{
//			User user = userService.qryUser(obj.getId());
			System.out.println("---------Updating-----------"+obj.getId());
			int vl = userService.updateUser(obj);
			return vl>=1;
		}catch (Throwable e) {
			if (log.isDebugEnabled())
				log.debug("E!!",e);
			return false;
		}
	}
	/**
	 * <p>功能描述 ：分页查询 </p>
	 *
	 * @author:Vincent(vincentwong@joyliu.org)
	 *
	 * @param pageNum
	 * @param numPerPage
	 * @param req
	 * @return
	 * @throws Exception 
	 */
	@At
	@Ok("json")
	public Object query(@Param("page") int pageNum ,@Param("limit") int numPerPage, @Param("..") UserCondition cdn, HttpServletRequest req) throws Exception{
		Pager pager = userService.qryPager(pageNum, numPerPage);
		Condition condition = this.bulidQureyCnd(cdn);
		List<User> list = userService.query(condition, pager);
		Map<String, Object> map = new HashMap<String, Object>();
		if (pager != null) {
			pager.setRecordCount(userService.queryCount(condition));
			map.put("pager", pager);
		}
		map.put("list", list);
		return map;
	}
	
	
	/**
	 * 构建查询条件
	 * @param obj
	 * @return
	 * @throws Exception 
	 */
	private Cnd bulidQureyCnd(UserCondition cdn) throws Exception{
		Cnd cnd=Cnd.where("1", "=", 1);
	        //按名称查询
			String name = cdn.getName();
			if(!Strings.isEmpty(name))
				cnd.and("name", "Like", "%"+URLDecoder.decode(name, "utf-8")+"%");
	      return cnd;
	}

}
