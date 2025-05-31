## Endpoint de Cadastro de Endereço

`POST /endereco`

### Request Body
```json
{
  "cep": "string (formato 12345-678 ou 12345678)",
  "rua": "string (max 255 caracteres)",
  "numero": "string (opcional, max 20 caracteres)",
  "complemento": "string (opcional, max 100 caracteres)",
  "bairro": "string (max 100 caracteres)",
  "cidade": "string (max 100 caracteres)",
  "estado": "string (sigla UF 2 caracteres)",
  "usuarioId": "uuid"
}
```

### Respostas

#### Sucesso (201 Created)
```json
{
  "id": "uuid",
  "cep": "01311-000",
  "rua": "Avenida Paulista",
  "numero": "1000",
  "complemento": "Apartamento 101",
  "bairro": "Bela Vista",
  "cidade": "São Paulo",
  "estado": "SP",
  "usuarioId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

#### Falhas:

1. Dados inválidos (400 Bad Request)
```json
{
  "code": "DADOS_INVALIDOS",
  "message": "CEP inválido: 00000000"
}
```

2. Usuário não encontrado (404 Not Found)
```json
{
  "code": "USUARIO_NAO_ENCONTRADO",
  "message": "Usuário com ID 3fa85f64-5717-4562-b3fc-2c963f66afa6 não encontrado"
}
```

3. UUID inválido (400 Bad Request)
```json
{
  "code": "UUID_INVALIDO",
  "message": "ID do usuário deve ser um UUID válido"
}
```
ea
### Exemplo cURL
```bash
curl -X POST 'http://localhost:8080/endereco' \
-H 'Content-Type: application/json' \
-d '{
    "cep": "01311-000",
    "rua": "Avenida Paulista",
    "numero": "1000",
    "complemento": "Apartamento 101",
    "bairro": "Bela Vista",
    "cidade": "São Paulo",
    "estado": "SP",
    "usuarioId": "2869fa3a-c3d0-4d65-b76d-402e2845660b"
}'
```