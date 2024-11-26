package com.gaurav.facultyregistration.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class PasswordEncoderUtil {

    private final PasswordEncoder passwordEncoder;

    public PasswordEncoderUtil() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    // Encode a raw password
    public String encodePassword(String rawPassword) {
        return passwordEncoder.encode(rawPassword);
    }

    // Validate a raw password against an encoded one
    public boolean matches(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}
