package com.example.SpringAIWithOllama;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class SpringAiWithOllamaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAiWithOllamaApplication.class, args);
	}

}
