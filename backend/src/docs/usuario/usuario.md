## Endpoint de Cadastro de Usuário

`POST /usuarios`

### Request Body
```json
{
    "nome": "string",
    "email": "string",
    "senha": "string",
    "cpf": "string",
    "dataNascimento": "yyyy-MM-dd",
    "aceitouTermo": "boolean"
}
```

### Respostas

#### Sucesso (201 Created)
```json
{
    "id": "uuid",
    "nome": "string",
    "email": "string",
    "cpf": "string",
    "dataNascimento": "yyyy-MM-dd",
    "aceitouTermo": true
}
```

#### Falhas:

1. Termo não aceito (403 Forbidden)
```json
{
    "code": "TERMO_NAO_ACEITO",
    "message": "É necessário aceitar os termos de uso para se cadastrar"
}
```

2. E-mail já cadastrado (409 Conflict)
```json
{
    "code": "EMAIL_JA_CADASTRADO",
    "message": "O e-mail 'exemplo@email.com' já está cadastrado"
}
```

### Exemplo cURL
```bash
curl -X POST 'http://localhost:8080/usuarios' \
-H 'Content-Type: application/json' \
-d '{
    "nome": "Maria Oliveira",
    "email": "maria@example.com",
    "senha": "Senha@123",
    "cpf": "987.654.321-00",
    "dataNascimento": "1985-05-15",
    "aceitouTermo": true
}'
```