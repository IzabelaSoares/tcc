package com.tcc.backend.validation.age;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
import java.time.LocalDate;
import java.time.Period;

public class AgeValidator implements ConstraintValidator<AgeValidation, LocalDate> {
    private int minAge;
    private int maxAge;

    @Override
    public void initialize(AgeValidation constraintAnnotation) {
        this.minAge = constraintAnnotation.minAge();
        this.maxAge = constraintAnnotation.maxAge();
    }

    @Override
    public boolean isValid(LocalDate dataNascimento, ConstraintValidatorContext context) {
        if (dataNascimento == null) {
            return true;
        }

        int idade = Period.between(dataNascimento, LocalDate.now()).getYears();
        return idade >= minAge && idade <= maxAge;
    }
}