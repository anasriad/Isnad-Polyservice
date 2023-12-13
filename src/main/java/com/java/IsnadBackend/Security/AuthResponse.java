package com.java.IsnadBackend.Security;

public class AuthResponse {
    private String accessToken;
    private String tokenType="Bearer ";

    public AuthResponse(String accessToken) {
        this.accessToken = accessToken;
    }
    public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }
}
