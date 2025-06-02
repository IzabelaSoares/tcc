package com.tcc.backend.annotation.usuario;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
        name = "UsuarioUpdateRequest",
        example = """
    {
        "nome": "Izabela Soares",
        "senha": "Senha@123",
        "dataNascimento": "1990-01-01"
    }"""
)
public @interface UsuarioUpdateRequestSchema {
}
