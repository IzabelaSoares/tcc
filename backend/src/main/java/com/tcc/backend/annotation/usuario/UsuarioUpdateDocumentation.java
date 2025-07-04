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
@Operation(summary = "Atualizar usuário existente",
        description = "Endpoint para atualização dos dados do usuário no sistema")
@ApiResponses({
        @ApiResponse(
                responseCode = "200",
                description = "Usuário atualizado com sucesso",
                content = @Content(
                        mediaType = "application/json",
                        schema = @Schema(implementation = UsuarioResponse.class),
                        examples = @ExampleObject(value = """
                                {
                                    "nome": "Izabela Soares",
                                    "titulo": "Exploradora"
                                    "sobre": "Apaixonada por histórias e café Sempre achei que bons livros foram feitos pra rodar o mundo, não pra juntar poeira na estante. Vamos espalhar páginas e gentileza por aí?",
                                }""")
                )
        )
})
public @interface UsuarioUpdateDocumentation {
}
