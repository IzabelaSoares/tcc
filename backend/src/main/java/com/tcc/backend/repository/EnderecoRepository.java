package com.tcc.backend.repository;

import com.tcc.backend.entity.EnderecoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface EnderecoRepository extends JpaRepository<EnderecoEntity, UUID> {

    @Query("SELECT e FROM EnderecoEntity e WHERE e.usuario.id = :usuarioId")
    List<EnderecoEntity> findByUsuarioId(@Param("usuarioId") UUID usuarioId);
}