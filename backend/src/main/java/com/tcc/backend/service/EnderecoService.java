package com.tcc.backend.service;

import com.tcc.backend.dto.endereco.EnderecoCreateRequest;
import com.tcc.backend.dto.endereco.EnderecoResponse;
import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.repository.EnderecoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EnderecoService {

    private final EnderecoRepository enderecoRepository;

    public List<EnderecoResponse> listarEnderecos(UUID usuarioId) {
        return enderecoRepository.findByUsuarioId(usuarioId).stream()
                .map(EnderecoResponse::of)
                .toList();
    }

    public EnderecoResponse cadastrar(EnderecoCreateRequest request) {
        EnderecoEntity endereco = enderecoRepository.save(EnderecoCreateRequest.of(request));
        return EnderecoResponse.of(endereco);
    }

}

