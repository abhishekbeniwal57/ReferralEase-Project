package com.example.Project1.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;


@Entity
@Table(name="employee")
public class Employee {

	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
	
	@Column(name="user_firstname", length= 255)
	@NotBlank
	@Size(max=255)
	private String firstname;
	
	@Column(name="user_lastname", length= 255)
	@NotBlank
	@Size(max=255)
	private String lastname;
	
	@Column(name="company_name", length= 255)
	@NotBlank
	@Size(max=255)
	private String companyname;
	
	@Column(name="user_email", length= 255)
	@NotBlank
	@Email
	@Size(max=255)
	private String email;
	
	@Column(name="user_password", length= 255)
	@NotBlank
	@Size(max=255)
	private String password;
	
	@Column(name="level")
	private String level;

	public Employee(int userid, String firstname, String lastname, String companyname, String email, String password,String level) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.companyname = companyname;
		this.email = email;
		this.password = password;
		this.level = level;

	}

	public Employee() {
		
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getCompanyname() {
		return companyname;
	}
	
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getLevel() {
		return level;
	}
	
	public void setLevel(String level)
	{	
		this.level = level;
	}

	@Override
	public String toString() {
		return "Employee [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", companyname="
				+ companyname + ", email=" + email + ", password=" + password + ", level=" + level + "]";
	}

	
}
