package com.mycocktails.model;

import java.util.LinkedHashSet;
import java.util.Set;

public class Preparazione {

    private Metodo nome;
    private String prepDefault;
    private Set<String> varianti;

    public Preparazione() {
    }

    public Preparazione(Metodo nome, String prepDefault) {
        this.nome = nome;
        this.prepDefault = prepDefault;
        this.varianti = new LinkedHashSet();
    }
    
    public static enum Metodo {
        Neat, Build, Build_Layer, Dry_shake, Stir_Strain, Shake_Strain, Throwing
    }

    public Metodo getNome() {
        return nome;
    }

    public String getPrepDefault() {
        return prepDefault;
    }

    public Set<String> getVarianti() {
        return varianti;
    }

    public void setNome(Metodo nome) {
        this.nome = nome;
    }

    public void setPrepDefault(String prepDefault) {
        this.prepDefault = prepDefault;
    }

    public void addVariante(String variante) {
        this.varianti.add(variante);
    }

    @Override
    public String toString() {
        return "Preparazione{" + "nome=" + nome + ", prepDefault=" + prepDefault + ", varianti=" + varianti + '}';
    }
    
}
