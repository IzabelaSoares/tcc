package com.tcc.backend.web.usuario;

import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.validation.age.AgeValidation;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record UsuarioUpdateRequest(

        @Schema(example = "Izabela Soares", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Nome é obrigatório")
        @Size(min = 3, max = 100, message = "Nome deve ter entre 3 e 100 caracteres")
        String nome,

        @Schema(example = "Senha@123", minLength = 8, requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Senha é obrigatória")
        @Size(min = 8, message = "Senha deve ter no mínimo 8 caracteres")
        @Pattern(
                regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
                message = "Senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
        )
        String senha,

        @Schema(example = "1990-01-01", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull(message = "Data de nascimento é obrigatória")
        @Past(message = "Data de nascimento deve ser no passado")
        @AgeValidation(minAge = 13)
        LocalDate dataNascimento
) {
    public static UsuarioEntity of(UsuarioUpdateRequest request, String senha, UsuarioEntity entity) {
        UsuarioEntity usuario = new UsuarioEntity();
        usuario.setId(entity.getId());
        usuario.setEmail(entity.getEmail());
        usuario.setCpf(entity.getCpf());
        usuario.setSenha(senha);
        usuario.setNome(request.nome());
        usuario.setDataNascimento(request.dataNascimento());
        usuario.setCriadoEm(LocalDateTime.now());
        return usuario;
    }
}
