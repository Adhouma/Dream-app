package com.dreamapp.JavaSpringBackend;

import java.util.Optional;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.dreamapp.JavaSpringBackend.model.Dream;
import com.dreamapp.JavaSpringBackend.repositories.DreamRepository;

@SpringBootApplication
public class JavaSpringBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaSpringBackendApplication.class, args);
	}
	
	@Bean
	ApplicationRunner init(DreamRepository dreamRepository) {
		return args -> {
			// Dreams
			Dream dream1 = new Dream("Be an expert Full Stack Java EE / Angular");
			Dream dream2 = new Dream("Read a book each month");
			Dream dream3 = new Dream("Get a black belt on Ju-jitsu");
			Dream dream4 = new Dream("Travel around the World");
			Dream dream5 = new Dream("Get a really super Car");
			
			// Save dreams
			dreamRepository.save(dream1);
			dreamRepository.save(dream2);
			dreamRepository.save(dream3);
			dreamRepository.save(dream4);
			dreamRepository.save(dream5);
			
			// Output dreams
			System.out.println("/*--- list of my Dreams ---*/");
			for(Dream dream : dreamRepository.findAll()) {
				System.out.println(dream.getId() + "- " + dream.getName());
			}
			
			
		};
	}

}
