package com.tcc.backend.service;

import com.tcc.backend.dto.termo.TermoConsentimentoRequest;
import com.tcc.backend.entity.TermoConsentimentoIdentidadeEntity;
import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.repository.TermoConsentimentoIndentidadeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TermoService {

    private final TermoConsentimentoIndentidadeRepository repository;

    public void registrarTermoAssinado(UsuarioEntity usuario, String ipUsuario) {
        TermoConsentimentoIdentidadeEntity termo = TermoConsentimentoRequest.of(usuario, ipUsuario);
        repository.save(termo);
    }
}
