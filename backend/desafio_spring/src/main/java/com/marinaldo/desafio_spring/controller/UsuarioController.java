package com.marinaldo.desafio_spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marinaldo.desafio_spring.model.Usuario;
import com.marinaldo.desafio_spring.service.UsuarioService;

@RestController
@RequestMapping("api/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public List<Usuario> obterTodos() {
		return this.usuarioService.obterTodos();
	}
	
	@PostMapping
	public Usuario inserirUsuario(@RequestBody Usuario usuario) {
		return this.usuarioService.inserirUsuario(usuario);
	}

}
