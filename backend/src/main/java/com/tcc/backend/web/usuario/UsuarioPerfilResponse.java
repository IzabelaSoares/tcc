package com.tcc.backend.web.usuario;

import com.tcc.backend.entity.UsuarioEntity;

public record UsuarioPerfilResponse(
        String nome,
        String sobre,
        String titulo
) {

    public static UsuarioPerfilResponse of(UsuarioEntity usuario) {
        return new UsuarioPerfilResponse(
                usuario.getNome(),
                usuario.getSobre(),
                usuario.getTitulo()
        );
    }
}
