package com.tcc.backend.annotation.autenticacao;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@Schema(
        name = "AuthRequest",
        example = """
    {
        "email": "izabela_soares@example.com",
        "senha": "Senha@123"
    }"""
)
@SecurityRequirement(name = "bearerAuth")
public @interface AutenticacaoRequestSchema {}