package com.dreamapp.JavaSpringBackend.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dreamapp.JavaSpringBackend.model.Dream;
import com.dreamapp.JavaSpringBackend.repositories.DreamRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DreamController {

	// Inject DreamRep
	@Autowired
	private DreamRepository dreamRepository;
	
	// Get all dreams
	@GetMapping("/dreams")
	public List<Dream> getDreams() {
		return (List<Dream>) dreamRepository.findAll();
	}

	// Add Dream
	@PostMapping("/add-dream")
	public void addDream(@RequestBody Dream dream) {
		dreamRepository.save(dream);
	} 
	
	@PutMapping("/update-dream/{id}")
	public ResponseEntity<Dream> updateDream(@PathVariable(value = "id") Long id, 
			@Valid @RequestBody Dream newDream) throws ResourceNotFoundException {
	 Dream oldDream = dreamRepository.findById(id)
			 .orElseThrow(() -> new ResourceNotFoundException("Dream not found for this id :: " + id));

	 oldDream.setName(newDream.getName());
	 final Dream updatedDream = dreamRepository.save(oldDream);
	 
	 return ResponseEntity.ok(updatedDream);
	}
	
	// Delete dream
	@DeleteMapping("/delete-dream/{id}")
	public void deleteDream(@PathVariable(value = "id") Long id) {
		if(dreamRepository.findById(id) != null) {
			dreamRepository.deleteById((long) id);
		}
	}

}
