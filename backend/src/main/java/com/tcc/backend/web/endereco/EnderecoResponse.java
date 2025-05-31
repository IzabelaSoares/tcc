package com.tcc.backend.web.endereco;

import com.tcc.backend.entity.EnderecoEntity;

public record EnderecoResponse(
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
