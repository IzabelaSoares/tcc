package com.tcc.backend.annotation.usuario;

import com.tcc.backend.web.usuario.UsuarioResponse;
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
@Operation(summary = "Cadastrar novo usuário",
        description = "Endpoint para criação de novos usuários no sistema")
@ApiResponses({
        @ApiResponse(
                responseCode = "201",
                description = "Usuário atualizado com sucesso",
                content = @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = UsuarioResponse.class),
                        examples = @ExampleObject(value = """
                                {
                                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                                    "nome": "Izabela Soares",
                                    "email": "izabela_soares@example.com",
                                    "cpf": "123.456.789-00",
                                    "dataNascimento": "1990-01-01",
                                }""")
                )
        ),
        @ApiResponse(
                responseCode = "409",
                description = "E-mail já cadastrado",
                content = @Content(
                        mediaType = "application/json",
                        examples = @ExampleObject(value = """
                                {
                                    "code": "EMAIL_JA_CADASTRADO",
                                    "message": "O e-mail 'izabela_soares@example.com' já está cadastrado"
                                }""")
                )
        )
})
public @interface UsuarioUpdateDocumentation {
}
