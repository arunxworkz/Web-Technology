package com.belavadi.ResumeMail.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.belavadi.ResumeMail.DTO.EmailDTO;
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class}) // to tell the spring that not to consider the database connection
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class EmailRestController {
   
    @Autowired
    private JavaMailSender javaMailSender; // this is from the javaMailSender Dependency

    @PostMapping("/contact")
    public ResponseEntity<String> handelContact(@RequestBody EmailDTO dto){
        try{
            SimpleMailMessage message = new SimpleMailMessage();

            message.setTo("arunbelavadi30@gmail.com");
            message.setText(
                "Email: "+ dto.getEmail() + "\n"+
                " Phone: "+ dto.getPhno() + "\n"+
                " Message: "+dto.getMessage()+"\n"
            );
            javaMailSender.send(message);
            return ResponseEntity.ok("Email sent successfully");
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send");
        }
    }

}