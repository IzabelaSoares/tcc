package com.tcc.backend.annotation.endereco;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(
        name = "EnderecoCreateRequest",
        example = """
        {
            "cep": "01311-000",
            "rua": "Avenida Paulista",
            "numero": "1000",
            "complemento": "Apartamento 101",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
            "usuarioId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
        }""",
        description = "DTO para criação de novo endereço vinculado a um usuário"
)
public @interface EnderecoCreateRequestSchema {}