package com.tcc.backend.exception;

import org.springframework.security.authentication.BadCredentialsException;

public class CredenciaisInvalidasException extends BadCredentialsException {
    public CredenciaisInvalidasException(String message) {
        super(message);
    }
}
