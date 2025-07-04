package com.tcc.backend.controller;

import com.tcc.backend.annotation.usuario.UsuarioUpdateDocumentation;
import com.tcc.backend.annotation.usuario.UsuarioUpdateRequestSchema;
import com.tcc.backend.web.usuario.*;
import com.tcc.backend.service.UsuarioService;
import com.tcc.backend.annotation.usuario.UsuarioCreateDocumentation;
import com.tcc.backend.annotation.usuario.UsuarioCreateRequestSchema;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
@Tag(name = "Usuario")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @UsuarioCreateDocumentation
    @PostMapping
    public ResponseEntity<UsuarioResponse> cadastrar(
            @UsuarioCreateRequestSchema
            @RequestBody @Valid UsuarioCreateRequest request,
            HttpServletRequest httpRequest
    ) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(usuarioService.cadastrar(request, httpRequest));
    }

    @UsuarioUpdateDocumentation
    @PutMapping
    public ResponseEntity<UsuarioUpdateResponse> atualizar(
            @UsuarioUpdateRequestSchema
            @RequestBody @Valid UsuarioUpdateRequest request
    ) {
        return ResponseEntity.status(HttpStatus.OK)
                .body(usuarioService.atualizarDados(request));
    }

    @UsuarioUpdateDocumentation
    @PutMapping("/senha")
    public ResponseEntity<Void> atualizarSenha(
            @UsuarioUpdateRequestSchema
            @RequestBody @Valid UsuarioUpdatePasswordRequest request
    ) {
        usuarioService.atualizarSenha(request);
        return ResponseEntity.noContent().build();
    }
}
