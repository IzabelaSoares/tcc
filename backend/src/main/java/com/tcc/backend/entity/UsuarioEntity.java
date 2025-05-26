package com.tcc.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "usuario")
public class UsuarioEntity {

    @Id
    private UUID id;

    private String nome;

    @Column(unique = true)
    private String email;

    private String senha;

    private LocalDate dataNascimento;

    @Column(unique = true)
    private String cpf;

    private LocalDateTime criadoEm;

    private LocalDateTime atualizadoEm;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<EnderecoEntity> enderecos = new ArrayList<>();

    @OneToOne(mappedBy = "usuario", cascade = CascadeType.ALL)
    private TermoConsentimentoIdentidadeEntity termoConsentimentoIdentidade;

}

