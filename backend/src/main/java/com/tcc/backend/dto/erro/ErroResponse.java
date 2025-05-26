package com.tcc.backend.dto.erro;

import com.tcc.backend.enumeration.ErroCode;

public record ErroResponse(ErroCode code, String message) {}
