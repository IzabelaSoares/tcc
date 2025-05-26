package com.tcc.backend.controller;

import com.tcc.backend.dto.endereco.EnderecoCreateRequest;
import com.tcc.backend.dto.endereco.EnderecoResponse;
import com.tcc.backend.service.EnderecoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/endereco")
@RequiredArgsConstructor
public class EnderecoController {

    private final EnderecoService enderecoService;

    @GetMapping("/{usuarioId}/enderecos")
    public ResponseEntity<List<EnderecoResponse>> listarEnderecos(@PathVariable UUID usuarioId) {
        return ResponseEntity.ok(enderecoService.listarEnderecos(usuarioId));
    }

    @PostMapping
    public ResponseEntity<EnderecoResponse> cadastrar(
            @RequestBody @Valid EnderecoCreateRequest request
    ) {
        return ResponseEntity.ok(enderecoService.cadastrar(request));
    }
}
