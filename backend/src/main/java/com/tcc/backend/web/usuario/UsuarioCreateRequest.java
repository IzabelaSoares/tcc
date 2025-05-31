package com.tcc.backend.web.usuario;

import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.validation.age.AgeValidation;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.br.CPF;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record UsuarioCreateRequest(

        @Schema(example = "João Silva", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Nome é obrigatório")
        @Size(min = 3, max = 100, message = "Nome deve ter entre 3 e 100 caracteres")
        String nome,

        @Schema(example = "joao@example.com", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Email é obrigatório")
        @Email(message = "Email deve ser válido")
        String email,

        @Schema(example = "Senha@123", minLength = 8, requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Senha é obrigatória")
        @Size(min = 8, message = "Senha deve ter no mínimo 8 caracteres")
        @Pattern(
                regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$",
                message = "Senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"
        )
        String senha,

        @Schema(example = "123.456.789-09", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "CPF é obrigatório")
        @CPF(message = "CPF inválido")
        @Pattern(regexp = "^\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}$", message = "Formato inválido")
        String cpf,

        @Schema(example = "1990-01-01", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull(message = "Data de nascimento é obrigatória")
        @Past(message = "Data de nascimento deve ser no passado")
        @AgeValidation(minAge = 13)
        LocalDate dataNascimento,

        @Schema(example = "true", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotNull(message = "Aceite dos termos é obrigatório")
        Boolean aceitouTermo
) {
    public static UsuarioEntity of(UsuarioCreateRequest request, String senha) {
        UsuarioEntity usuario = new UsuarioEntity();
        usuario.setNome(request.nome());
        usuario.setEmail(request.email());
        usuario.setSenha(senha);
        usuario.setCpf(request.cpf());
        usuario.setDataNascimento(request.dataNascimento());
        usuario.setCriadoEm(LocalDateTime.now());
        return usuario;
    }
}
