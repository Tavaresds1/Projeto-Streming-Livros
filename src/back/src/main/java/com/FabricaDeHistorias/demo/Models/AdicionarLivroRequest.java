package com.FabricaDeHistorias.demo.Models;

public class AdicionarLivroRequest {
    private long idUsuario;
    private long idLivro;

    public AdicionarLivroRequest() {
    }

    public AdicionarLivroRequest(long idUsuario, long idLivro) {
        this.idUsuario = idUsuario;
        this.idLivro = idLivro;
    }

    public long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public long getIdLivro() {
        return idLivro;
    }

    public void setIdLivro(long idLivro) {
        this.idLivro = idLivro;
    }
}
