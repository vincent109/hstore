package org.joyliu.demo.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

/**
 * <p>功能描述 ：字符编码过滤 </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
public class CharacterEncodingFilter implements Filter{

	@Override
	public void destroy() {
		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain chain) throws IOException, ServletException {
		//Setting the character set for the request
	    request.setCharacterEncoding("UTF-8");

	    // pass the request on
	    chain.doFilter(request, response);

	    //Setting the character set for the response
	    response.setContentType("text/html; charset=UTF-8");
	}

	@Override
	public void init(FilterConfig cfg) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}
