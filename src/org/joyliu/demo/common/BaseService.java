package org.joyliu.demo.common;

import org.nutz.dao.pager.Pager;
import org.nutz.ioc.loader.annotation.Inject;

/**
 * <p>功能描述 ： </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
public class BaseService {
	
	@Inject("baseDao")
	protected BaseDAO dao;
	/**
	 * <p>功能描述 ：创建Page </p>
	 *
	 * @author:Vincent(vincentwong@joyliu.org)
	 *
	 * @param start
	 * @param page_count
	 * @return
	 */
	public Pager qryPager(int start,int page_count){
		return dao.qryPager(start, page_count);
	}
}
