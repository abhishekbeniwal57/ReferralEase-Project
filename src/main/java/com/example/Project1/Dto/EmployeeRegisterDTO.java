package com.example.Project1.Dto;

public class EmployeeRegisterDTO {

	private int userid;
	private String firstname;
	private String lastname;
	private String companyname;
	private String email;
	private String password;
	
	public EmployeeRegisterDTO(int userid, String firstname, String lastname, String companyname, String email, String password) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.companyname = companyname;
		this.email = email;
		this.password = password;
	}

	public EmployeeRegisterDTO() {
		
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

	@Override
	public String toString() {
		return "Register_EmployeeDTO [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", companyname=" + companyname + ", email=" + email + ", password=" + password + "]";
	}

	
	
}
