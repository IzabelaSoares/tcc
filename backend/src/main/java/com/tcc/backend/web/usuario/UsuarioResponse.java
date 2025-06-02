package com.tcc.backend.web.usuario;

import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.sensitive.MaskSensitiveData;

import java.time.LocalDate;

public record UsuarioResponse(

        @MaskSensitiveData
        String email,

        @MaskSensitiveData
        String cpf,

        String nome,
        LocalDate dataNascimento
) {
    public static UsuarioResponse of(UsuarioEntity usuario) {
        return new UsuarioResponse(
                usuario.getEmail(),
                usuario.getCpf(),
                usuario.getNome(),
                usuario.getDataNascimento()
        );
    }

}