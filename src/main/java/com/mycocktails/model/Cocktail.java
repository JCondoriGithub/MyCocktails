package com.mycocktails.model;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

public class Cocktail {

    private int id;
    private String name;
    private Set<Ingredient> ingredient;
    private Preparation preparation;
    private Map<String, String> decoration;
    private String glassType;
    private Flavours typology;
    private String urlImg;
    private String history;

    public Cocktail() {
    }

    public Cocktail(int id, String name, Preparation preparation, String glassType, Flavours typology, String urlImg, String history) {
        this.id = id;
        this.name = name;
        this.ingredient = new LinkedHashSet();
        this.preparation = preparation;
        this.decoration = new LinkedHashMap();
        this.glassType = glassType;
        this.typology = typology;
        this.urlImg = urlImg;
        this.history = history;
    }

    public static enum Flavours {
        Dolce, Amaro, Aspro, Fruttato, Salato, Forte, Soave
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Set<Ingredient> getIngredient() {
        return ingredient;
    }

    public Preparation getPreparation() {
        return preparation;
    }

    public Map<String, String> getDecoration() {
        return decoration;
    }

    public String getGlassType() {
        return glassType;
    }

    public Flavours getTypology() {
        return typology;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public String getHistory() {
        return history;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public void addIngredient(Ingredient ingredient) {
        this.ingredient.add(ingredient);
    }

    public void setPreparation(Preparation preparation) {
        this.preparation = preparation;
    }
    
    public void addDecoration(String name, String prep) {
        this.decoration.put(name, prep);
    }

    public void setGlassType(String glassType) {
        this.glassType = glassType;
    }

    public void setTypology(Flavours typology) {
        this.typology = typology;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    @Override
    public String toString() {
        return "Cocktail{" + "id=" + id + ", name=" + name + ", ingredient=" + ingredient + ", preparation=" + preparation + ", decoration=" + decoration + ", glassType=" + glassType + ", typology=" + typology + ", urlImg=" + urlImg + ", history=" + history + '}';
    }

}
    