CREATE TABLE usuario (
                       id UUID PRIMARY KEY,
                       nome VARCHAR(100) NOT NULL,
                       email VARCHAR(100) NOT NULL UNIQUE,
                       senha VARCHAR(255) NOT NULL,
                       data_nascimento DATE NOT NULL,
                       cpf VARCHAR(14) NOT NULL UNIQUE,
                       criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
