package com.tcc.backend.web.auth;

import com.tcc.backend.web.usuario.UsuarioResponse;

public record AuthResponse(
        String token,
        String email,
        String nome
) {
    public static AuthResponse of(String token, UsuarioResponse usuario) {
        return new AuthResponse(
                token,
                usuario.email(),
                usuario.nome()
        );
    }
}
