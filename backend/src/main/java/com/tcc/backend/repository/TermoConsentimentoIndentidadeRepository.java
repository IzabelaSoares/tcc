package com.tcc.backend.repository;

import com.tcc.backend.entity.TermoConsentimentoIdentidadeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TermoConsentimentoIndentidadeRepository extends JpaRepository<TermoConsentimentoIdentidadeEntity, UUID> {

}