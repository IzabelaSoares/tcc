package com.tcc.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "termo_consentimento_identidade")
public class TermoConsentimentoIdentidadeEntity {

    @Id
    @GeneratedValue(generator = "UUID")
    @Column(columnDefinition = "uuid", updatable = false)
    private UUID id;

    private LocalDateTime aceitoEm;

    private String ipUsuario;

    @OneToOne
    @JoinColumn(name = "usuario_id")
    private UsuarioEntity usuario;
}
