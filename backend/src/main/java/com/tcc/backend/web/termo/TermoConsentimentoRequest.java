package com.tcc.backend.web.termo;

import com.tcc.backend.entity.TermoConsentimentoIdentidadeEntity;
import com.tcc.backend.entity.UsuarioEntity;

import java.time.LocalDateTime;

public record TermoConsentimentoRequest(
        boolean aceito
) {
    public static TermoConsentimentoIdentidadeEntity of(
            UsuarioEntity usuario,
            String ipUsuario
    ) {
        TermoConsentimentoIdentidadeEntity termo = new TermoConsentimentoIdentidadeEntity();
        termo.setUsuario(usuario);
        termo.setAceitoEm(LocalDateTime.now());
        termo.setIpUsuario(ipUsuario);
        return termo;
    }
}