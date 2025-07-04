package com.tcc.backend.repository;
import com.tcc.backend.entity.UsuarioEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface UsuarioRepository extends JpaRepository<UsuarioEntity, UUID> {

    Optional<UsuarioEntity> findByEmail(String email);

    boolean existsByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE UsuarioEntity u SET u.nome = :nome, u.sobre = :sobre, u.titulo = :titulo WHERE u.id = :id")
    void update(@Param("id") UUID id, @Param("nome") String nome,  @Param("titulo") String titulo,  @Param("sobre") String sobre);

    @Transactional
    @Modifying
    @Query("UPDATE UsuarioEntity u SET u.senha = :senha WHERE u.id = :id")
    void updatePassword(@Param("id") UUID id, @Param("senha") String senha);
}