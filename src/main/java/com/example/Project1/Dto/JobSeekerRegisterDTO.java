package com.example.Project1.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class JobSeekerRegisterDTO {
	
//	@JsonIgnore
	private int userid;
	private String firstname;
	private String lastname;
	private String email;
//	@JsonIgnore
	private String password;
	
	public JobSeekerRegisterDTO(int userid, String firstname, String lastname, String email, String password) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}

	public JobSeekerRegisterDTO() {
		
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

	@Override
	public String toString() {
		return "UserDTO [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", password=" + password + "]";
	}
	
}