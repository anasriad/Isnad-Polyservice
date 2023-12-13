package com.java.IsnadBackend.Controllers;

import com.java.IsnadBackend.Models.Roles;
import com.java.IsnadBackend.Models.UserEntity;
import com.java.IsnadBackend.Repositories.RoleRepository;
import com.java.IsnadBackend.Repositories.UserRepository;
import com.java.IsnadBackend.Security.AuthResponse;
import com.java.IsnadBackend.Security.TokenProvider;
import com.java.IsnadBackend.Services.RegistrationForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {
    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;

    private TokenProvider tokenProvider;
   @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository, RoleRepository roleRepository, TokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.tokenProvider = tokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestParam("email") String email, @RequestParam("password") String password){
        System.out.println("Received login request for email: " + email);
        Authentication authentication= authenticationManager
        .authenticate(new UsernamePasswordAuthenticationToken(email,password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token= tokenProvider.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponse(token), HttpStatus.OK);
    }
    @PostMapping("/Register")
    public ResponseEntity<String> register(@RequestParam("email") String Email,@RequestParam("password") String password, @RequestParam("category") String category){
        if(userRepository.existsByEmail(Email)){
            return new ResponseEntity<>("Username is taken", HttpStatus.BAD_REQUEST);
        }
        UserEntity user=new UserEntity();
        user.setUsername(Email);

        Roles roles;
        roles =roleRepository.findByName("USER").get();
        user.setRoles(Collections.singletonList(roles));
        userRepository.save(user);
        return new ResponseEntity<>("User Registered", HttpStatus.OK);
    }
}

