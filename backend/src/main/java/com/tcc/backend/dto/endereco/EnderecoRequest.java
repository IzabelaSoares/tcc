package com.tcc.backend.dto.endereco;

import com.tcc.backend.entity.EnderecoEntity;

public record EnderecoRequest(
        String cep,
        String rua,
        String numero,
        String complemento,
        String bairro,
        String cidade,
        String estado
) {
    public static EnderecoEntity of(EnderecoRequest request) {
        EnderecoEntity enderecoEntity = new EnderecoEntity();
        enderecoEntity.setCep(request.cep());
        enderecoEntity.setRua(request.rua());
        enderecoEntity.setNumero(request.numero());
        enderecoEntity.setComplemento(request.complemento());
        enderecoEntity.setBairro(request.bairro());
        enderecoEntity.setCidade(request.cidade());
        enderecoEntity.setEstado(request.estado());
        return enderecoEntity;
    }
}
