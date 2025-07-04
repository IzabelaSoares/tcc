package com.tcc.backend.web.usuario;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record UsuarioUpdatePasswordRequest(

        @Schema(example = "Senha@123", minLength = 8, requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Senha é obrigatória")
        @Size(min = 8, message = "Senha deve ter no mínimo 8 caracteres")
        @Pattern(
                regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
                message = "Senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
        )
        String senha
) {

}
