package com.tcc.backend.validation.uuid;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.UUID;

public class UUIDValidator  implements ConstraintValidator<UUIDValidation, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }

        try {
            String trimmed = value.trim();
            if (trimmed.length() != 36) {
                return false;
            }
            UUID.fromString(trimmed);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }
}