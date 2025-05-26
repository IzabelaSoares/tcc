package com.tcc.backend.dto.usuario;

import jakarta.validation.ConstraintViolation;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import jakarta.validation.Validator;

import java.time.LocalDate;
import java.util.Set;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UsuarioCreateRequestTest {

        @Autowired
        private Validator validator;

    private Set<String> getViolationMessages(UsuarioCreateRequest request) {
        return validator.validate(request).stream()
                .map(ConstraintViolation::getMessage)
                .collect(Collectors.toSet());
    }

    @Test
    void quandoNomeMenorQue3Caracteres_deveRetornarErro() {
        UsuarioCreateRequest request = new UsuarioCreateRequest(
                "Ab",
                "email@valido.com",
                "Senha@123",
                "529.982.247-25",
                LocalDate.now().minusYears(20),
                true
        );

        assertTrue(getViolationMessages(request).contains("Nome deve ter entre 3 e 100 caracteres"));
    }
    @Test
    void quandoEmailInvalido_deveRetornarErro() {
        UsuarioCreateRequest request = new UsuarioCreateRequest(
                "Nome Válido",
                "email-invalido",
                "Senha@123",
                "529.982.247-25",
                LocalDate.now().minusYears(20),
                true
        );

        assertTrue(getViolationMessages(request).contains("Email deve ser válido"));
    }

    @Test
    void quandoSenhaFraca_deveRetornarErro() {
        UsuarioCreateRequest request = new UsuarioCreateRequest(
                "Nome Válido",
                "email@valido.com",
                "senhasemnumeros",
                "529.982.247-25",
                LocalDate.now().minusYears(20),
                true
        );

        assertTrue(getViolationMessages(request).contains("Senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais"));
    }

    @Test
    void quandoCpfInvalido_deveRetornarErro() {
        UsuarioCreateRequest request = new UsuarioCreateRequest(
                "Nome Válido",
                "email@valido.com",
                "Senha@123",
                "111.111.111-11",
                LocalDate.now().minusYears(20),
                true
        );

        assertTrue(getViolationMessages(request).contains("CPF inválido"));
    }

    @Test
    void quandoDataNascimentoNoFuturo_deveRetornarErro() {
        UsuarioCreateRequest request = new UsuarioCreateRequest(
                "Nome Válido",
                "email@valido.com",
                "Senha@123",
                "529.982.247-25",
                LocalDate.now().plusDays(1),
                true
        );

        assertTrue(getViolationMessages(request).contains("Data de nascimento deve ser no passado"));
    }

    @Test
    void quandoAceiteTermoNaoInformado_deveRetornarErro() {
        UsuarioCreateRequest request = new UsuarioCreateRequest(
                "Nome Válido",
                "email@valido.com",
                "Senha@123",
                "529.982.247-25",
                LocalDate.now().minusYears(20),
                null
        );

        assertTrue(getViolationMessages(request).contains("Aceite dos termos é obrigatório"));
    }

    @Test
    void quandoTodosCamposValidos_devePassar() {
        UsuarioCreateRequest validRequest = new UsuarioCreateRequest(
                "Nome Completo",
                "email.valido@example.com",
                "Senha@1234",
                "529.982.247-25",
                LocalDate.now().minusYears(25),
                true
        );

        assertTrue(validator.validate(validRequest).isEmpty());
    }
}