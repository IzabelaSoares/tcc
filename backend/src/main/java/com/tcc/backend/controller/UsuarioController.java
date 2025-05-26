package com.tcc.backend.controller;

import com.tcc.backend.dto.usuario.UsuarioCreateRequest;
import com.tcc.backend.dto.usuario.UsuarioResponse;
import com.tcc.backend.service.UsuarioService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<UsuarioResponse> cadastrar(
            @RequestBody @Valid UsuarioCreateRequest request,
            HttpServletRequest httpRequest
    ) {
        return ResponseEntity.ok(usuarioService.cadastrar(request, httpRequest));
    }
}
