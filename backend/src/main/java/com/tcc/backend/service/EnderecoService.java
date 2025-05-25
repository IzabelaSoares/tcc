package com.tcc.backend.service;

import com.tcc.backend.dto.endereco.EnderecoRequest;
import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.repository.EnderecoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EnderecoService {

    private final EnderecoRepository enderecoRepository;

    public EnderecoEntity cadastrar(EnderecoRequest endereco) {
        EnderecoEntity enderecoEntity = EnderecoRequest.of(endereco);
        return enderecoRepository.save(enderecoEntity);
    }

}

