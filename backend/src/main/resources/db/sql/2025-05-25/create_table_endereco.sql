CREATE TABLE endereco (
                           id UUID PRIMARY KEY,
                           usuario_id UUID NOT NULL,
                           rua VARCHAR(100) NOT NULL,
                           numero VARCHAR(10) NOT NULL,
                           complemento VARCHAR(100),
                           bairro VARCHAR(100) NOT NULL,
                           cidade VARCHAR(100) NOT NULL,
                           estado VARCHAR(2) NOT NULL,
                           cep VARCHAR(10) NOT NULL,
                           FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);
