package com.FabricaDeHistorias.demo.Models;

public class LoginRequest {
    private String email;
    private String senha;
    private String tipoUsuario;

    public LoginRequest(String email, String senha, String tipoUsuario){
        this.email = email;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTipoUsuario(){
        return tipoUsuario;
    }
}