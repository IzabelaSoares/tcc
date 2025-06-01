package com.tcc.backend.annotation.endereco;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

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
        }""",
        description = "DTO para criação de novo endereço vinculado a um usuário"
)
@SecurityRequirement(name = "bearerAuth")
public @interface EnderecoCreateRequestSchema {}