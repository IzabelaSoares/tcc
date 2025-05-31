package com.tcc.backend.service;

import com.tcc.backend.exception.EnderecoInvalidoException;
import com.tcc.backend.web.endereco.EnderecoCreateRequest;
import com.tcc.backend.web.endereco.EnderecoResponse;
import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.repository.EnderecoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EnderecoService {

    private final EnderecoRepository repository;
    private final UsuarioService usuarioService;

    public List<EnderecoResponse> listarEnderecos(UUID usuarioId) {
        return repository.findByUsuarioId(usuarioId).stream()
                .map(EnderecoResponse::of)
                .toList();
    }

    public EnderecoResponse cadastrar(EnderecoCreateRequest request) {
        boolean validarExistenciaUsuario = usuarioService.validarUsuarioExiste(request.usuarioId());
        if(validarExistenciaUsuario){
            EnderecoEntity endereco = repository.save(EnderecoCreateRequest.of(request));
            return EnderecoResponse.of(endereco);
        }
              throw new EnderecoInvalidoException("Usuário não encontrado para vinculo de endereço");
    }

}

