package com.tcc.backend.service;

import com.tcc.backend.config.jwt.JwtTokenProvider;
import com.tcc.backend.entity.UsuarioEntity;
import com.tcc.backend.web.auth.AuthRequest;
import com.tcc.backend.web.auth.AuthResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UsuarioService usuarioService;

   public AuthResponse authenticate(AuthRequest authRequest) {
       Authentication authentication = authenticationManager.authenticate(
               new UsernamePasswordAuthenticationToken(
                       authRequest.email(),
                       authRequest.senha()
               )
       );

       UserDetails user = (UserDetails) authentication.getPrincipal();
       UsuarioEntity usuario = usuarioService.buscarUsuarioPorEmail(user.getUsername());
       String token = jwtTokenProvider.generateToken(user.getUsername());
       return AuthResponse.of(token, usuario.getEmail(), usuario.getNome());
   }
}