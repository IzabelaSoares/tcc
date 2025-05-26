package com.tcc.backend.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = AgeValidator.class)
public @interface CustomValidation {
    String message() default "Idade inválida";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};

    int minAge() default 0;
    int maxAge() default 100;
}