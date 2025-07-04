package com.tcc.backend.service;

import com.tcc.backend.config.security.SecurityUtils;
import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.exception.EmailJaCadastradoException;
import com.tcc.backend.exception.TermoNaoAceitoException;
import com.tcc.backend.exception.UsuarioNaoEncontradoException;
import com.tcc.backend.repository.UsuarioRepository;
import com.tcc.backend.web.usuario.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository repository;
    private final TermoService termoService;
    private final PasswordEncoder passwordEncoder;
    private final SecurityUtils securityUtils;

    public UUID buscarIdUsuarioLogado() {
        UsuarioEntity usuario = buscarUsuarioLogado();
        return usuario.getId();
    }

    private UsuarioEntity buscarUsuarioLogado(){
        String userEmail = securityUtils.getCurrentUserEmail();
        return buscarUsuarioPorEmail(userEmail);
    }

    public UsuarioEntity buscarUsuarioPorEmail(String email) {
        return repository.findByEmail(email)
                .orElseThrow(() -> new UsuarioNaoEncontradoException(email));
    }

    private UsuarioEntity buscarUsuarioPorId(UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new UsuarioNaoEncontradoException(id));
    }

    public UsuarioResponse cadastrar(UsuarioCreateRequest request, HttpServletRequest httpRequest) {
        validarCadastro(request);
        String senha = passwordEncoder.encode(request.senha());
        UsuarioEntity usuario = UsuarioCreateRequest.of(request, senha);
        usuario = repository.save(usuario);
        termoService.registrarTermoAssinado(usuario, httpRequest.getRemoteAddr());

        return UsuarioResponse.of(usuario);
    }

    public UsuarioUpdateResponse atualizarDados(UsuarioUpdateRequest request) {
        UsuarioEntity usuarioLogado = buscarUsuarioLogado();
        UUID idUsuario = usuarioLogado.getId();
        repository.update(idUsuario, request.nome(), request.titulo(), request.sobre());
        UsuarioEntity usuarioAtualizado = buscarUsuarioPorId(idUsuario);

        return UsuarioUpdateResponse.of(usuarioAtualizado);
    }

    public void atualizarSenha(UsuarioUpdatePasswordRequest request) {
        UsuarioEntity usuarioLogado = buscarUsuarioLogado();
        UUID idUsuario = usuarioLogado.getId();
        String senha = passwordEncoder.encode(request.senha());
        repository.updatePassword(idUsuario, senha);
    }

    private void validarCadastro(UsuarioCreateRequest request) {
        if (repository.existsByEmail(request.email())) {
            throw new EmailJaCadastradoException(request.email());
        }

        if (!request.aceitouTermo()) {
            throw new TermoNaoAceitoException();
        }
    }

    public UsuarioPerfilResponse buscarUsuarioPerfil(){
        UsuarioEntity usuario = buscarUsuarioLogado();
        return UsuarioPerfilResponse.of(usuario);
    }
}

