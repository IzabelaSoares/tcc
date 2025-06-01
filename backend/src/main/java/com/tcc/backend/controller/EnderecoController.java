package com.tcc.backend.controller;

import com.tcc.backend.annotation.endereco.EnderecoCadastroDocumentation;
import com.tcc.backend.annotation.endereco.EnderecoCreateRequestSchema;
import com.tcc.backend.service.EnderecoService;
import com.tcc.backend.web.endereco.EnderecoCreateRequest;
import com.tcc.backend.web.endereco.EnderecoResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/endereco")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class EnderecoController {

    private final EnderecoService enderecoService;

    @GetMapping("/{usuarioId}/enderecos")
    public ResponseEntity<List<EnderecoResponse>> listarEnderecos(@PathVariable UUID usuarioId) {
        return ResponseEntity.ok(enderecoService.listarEnderecos(usuarioId));
    }

    @EnderecoCadastroDocumentation
    @PostMapping
    public ResponseEntity<EnderecoResponse> cadastrar(
            @EnderecoCreateRequestSchema
            @RequestBody @Valid EnderecoCreateRequest request
    ) {
        return ResponseEntity.status(HttpStatus.CREATED).body(enderecoService.cadastrar(request));
    }
}
