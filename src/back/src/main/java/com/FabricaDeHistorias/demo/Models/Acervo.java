package com.FabricaDeHistorias.demo.Models;

import java.util.LinkedList;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Acervo")
public class Acervo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idAcervo;

    private long idUsuario;

    @ElementCollection
    private List<Long> livros = new LinkedList<>();
    
    public Acervo(long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public Acervo(){
    }

    public void adicionarLivro(long idLivro){
        this.livros.add(idLivro);
    }

    public void removerLivro(long idLivro){
        this.livros.remove(livros.indexOf(idLivro));
    }

    public List<Long> getLivros(){
        return this.livros;
    }
}
