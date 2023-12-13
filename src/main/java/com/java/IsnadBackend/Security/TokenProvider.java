package com.java.IsnadBackend.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class TokenProvider {
    public String generateToken(Authentication authentication){
        String username= authentication.getName();
        Date currentDate= new Date(System.currentTimeMillis());
        Date expireDate= new Date(currentDate.getTime()+SecurityConstants.JWT_EXPIRATION);
        String token= Jwts.builder().setSubject(username)
                                    .setIssuedAt(currentDate)
                                    .setExpiration(expireDate)
                                    .signWith(SignatureAlgorithm.HS512,SecurityConstants.JWT_SECRET)
                                    .compact();

        return token;
    }
     public String getUsernameFromJWT(String token){
         SecretKey key= Keys.hmacShaKeyFor(SecurityConstants.JWT_SECRET.getBytes());
         Claims claims =Jwts.parserBuilder()
                            .setSigningKey(key)
                            .build()
                            .parseClaimsJws(token)
                            .getBody();
         return claims.getSubject();
     }
     public boolean validateToken(String token){
         SecretKey key= Keys.hmacShaKeyFor(SecurityConstants.JWT_SECRET.getBytes());
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        }catch (Exception e){
            throw new AuthenticationCredentialsNotFoundException("JWT was expired or incorrect");
        }
     }
}
