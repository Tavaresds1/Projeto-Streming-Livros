package com.FabricaDeHistorias.demo.Models;

import com.FabricaDeHistorias.demo.DTO.UsuarioDTO;

import jakarta.persistence.*;

@Entity
@Table(name = "Usuario")
public class Usuario {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)     
    private long idUsuario;

    private String nome;
    private String email;
    private String senha;
    private String tipoUsuario;
    private long codAssinatura;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "acervo_id")
    private Acervo acervo;

    public Usuario(String nome, String email, String senha, String tipoUsuario){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.tipoUsuario = tipoUsuario;
    }

    public Usuario(){
    }

    public void setAcervo(Acervo acervo) {
        this.acervo = acervo;
    }

    public long getId(){
        return idUsuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public long getCodAssinatura(){
        return codAssinatura;
    }

    public void setCodAssinatura(long codAssinatura) {
        this.codAssinatura = codAssinatura;
    }

    public void atualizarUsuario(String nome, String email, String senha){
        this.setNome(nome);
        this.setEmail(email);
        this.setSenha(senha);
    }

    public void adicionarLivro(long idLivro){
        this.acervo.adicionarLivro(idLivro);
    }

    public UsuarioDTO gerarDTO(){
		return new UsuarioDTO(nome, email, senha, tipoUsuario);
	}
}
