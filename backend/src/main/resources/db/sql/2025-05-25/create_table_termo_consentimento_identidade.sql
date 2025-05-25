CREATE TABLE termo_consentimento_identidade (
                                      id UUID PRIMARY KEY,
                                      usuario_id UUID NOT NULL,
                                      aceito_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                      ip_usuario VARCHAR(45),
                                      FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
