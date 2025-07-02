package com.tcc.backend.controller;

import com.tcc.backend.annotation.autenticacao.AutenticacaoDocumentation;
import com.tcc.backend.annotation.autenticacao.AutenticacaoRequestSchema;
import com.tcc.backend.service.AuthService;
import com.tcc.backend.web.auth.AuthRequest;
import com.tcc.backend.web.auth.AuthResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Autenticação")
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @AutenticacaoDocumentation
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@AutenticacaoRequestSchema @RequestBody @Valid AuthRequest authRequest) {
        return ResponseEntity.ok(authService.authenticate(authRequest));
    }
}