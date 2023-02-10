package com.mycocktails.model;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

public class Cocktail {

    private int id;
    private Set<Ingrediente> ingredienti;
    private Preparazione preparazione;
    private Map<String, String> decorazione;
    private String tipoBicchiere;
    private Sapori tipologia;
    private String urlImg;
    private String storia;

    public Cocktail() {
    }

    public Cocktail(int id, Preparazione preparazione, String tipoBicchiere, Sapori tipologia, String urlImg, String storia) {
        this.id = id;
        this.ingredienti = new LinkedHashSet();
        this.preparazione = preparazione;
        this.decorazione = new LinkedHashMap();
        this.tipoBicchiere = tipoBicchiere;
        this.tipologia = tipologia;
        this.urlImg = urlImg;
        this.storia = storia;
    }

    public static enum Sapori {
        Dolce, Amaro, Aspro, Fruttato, Salato, Forte, Soave
    }

    public int getId() {
        return id;
    }

    public Set<Ingrediente> getIngredienti() {
        return ingredienti;
    }

    public Preparazione getPreparazione() {
        return preparazione;
    }

    public Map<String, String> getDecorazione() {
        return decorazione;
    }

    public String getTipoBicchiere() {
        return tipoBicchiere;
    }

    public Sapori getTipologia() {
        return tipologia;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public String getStoria() {
        return storia;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void addIngrediente(Ingrediente ingrediente) {
        this.ingredienti.add(ingrediente);
    }

    public void setPreparazione(Preparazione preparazione) {
        this.preparazione = preparazione;
    }

    public void addDecorazione(String nome, String prep) {
        this.decorazione.put(nome, prep);
    }

    public void setTipoBicchiere(String tipoBicchiere) {
        this.tipoBicchiere = tipoBicchiere;
    }

    public void setTipologia(Sapori tipologia) {
        this.tipologia = tipologia;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    public void setStoria(String storia) {
        this.storia = storia;
    }

    @Override
    public String toString() {
        return "Cocktail{" + "id=" + id + ", ingredienti=" + ingredienti + ", preparazione=" + preparazione + ", decorazione=" + decorazione + ", tipoBicchiere=" + tipoBicchiere + ", tipologia=" + tipologia + ", urlImg=" + urlImg + ", storia=" + storia + '}';
    }
    
}
    