package com.tcc.backend.controller;

import com.tcc.backend.annotation.endereco.*;
import com.tcc.backend.service.EnderecoService;
import com.tcc.backend.web.endereco.EnderecoCreateRequest;
import com.tcc.backend.web.endereco.EnderecoResponse;
import com.tcc.backend.web.endereco.EnderecoUpdateRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
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
@Tag(name = "Endereço")
public class EnderecoController {

    private final EnderecoService enderecoService;

    @GetMapping
    @EnderecoGetDocumentation
    public ResponseEntity<List<EnderecoResponse>> buscar() {
        return ResponseEntity.ok(enderecoService.buscar());
    }

    @DeleteMapping
    @EnderecoDeleteDocumentation
    public ResponseEntity<Void> remover(UUID id) {
        enderecoService.remover(id);
        return ResponseEntity.noContent().build();
    }

    @EnderecoCreateDocumentation
    @PostMapping
    public ResponseEntity<EnderecoResponse> cadastrar(
            @EnderecoCreateRequestSchema
            @RequestBody @Valid EnderecoCreateRequest request
    ) {
        return ResponseEntity.status(HttpStatus.CREATED).body(enderecoService.cadastrar(request));
    }

    @EnderecoUpdateDocumentation
    @PutMapping
    public ResponseEntity<EnderecoResponse> alterar(
            @EnderecoUpdateRequestSchema
            @RequestBody @Valid EnderecoUpdateRequest request
    ) {
        return ResponseEntity.status(HttpStatus.CREATED).body(enderecoService.atualizar(request));
    }
}
