package com.tcc.backend.dto.usuario;

import com.tcc.backend.dto.endereco.EnderecoCreateRequest;
import com.tcc.backend.entity.UsuarioEntity;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record UsuarioCreateRequest(
        String nome,
        String email,
        String senha,
        String cpf,
        LocalDate dataNascimento,
        EnderecoCreateRequest endereco,
        boolean aceitouTermo
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
