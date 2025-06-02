package com.tcc.backend.validation.uuid;



import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = UUIDValidator.class)
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface UUIDValidation {
    String message() default "UUID inválido";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}