package com.tcc.backend.annotation.endereco;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Operation(summary = "Remover endereço existente",
        description = "Endpoint para remover endereços do usuário no sistema")
@ApiResponses({
        @ApiResponse(
                responseCode = "204",
                description = "Endereço removido com sucesso"
        ),
        @ApiResponse(
                responseCode = "400",
                description = "Dados inválidos",
                content = @Content(
                        mediaType = "application/json",
                        examples = @ExampleObject(value = """
                {
                    "code": "ENDERECO_INVALIDO",
                    "message": "Endereço não encontrado"
                }""")
                )
        )
})
public @interface EnderecoDeleteDocumentation {
}