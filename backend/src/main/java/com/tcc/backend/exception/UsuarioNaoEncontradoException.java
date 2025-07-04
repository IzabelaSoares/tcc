package com.tcc.backend.exception;

import java.util.UUID;

public class UsuarioNaoEncontradoException extends RuntimeException {
    public UsuarioNaoEncontradoException(String email) {
        super("Não encontrado usuário com o '" + email + "' em nosso sistema");
    }

    public UsuarioNaoEncontradoException(UUID id) {
        super("Não encontrado usuário com o '" + id + "' em nosso sistema");
    }
}
