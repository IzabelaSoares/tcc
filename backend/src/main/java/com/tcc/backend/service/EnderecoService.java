package com.tcc.backend.service;

import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.repository.EnderecoRepository;
import com.tcc.backend.web.endereco.EnderecoCreateRequest;
import com.tcc.backend.web.endereco.EnderecoResponse;
import com.tcc.backend.web.endereco.EnderecoUpdateRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EnderecoService {

    private final EnderecoRepository repository;
    private final UsuarioService usuarioService;


    public List<EnderecoResponse> buscar() {
        UUID idUsuarioLogado = usuarioService.buscarIdUsuarioLogado();
        return repository.findByUsuarioId(idUsuarioLogado).stream()
                .map(EnderecoResponse::of)
                .toList();
    }

    public EnderecoResponse cadastrar(EnderecoCreateRequest request) {
        UUID idUsuarioLogado = usuarioService.buscarIdUsuarioLogado();
        EnderecoEntity endereco = repository.save(EnderecoCreateRequest.of(request, idUsuarioLogado));
        return EnderecoResponse.of(endereco);
    }

    public EnderecoResponse atualizar(EnderecoUpdateRequest request) {
        UUID idUsuarioLogado = usuarioService.buscarIdUsuarioLogado();
        EnderecoEntity endereco = repository.save(EnderecoUpdateRequest.of(request, idUsuarioLogado));
        return EnderecoResponse.of(endereco);
    }


}

