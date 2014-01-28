package org.joyliu.demo.model;

import java.io.Serializable;
import java.util.Date;

import org.nutz.dao.entity.annotation.Column;
import org.nutz.dao.entity.annotation.Id;
import org.nutz.dao.entity.annotation.Table;

/**
 * <p>功能描述 ： </p>
 * 
 * @author:Vincent(vincentwong@joyliu.org)
 */
@Table("HS_USER")
public class User implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column("ID")
	private int id;//ID
	
	@Column("NAME")
	private String name;//姓名
	
	@Column("SEX")
	private Integer sex = 1;//性别  1-男  2-女 0-未知
	
	@Column("MAJOR")
	private String major;//专业
	
	@Column("POSITION")
	private String position;//岗位
	
	@Column("BIRTHDAY")
	private Date birthday;//出生日期
	
	@Column("JOIN_TIME")
	private Date joinTime;//入司时间
	
	@Column("STATUS")
	private int status= 1;//状态

	/**
	 * 功能描述：构造方法
	 */
	public User() {
		super();
	}


	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}


	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}


	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the sex
	 */
	public Integer getSex() {
		return sex;
	}

	/**
	 * @param sex the sex to set
	 */
	public void setSex(Integer sex) {
		this.sex = sex;
	}

	/**
	 * @return the major
	 */
	public String getMajor() {
		return major;
	}

	/**
	 * @param major the major to set
	 */
	public void setMajor(String major) {
		this.major = major;
	}

	/**
	 * @return the position
	 */
	public String getPosition() {
		return position;
	}

	/**
	 * @param position the position to set
	 */
	public void setPosition(String position) {
		this.position = position;
	}

	/**
	 * @return the birthday
	 */
	public Date getBirthday() {
		return birthday;
	}

	/**
	 * @param birthday the birthday to set
	 */
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	/**
	 * @return the joinTime
	 */
	public Date getJoinTime() {
		return joinTime;
	}

	/**
	 * @param joinTime the joinTime to set
	 */
	public void setJoinTime(Date joinTime) {
		this.joinTime = joinTime;
	}


	/**
	 * @return the status
	 */
	public int getStatus() {
		return status;
	}


	/**
	 * @param status the status to set
	 */
	public void setStatus(int status) {
		this.status = status;
	}
}
