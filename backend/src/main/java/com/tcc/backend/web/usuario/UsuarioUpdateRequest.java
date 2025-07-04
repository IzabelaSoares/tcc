package com.tcc.backend.web.usuario;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UsuarioUpdateRequest(

        @Schema(example = "Izabela Soares", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Nome é obrigatório")
        @Size(min = 3, max = 100, message = "Nome deve ter entre 3 e 100 caracteres")
        String nome,

        @Schema(example = "Exploradora", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        @Size(max = 255, message = "Título deve ter no máximo 255 caracteres")
        String titulo,

        @Schema(example = "Breve descrição sobre o usuário...", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        @Size(max = 500, message = " deve ter no máximo 500 caracteres")
        String sobre
) {

}
