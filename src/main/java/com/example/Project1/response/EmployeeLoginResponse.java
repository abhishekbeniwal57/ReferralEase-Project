package com.example.Project1.response;

public class EmployeeLoginResponse {
	String message;
	Boolean status;
	
	public EmployeeLoginResponse(String message, Boolean status) {
		this.message = message;
		this.status = status;
	}
	
	public EmployeeLoginResponse(){
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "LoginResponse [message=" + message + ", status=" + status + "]";
	}
	
}
