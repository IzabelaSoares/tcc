package com.tcc.backend.annotation.endereco;

import com.tcc.backend.web.endereco.EnderecoResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.media.*;

import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Operation(summary = "Cadastrar novo endereço",
        description = "Endpoint para criação de novos endereços no sistema")
@ApiResponses({
        @ApiResponse(
                responseCode = "201",
                description = "Endereço criado com sucesso",
                content = @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = EnderecoResponse.class),
                        examples = @ExampleObject(value = """
                {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "cep": "01311-000",
                    "rua": "Avenida Paulista",
                    "numero": "1000",
                    "complemento": "Apartamento 101",
                    "bairro": "Bela Vista",
                    "cidade": "São Paulo",
                    "estado": "SP"
                }""")
                )
        ),
        @ApiResponse(
                responseCode = "400",
                description = "Dados inválidos",
                content = @Content(
                        mediaType = "application/json",
                        examples = @ExampleObject(value = """
                {
                    "code": "ENDERECO_INVALIDO",
                    "message": "CEP inválido ou estado não existe"
                }""")
                )
        ),
        @ApiResponse(
                responseCode = "404",
                description = "Usuário não encontrado",
                content = @Content(
                        mediaType = "application/json",
                        examples = @ExampleObject(value = """
                {
                    "code": "USUARIO_NAO_ENCONTRADO",
                    "message": "Usuário com ID 123 não encontrado"
                }""")
                )
        )
})
public @interface EnderecoCadastroDocumentation {
}