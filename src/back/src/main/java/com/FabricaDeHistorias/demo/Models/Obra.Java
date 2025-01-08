package com.FabricaDeHistorias.demo.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name = "Obra")
public class Obra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idLivro;

    private String titulo;
    private String descricao;
    private String data;
    private int numeroPaginas;
    private Long idAutor;

    @Lob
    private byte[] livro;

    public Obra() {
    }

    public Obra(String titulo, String descricao, String data, int numeroPaginas, Long idAutor, byte[] arquivo) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.numeroPaginas = numeroPaginas;
        this.idAutor = idAutor;
        this.livro = arquivo;
    }

    public Long getIdUsuario() {
        return idLivro;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idLivro = idUsuario;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public int getNumeroPaginas() {
        return numeroPaginas;
    }

    public void setNumeroPaginas(int numeroPaginas) {
        this.numeroPaginas = numeroPaginas;
    }

    public Long getIdAutor() {
        return idAutor;
    }

    public void setIdAutor(Long idAutor) {
        this.idAutor = idAutor;
    }

    public byte[] getLivro(){
        return livro;
    }

    @Override
    public String toString(){
        return titulo;
    }
}
