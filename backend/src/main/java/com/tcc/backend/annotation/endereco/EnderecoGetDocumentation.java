package com.tcc.backend.annotation.endereco;

import com.tcc.backend.web.endereco.EnderecoResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Operation(summary = "Buscar endereço existente",
        description = "Endpoint para buscar endereços do usuário no sistema")
@ApiResponses({
        @ApiResponse(
                responseCode = "200",
                description = "Endereço removido com sucesso",
                content = @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = EnderecoResponse.class),
                        examples = @ExampleObject(
                                value = """
                                        [
                                            {
                                                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                                "cep": "01311-000",
                                                "rua": "Avenida Paulista",
                                                "numero": "1000",
                                                "complemento": "Apartamento 101",
                                                "bairro": "Bela Vista",
                                                "cidade": "São Paulo",
                                                "estado": "SP"
                                            }
                                        ]"""
                        )
                )
        )
})
public @interface EnderecoGetDocumentation {
}