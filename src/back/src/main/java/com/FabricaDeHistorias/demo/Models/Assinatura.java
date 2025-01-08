package com.FabricaDeHistorias.demo.Models;

import java.util.Calendar;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Assinatura")
public class Assinatura {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)   
    private long idAssinatura;

    private long idUsuario;
    private String tipoAssinatura;
    private double preco;
    private Date dataInicio;
    private Date dataTermino;

    public Assinatura() {
    }

    public Assinatura(String tipoAssinatura, long idUsuario) {
        this.tipoAssinatura = tipoAssinatura;
        this.idUsuario = idUsuario;
        this.dataInicio = new Date();
        this.dataTermino = definirAssinatura(tipoAssinatura);
    }

    private Date definirAssinatura(String tipoAssinatura) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(this.dataInicio);

        switch (tipoAssinatura.toLowerCase()) {
            case "anual":
                calendar.add(Calendar.YEAR, 1);
                this.preco = 195.00;
                break;
            case "semestral":
                calendar.add(Calendar.MONTH, 6);
                this.preco = 110.00;
                break;
            case "mensal":
                calendar.add(Calendar.MONTH, 1);
                this.preco = 24.90;
                break;
            default:
                throw new IllegalArgumentException("Tipo de assinatura inválido");
        }

        return calendar.getTime();
    }

    public String getTipoAssinatura() {
        return tipoAssinatura;
    }

    public void setTipoAssinatura(String tipoAssinatura) {
        this.tipoAssinatura = tipoAssinatura;
    }

    public long getIdAssinatura() {
        return idAssinatura;
    }

    public void setIdAssinatura(long idAssinatura) {
        this.idAssinatura = idAssinatura;
    }

    public long getIdUsuario() {
        return this.idUsuario;
    }

    public void setIdUsuario(long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataTermino() {
        return dataTermino;
    }

    public void setDataTermino(Date dataTermino) {
        this.dataTermino = dataTermino;
    }

    @Override
    public String toString() {
        return "Assinatura{" +
                "tipoAssinatura='" + tipoAssinatura + '\'' +
                ", idAssinatura=" + idAssinatura +
                ", preco=" + preco +
                ", dataInicio=" + dataInicio +
                ", dataTermino=" + dataTermino +
                '}';
    }
}