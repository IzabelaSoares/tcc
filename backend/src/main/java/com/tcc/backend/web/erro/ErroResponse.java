package com.tcc.backend.web.erro;

import com.tcc.backend.enumeration.ErroCode;

public record ErroResponse(ErroCode code, String message) {}
