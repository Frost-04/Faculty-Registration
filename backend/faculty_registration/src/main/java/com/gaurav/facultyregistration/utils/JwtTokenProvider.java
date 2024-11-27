package com.gaurav.facultyregistration.utils;

import io.jsonwebtoken.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenProvider {

    private final String SECRET_KEY = "540c7fcf906f87b3a28c610a0e1ae268d75a76fae1b557cae277f1cb44c0b599ce5fe1f6308a8e58b90ba9653d062289618ea4f47758b12322c52a34cf424a80d1f9aeb4938b068fdebeeb491c86d5907ff99f92b2ae291da06148e67cef9bde159790923301a319c6a5cbc25e7d56998e6eda976bc662bdde1b6567e7f45bb10fab99e410cdaf592f7447f1d2af45173ce2dfd1804057bfdb73383025b5071e9e6ed3c763a145944dbb302df0b8d0c1f00c9a9f9bbe3b74e464c9d17937c1b647f1b7fefb5431bcbd6add01a1cc7317eb9ea41726395d2a9633654d99066292743e85824c0f37889d72993f668fbe73ddd42df54c4371c82dfd043708caa3d7"; // Replace with your secret key
    private final long JWT_EXPIRATION = 1000 * 60 * 60 * 10; // 10 hours

    // Generate JWT token
    public String generateToken(String userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userDetails)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    // Extract email (subject) from JWT token
    public String extractEmail(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getSubject();
    }

    // Validate JWT token
    public boolean validateToken(String token, UserDetails userDetails) {
        String username = extractEmail(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    // Check if token is expired
    private boolean isTokenExpired(String token) {
        Date expiration = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getExpiration();
        return expiration.before(new Date());
    }

    // Get authentication object
    public Authentication getAuthentication(String token, UserDetails userDetails) {
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
