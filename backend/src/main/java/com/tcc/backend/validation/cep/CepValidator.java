package com.tcc.backend.validation.cep;

import com.tcc.backend.exception.EnderecoInvalidoException;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CepValidator implements ConstraintValidator<CepValidation, String> {

    @Override
    public boolean isValid(String cep, ConstraintValidatorContext context) {
        if (cep == null || !cep.matches("^\\d{5}-?\\d{3}$")) {
            return false;
        }

        String cepNumeros = cep.replace("-", "");
        if (cepNumeros.matches("(\\d)\\1{7}")) {
            throw new EnderecoInvalidoException("CEP não pode ter todos dígitos iguais");
        }

        // validar a existência real do CEP
        return true;
    }
}