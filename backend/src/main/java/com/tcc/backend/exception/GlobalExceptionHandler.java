package com.tcc.backend.exception;

import com.tcc.backend.web.erro.ErroResponse;
import com.tcc.backend.enumeration.ErroCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({
            EmailJaCadastradoException.class,
            TermoNaoAceitoException.class,
            UsuarioNaoEncontradoException.class,
            EnderecoInvalidoException.class,
            CredenciaisInvalidasException.class
    })

    public ResponseEntity<ErroResponse> handleCustomExceptions(RuntimeException ex) {
        return switch (ex) {
            case EmailJaCadastradoException e -> buildResponse(e, ErroCode.EMAIL_JA_CADASTRADO, HttpStatus.CONFLICT);
            case TermoNaoAceitoException e -> buildResponse(e, ErroCode.TERMO_NAO_ACEITO, HttpStatus.FORBIDDEN);
            case UsuarioNaoEncontradoException e -> buildResponse(e, ErroCode.USUARIO_NAO_CADASTRADO, HttpStatus.NOT_FOUND);
            case EnderecoInvalidoException e -> buildResponse(e, ErroCode.ENDERECO_INVALIDO, HttpStatus.BAD_REQUEST);
            case CredenciaisInvalidasException e -> buildResponse(e, ErroCode.CREDENCIAIS_INVALIDAS, HttpStatus.UNAUTHORIZED);
            default -> buildResponse(ex, ErroCode.ERRO_INTERNO, HttpStatus.INTERNAL_SERVER_ERROR);
        };
    }

    private ResponseEntity<ErroResponse> buildResponse(Exception ex, ErroCode code, HttpStatus status) {
        return ResponseEntity.status(status)
                .body(new ErroResponse(code, ex.getMessage()));
    }
}