package com.tcc.backend.controller;

import com.tcc.backend.dto.usuario.UsuarioRequest;
import com.tcc.backend.dto.usuario.UsuarioResponse;
import com.tcc.backend.service.UsuarioService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuario")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<UsuarioResponse> cadastrar(@RequestBody UsuarioRequest request, HttpServletRequest httpRequest) {
        UsuarioResponse response = usuarioService.cadastrar(request, httpRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
