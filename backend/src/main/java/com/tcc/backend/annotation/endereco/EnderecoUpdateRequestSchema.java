package com.tcc.backend.annotation.endereco;

import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@Schema(
        name = "EnderecoUpdateRequest",
        example = """
        {
            "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "cep": "01311-000",
            "rua": "Avenida Paulista",
            "numero": "1000",
            "complemento": "Apartamento 101",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
        }""",
        description = "DTO para atualização de endereço existente vinculado a um usuário"
)
@SecurityRequirement(name = "bearerAuth")
public @interface EnderecoUpdateRequestSchema {}