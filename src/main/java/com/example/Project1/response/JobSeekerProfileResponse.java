package com.example.Project1.response;

public class JobSeekerProfileResponse {
	private int userid;
    private String firstname;
    private String lastname;
    private String email;
    private String resumeLink;
    private String discipline;
    
	public JobSeekerProfileResponse(int userid, String firstname, String lastname, String email,String resumeLink,String discipline) {
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.resumeLink = resumeLink;
		this.discipline = discipline;
	}
	
	public JobSeekerProfileResponse(){
		
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
	
	public String getResumeLink() {
		return resumeLink;
	}

	public void setResumeLink(String resumeLink) {
		this.resumeLink = resumeLink;
	}
	
	public String getDiscipline() {
		return discipline;
	}
	
	public void setDiscipline(String discipline)
	{	
		this.discipline = discipline;
	}

	@Override
	public String toString() {
		return "JobSeekerProfileResponse [userid=" + userid + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", resumeLink=" + resumeLink + ", discipline=" + discipline + "]";
	}
	
	
}
