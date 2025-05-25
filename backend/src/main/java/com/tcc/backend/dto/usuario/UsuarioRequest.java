package com.tcc.backend.dto.usuario;

import com.tcc.backend.dto.endereco.EnderecoRequest;
import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.entity.UsuarioEntity;

import java.time.LocalDate;

public record UsuarioRequest(
        String nome,
        String email,
        String senha,
        String cpf,
        LocalDate dataNascimento,
        EnderecoRequest endereco,
        boolean aceitouTermo
) {
    public static UsuarioEntity of(UsuarioRequest request, String senha, EnderecoEntity enderecoEntity) {
        UsuarioEntity usuario = new UsuarioEntity();
        usuario.setNome(request.nome());
        usuario.setEmail(request.email());
        usuario.setSenha(senha);
        usuario.setCpf(request.cpf());
        usuario.setDataNascimento(request.dataNascimento());
        usuario.setEndereco(enderecoEntity);
        return usuario;
    }
}
