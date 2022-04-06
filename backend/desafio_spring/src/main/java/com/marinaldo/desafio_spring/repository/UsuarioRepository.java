package com.marinaldo.desafio_spring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.marinaldo.desafio_spring.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String>{

}
