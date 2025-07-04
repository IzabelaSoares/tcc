export interface UsuarioCreateRequestDTO {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    dataNascimento: string;
    aceitouTermo: boolean;
}
