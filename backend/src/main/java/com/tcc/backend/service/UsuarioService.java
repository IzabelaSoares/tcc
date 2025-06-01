package com.tcc.backend.service;

import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.exception.EmailJaCadastradoException;
import com.tcc.backend.exception.TermoNaoAceitoException;
import com.tcc.backend.exception.UsuarioNaoEncontradoException;
import com.tcc.backend.repository.UsuarioRepository;
import com.tcc.backend.web.usuario.UsuarioCreateRequest;
import com.tcc.backend.web.usuario.UsuarioResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final TermoService termoService;
    private final PasswordEncoder passwordEncoder;

    public UsuarioEntity buscarUsuario(String email) {
        return repository.findByEmail(email)
                .orElseThrow(() -> new UsuarioNaoEncontradoException(email));
    }

    public UsuarioResponse cadastrar(UsuarioCreateRequest request, HttpServletRequest httpRequest) {
        validarCadastro(request);
        String senha = passwordEncoder.encode(request.senha());
        UsuarioEntity usuario = UsuarioCreateRequest.of(request, senha);
        usuario = repository.save(usuario);
        termoService.registrarTermoAssinado(usuario, httpRequest.getRemoteAddr());

        return UsuarioResponse.of(usuario);
    }

    private void validarCadastro(UsuarioCreateRequest request) {
        if (repository.existsByEmail(request.email())) {
            throw new EmailJaCadastradoException(request.email());
        }

        if (!request.aceitouTermo()) {
            throw new TermoNaoAceitoException();
        }
    }

}

