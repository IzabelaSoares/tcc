package com.tcc.backend.web.usuario;

import com.tcc.backend.entity.UsuarioEntity;

public record UsuarioUpdateResponse(

        String titulo,
        String sobre,
        String nome
) {
    public static UsuarioUpdateResponse of(UsuarioEntity usuario) {
        return new UsuarioUpdateResponse(
                usuario.getTitulo(),
                usuario.getSobre(),
                usuario.getNome()
        );
    }

}