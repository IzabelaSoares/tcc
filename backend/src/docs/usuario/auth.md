## Endpoint de Autenticação de Usuário

`POST /auth`

### Request Body
```json
{
  "email":"izabela_soares@example.com",
  "password":"Senha@123"
}
```

### Respostas

#### Sucesso (200)


#### Falhas:

1. Acesso negado (403 Forbidden)
```json
{
    "code": "CREDENCIAIS_INVALIDAS",
    "message": "Usuario não autorizado para estas credenciais"
}
```

### Exemplo cURL
```bash
curl -X POST http://localhost:8080/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"izabela_soares@example.com","password":"Senha@123"
}'
```