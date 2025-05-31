package com.tcc.backend.exception;

public class EnderecoInvalidoException extends RuntimeException {
    public EnderecoInvalidoException() {
        super("CEP inválido ou estado não existe");
    }

    public EnderecoInvalidoException(String mensagem) {
        super(mensagem);
    }
}
