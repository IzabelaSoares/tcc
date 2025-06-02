package com.tcc.backend.exception;

public class EnderecoNaoEncontradoException extends RuntimeException {
    public EnderecoNaoEncontradoException() {
        super("Endereço não encontrado");
    }
}
