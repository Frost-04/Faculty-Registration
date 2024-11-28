package com.gaurav.facultyregistration.controller;

import com.gaurav.facultyregistration.utils.JwtTokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;

    public AuthController(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestParam String username, @RequestParam String password) {
        // Hardcoded admin credentials
        final String ADMIN_USERNAME = "admin@admin.com";
        final String ADMIN_PASSWORD = "password"; // Replace with a hashed password in production

        if (ADMIN_USERNAME.equals(username) && ADMIN_PASSWORD.equals(password)) {
            String token = jwtTokenProvider.generateToken(username);
            return ResponseEntity.ok().body("Bearer " + token);
            //return ResponseEntity.ok().body("Logged In Successfully");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
