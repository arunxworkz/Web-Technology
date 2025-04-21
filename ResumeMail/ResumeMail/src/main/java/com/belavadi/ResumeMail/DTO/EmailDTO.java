package com.belavadi.ResumeMail.DTO;

public class EmailDTO {
    String email;
    String phno;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPhno(String phno) {
        this.phno = phno;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getPhno() {
        return phno;
    }
    public String getMessage() {
        return message;
    }
    String message;

    
}