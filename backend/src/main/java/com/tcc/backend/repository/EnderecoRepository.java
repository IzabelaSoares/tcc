package com.tcc.backend.repository;

import com.tcc.backend.entity.EnderecoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EnderecoRepository extends JpaRepository<EnderecoEntity, UUID> {

}