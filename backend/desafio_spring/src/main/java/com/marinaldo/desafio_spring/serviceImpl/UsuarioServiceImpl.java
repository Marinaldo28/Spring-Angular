package com.marinaldo.desafio_spring.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marinaldo.desafio_spring.model.Usuario;
import com.marinaldo.desafio_spring.repository.UsuarioRepository;
import com.marinaldo.desafio_spring.service.UsuarioService;


@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Override
	public List<Usuario> obterTodos() {
		return this.usuarioRepository.findAll();
	}

	@Override
	public Usuario inserirUsuario(Usuario usuario) {
		return this.usuarioRepository.save(usuario);
	}

}
