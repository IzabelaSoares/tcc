package com.tcc.backend.service;

import com.tcc.backend.dto.usuario.UsuarioRequest;
import com.tcc.backend.dto.usuario.UsuarioResponse;
import com.tcc.backend.entity.EnderecoEntity;
import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.exception.EmailJaCadastradoException;
import com.tcc.backend.exception.TermoNaoAceitoException;
import com.tcc.backend.repository.UsuarioRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final EnderecoService enderecoService;
    private final TermoService termoService;
    private final PasswordEncoder passwordEncoder;

    public UsuarioResponse cadastrar(UsuarioRequest request, HttpServletRequest httpRequest) {
        validarCadastro(request);

        EnderecoEntity enderecoEntity = enderecoService.cadastrar(request.endereco());
        String senha = passwordEncoder.encode(request.senha());
        UsuarioEntity usuario = UsuarioRequest.of(request, senha, enderecoEntity);
        usuario = repository.save(usuario);
        termoService.registrarTermoAssinado(usuario, httpRequest.getRemoteAddr());

        return UsuarioResponse.of(usuario);
    }

    private void validarCadastro(UsuarioRequest request) {
        if (repository.existsByEmail(request.email())) {
            throw new EmailJaCadastradoException(request.email());
        }

        if (!request.aceitouTermo()) {
            throw new TermoNaoAceitoException();
        }
    }
}

