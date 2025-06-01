package com.tcc.backend.service;

import com.tcc.backend.config.security.SecurityUtils;
import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.repository.EnderecoRepository;
import com.tcc.backend.web.endereco.EnderecoCreateRequest;
import com.tcc.backend.web.endereco.EnderecoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EnderecoService {

    private final EnderecoRepository repository;
    private final UsuarioService usuarioService;
    private final SecurityUtils securityUtils;

    public List<EnderecoResponse> listarEnderecos(UUID usuarioId) {
        return repository.findByUsuarioId(usuarioId).stream()
                .map(EnderecoResponse::of)
                .toList();
    }

    public EnderecoResponse cadastrar(EnderecoCreateRequest request) {
        String userEmail = securityUtils.getCurrentUserEmail();
        UsuarioEntity usuario = usuarioService.buscarUsuario(userEmail);
        EnderecoEntity endereco = repository.save(EnderecoCreateRequest.of(request, usuario.getId()));
        return EnderecoResponse.of(endereco);
    }

}

