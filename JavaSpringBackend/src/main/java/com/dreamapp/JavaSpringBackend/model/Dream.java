package com.dreamapp.JavaSpringBackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dream {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	
	// Constructors
	public Dream() { }

	public Dream(String name) {
		super();
		this.name = name;
	}

	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	// toString method
	@Override
	public String toString() {
		return "Dream [id=" + id + ", name=" + name + "]";
	}
	
}

