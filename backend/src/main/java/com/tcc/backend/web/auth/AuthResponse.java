package com.tcc.backend.web.auth;

public record AuthResponse(
        String token,
        String email,
        String nome
) {
    public static AuthResponse of(String token, String email, String nome) {
        return new AuthResponse(
                token,
                email,
                nome
        );
    }
}
