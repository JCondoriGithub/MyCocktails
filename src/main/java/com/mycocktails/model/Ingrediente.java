package com.mycocktails.model;

public class Ingrediente {

    private String nome;
    private String oz;
    private Double cl;

    public Ingrediente() {
    }
    
    public Ingrediente(String nome, String oz, Double cl) {
        this.nome = nome;
        this.oz = oz;
        this.cl = cl;
    }

    public String getNome() {
        return nome;
    }

    public String getOz() {
        return oz;
    }

    public double getCl() {
        return cl;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setOz(String oz) {
        this.oz = oz;
    }

    public void setCl(Double cl) {
        this.cl = cl;
    }

    @Override
    public String toString() {
        return "Ingrediente{" + "nome=" + nome + ", oz=" + oz + ", cl=" + cl + '}';
    }

}
