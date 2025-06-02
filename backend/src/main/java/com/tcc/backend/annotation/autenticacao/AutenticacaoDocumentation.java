package com.tcc.backend.annotation.autenticacao;

import com.tcc.backend.web.auth.AuthResponse;
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
@Operation(summary = "Login de usuário", description = "Retorna um token JWT válido")
@ApiResponses({
        @ApiResponse(responseCode = "200", description = "Login bem-sucedido",
                content = @Content(
                        mediaType = "application/json",
                        schema = @Schema(
                                implementation = AuthResponse.class
                        )
                )
        ),
        @ApiResponse(
                responseCode = "401",
                description = "Usuário ou senha inválido",
                content = @Content(
                        mediaType = "application/json",
                        examples = @ExampleObject(value = """
                                {
                                    "code": "CREDENCIAIS_INVALIDAS",
                                    "message": "Usuario não autorizado para estas credenciais"
                                }"""
                        )
                )
        )
})
public @interface AutenticacaoDocumentation {
}