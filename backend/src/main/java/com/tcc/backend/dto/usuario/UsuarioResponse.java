package com.tcc.backend.dto.usuario;

import com.tcc.backend.dto.endereco.EnderecoResponse;
import com.tcc.backend.entity.UsuarioEntity;

import java.time.LocalDate;
import java.util.UUID;

public record UsuarioResponse(
        UUID id,
        String nome,
        String email,
        String cpf,
        LocalDate dataNascimento,
        EnderecoResponse endereco,
        boolean aceitouTermo
) {
    public static UsuarioResponse of(UsuarioEntity usuario) {
        return new UsuarioResponse(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getDataNascimento(),
                EnderecoResponse.of(usuario.getEndereco()),
                verificaSeAceitouTermo(usuario)
        );
    }

    private static boolean verificaSeAceitouTermo(UsuarioEntity usuario) {
        return usuario.getTermoConsentimentoIdentidade() != null;
    }
}