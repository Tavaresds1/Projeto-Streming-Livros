package com.FabricaDeHistorias.demo.Models;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "Feedback")
public class Feedback {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)   
    private long idFeedback;

    private long idObra;
    private long idLeitor;
    private String comentario;
    private int avaliacao;
    private Date data;

    public Feedback() {}

    public Feedback(long idObra, long idLeitor, String comentario, int avaliacao) {
        this.idObra = idObra;
        this.idLeitor = idLeitor;
        this.comentario = comentario;
        this.avaliacao = avaliacao;
        this.data = new Date();
    }

    public long getIdFeedback() {
        return idFeedback;
    }

    public void setIdFeedback(long idFeedback) {
        this.idFeedback = idFeedback;
    }

    public long getIdObra() {
        return idObra;
    }

    public void setIdObra(long idObra) {
        this.idObra = idObra;
    }

    public long getIdLeitor() {
        return idLeitor;
    }

    public void setIdLeitor(long idLeitor) {
        this.idLeitor = idLeitor;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        if (avaliacao < 1 || avaliacao > 5) {
            throw new IllegalArgumentException("A avaliação deve ser entre 1 e 5.");
        }
        this.avaliacao = avaliacao;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "idFeedback=" + idFeedback +
                ", idObra=" + idObra +
                ", idLeitor=" + idLeitor +
                ", comentario='" + comentario + '\'' +
                ", avaliacao=" + avaliacao +
                ", data=" + data +
                '}';
    }
}
