package com.tcc.backend.controller;

import com.tcc.backend.web.usuario.UsuarioCreateRequest;
import com.tcc.backend.web.usuario.UsuarioResponse;
import com.tcc.backend.service.UsuarioService;
import com.tcc.backend.annotation.usuario.UsuarioCadastroDocumentation;
import com.tcc.backend.annotation.usuario.UsuarioCreateRequestSchema;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @UsuarioCadastroDocumentation
    @PostMapping
    public ResponseEntity<UsuarioResponse> cadastrar(
            @UsuarioCreateRequestSchema
            @RequestBody @Valid UsuarioCreateRequest request,
            HttpServletRequest httpRequest
    ) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(usuarioService.cadastrar(request, httpRequest));
    }
}
