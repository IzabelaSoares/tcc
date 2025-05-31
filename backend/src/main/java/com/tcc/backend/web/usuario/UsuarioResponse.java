package com.tcc.backend.web.usuario;

import com.tcc.backend.entity.UsuarioEntity;

import java.time.LocalDate;
import java.util.UUID;

public record UsuarioResponse(
        UUID id,
        String nome,
        String email,
        String cpf,
        LocalDate dataNascimento
) {
    public static UsuarioResponse of(UsuarioEntity usuario) {
        return new UsuarioResponse(
                usuario.getId(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getDataNascimento()
        );
    }

}