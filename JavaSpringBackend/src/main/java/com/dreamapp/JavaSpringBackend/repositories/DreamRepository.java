package com.dreamapp.JavaSpringBackend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.dreamapp.JavaSpringBackend.model.Dream;

@Repository
public interface DreamRepository extends CrudRepository<Dream, Long>{

}
