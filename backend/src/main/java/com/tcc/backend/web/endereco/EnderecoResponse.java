package com.tcc.backend.web.endereco;

import com.tcc.backend.entity.EnderecoEntity;

import java.util.UUID;

public record EnderecoResponse(
        UUID id,
        String cep,
        String rua,
        String numero,
        String complemento,
        String bairro,
        String cidade,
        String estado
) {
    public static EnderecoResponse of(EnderecoEntity endereco) {
        return new EnderecoResponse(
                endereco.getId(),
                endereco.getCep(),
                endereco.getRua(),
                endereco.getNumero(),
                endereco.getComplemento(),
                endereco.getBairro(),
                endereco.getCidade(),
                endereco.getEstado()
        );
    }
}
