package com.tcc.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class TermoNaoAceitoException extends RuntimeException {
    public TermoNaoAceitoException() {
        super("É necessário aceitar os termos de uso para se cadastrar");
    }
}