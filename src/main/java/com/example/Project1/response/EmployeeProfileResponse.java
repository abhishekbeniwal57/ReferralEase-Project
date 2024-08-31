package com.example.Project1.response;

public class EmployeeProfileResponse {
	private int userid;
    private String firstname;
    private String lastname;
    private String companyname;
    private String email;
    private String level;
    
    public EmployeeProfileResponse(int userid, String firstname, String lastname, String companyname, String email, String level) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.companyname = companyname;
		this.email = email;
		this.level = level;
	}

	public EmployeeProfileResponse() {
    	
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
	
	public String getLevel() {
		return level;
	}
	
	public void setLevel(String level)
	{	
		this.level = level;
	}

	@Override
	public String toString() {
		return "EmployeeProfileResponse [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", companyname=" + companyname + ", email=" + email + ", level=" + level + "]";
	}
	
	
}
