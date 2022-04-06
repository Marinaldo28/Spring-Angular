package com.marinaldo.desafio_spring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Document
@Data
public class Usuario {
	
	@Id
	private String id;
	
	@JsonProperty("name")
	private String nome;
	
	private String email;
	
	@JsonProperty("phone")
	private String telefone;

}
