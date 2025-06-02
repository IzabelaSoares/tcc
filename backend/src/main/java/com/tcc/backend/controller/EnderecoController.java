package com.tcc.backend.controller;

import com.tcc.backend.annotation.endereco.EnderecoUpdateDocumentation;
import com.tcc.backend.annotation.endereco.EnderecoCreateDocumentation;
import com.tcc.backend.annotation.endereco.EnderecoCreateRequestSchema;
import com.tcc.backend.annotation.endereco.EnderecoUpdateRequestSchema;
import com.tcc.backend.service.EnderecoService;
import com.tcc.backend.web.endereco.EnderecoCreateRequest;
import com.tcc.backend.web.endereco.EnderecoResponse;
import com.tcc.backend.web.endereco.EnderecoUpdateRequest;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/endereco")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Endereço")
public class EnderecoController {

    private final EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<List<EnderecoResponse>> buscar() {
        return ResponseEntity.ok(enderecoService.buscar());
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
        return ResponseEntity.status(HttpStatus.CREATED).body(enderecoService.alterar(request));
    }
}
