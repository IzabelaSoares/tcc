package com.tcc.backend.exception;

public class UsuarioNaoEncontradoException extends RuntimeException {
    public UsuarioNaoEncontradoException(String email) {
        super("Não encontrado usuário com o '" + email + "' em nosso sistema");
    }
}
