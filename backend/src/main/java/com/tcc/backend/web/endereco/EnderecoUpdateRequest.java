package com.tcc.backend.web.endereco;

import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.validation.uuid.UUIDValidation;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.UUID;

public record EnderecoUpdateRequest(

        @Schema(example = "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                requiredMode = Schema.RequiredMode.REQUIRED,
                description = "ID do endereço no formato UUID")
        @NotBlank(message = "ID do endereço é obrigatório")
        @UUIDValidation(message = "ID do endereço deve ser um UUID válido")
        UUID id,

        @Schema(example = "01311-000", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "CEP é obrigatório")
        @Pattern(regexp = "^\\d{5}-?\\d{3}$", message = "CEP deve estar no formato 12345-678 ou 12345678")
        String cep,

        @Schema(example = "Avenida Paulista", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Rua é obrigatória")
        @Size(max = 255, message = "Rua deve ter no máximo 255 caracteres")
        String rua,

        @Schema(example = "1000", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        @Size(max = 20, message = "Número deve ter no máximo 20 caracteres")
        String numero,

        @Schema(example = "Apartmento 101", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
        @Size(max = 100, message = "Complemento deve ter no máximo 100 caracteres")
        String complemento,

        @Schema(example = "Bela Vista", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Bairro é obrigatório")
        @Size(max = 100, message = "Bairro deve ter no máximo 100 caracteres")
        String bairro,

        @Schema(example = "São Paulo", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Cidade é obrigatória")
        @Size(max = 100, message = "Cidade deve ter no máximo 100 caracteres")
        String cidade,

        @Schema(example = "SP", requiredMode = Schema.RequiredMode.REQUIRED)
        @NotBlank(message = "Estado é obrigatório")
        @Size(min = 2, max = 2, message = "Estado deve ser a sigla com 2 caracteres")
        @Pattern(regexp = "AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO",
                message = "Estado deve ser uma sigla válida de UF brasileira")
        String estado
) {

        public static EnderecoEntity of(EnderecoUpdateRequest request, UUID idUsuario) {
                EnderecoEntity enderecoEntity = new EnderecoEntity();
                enderecoEntity.setId(request.id());
                enderecoEntity.setCep(request.cep());
                enderecoEntity.setRua(request.rua());
                enderecoEntity.setNumero(request.numero());
                enderecoEntity.setComplemento(request.complemento());
                enderecoEntity.setBairro(request.bairro());
                enderecoEntity.setCidade(request.cidade());
                enderecoEntity.setEstado(request.estado());
                enderecoEntity.setUsuario(idUsuario);
                return enderecoEntity;
        }
}
