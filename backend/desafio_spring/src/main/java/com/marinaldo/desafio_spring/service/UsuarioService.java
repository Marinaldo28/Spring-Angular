package com.marinaldo.desafio_spring.service;

import java.util.List;

import com.marinaldo.desafio_spring.model.Usuario;

public interface UsuarioService {
	
	public List<Usuario> obterTodos();
	
	public Usuario inserirUsuario(Usuario usuario);

}
