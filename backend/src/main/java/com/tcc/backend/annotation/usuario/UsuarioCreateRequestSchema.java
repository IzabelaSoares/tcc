package com.tcc.backend.annotation.usuario;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
        name = "UsuarioCreateRequest",
        example = """
    {
        "nome": "João Silva",
        "email": "joao@example.com",
        "senha": "Senha@123",
        "cpf": "123.456.789-00",
        "dataNascimento": "1990-01-01",
        "aceitouTermo": true
    }"""
)
public @interface UsuarioCreateRequestSchema {
}
