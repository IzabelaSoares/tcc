package com.tcc.backend.web.auth;

import com.tcc.backend.web.usuario.UsuarioResponse;

import java.util.UUID;

public record AuthResponse(
        String token,
        UUID userId,
        String email,
        String nome
) {
    public static AuthResponse of(String token, UsuarioResponse usuario) {
        return new AuthResponse(
                token,
                usuario.id(),
                usuario.email(),
                usuario.nome()
        );
    }
}
