package com.mycocktails.model;

import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.Map;
import java.util.Set;

import com.mycocktails.enums.Flavours;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Cocktail {

    private int id;
    private String name;
    private Set<Ingredient> ingredients;
    private Preparation preparation;
    private Map<String, String> decorations;
    private String glassType;
    private Flavours typology;
    private String urlImg;
    private String history;

    public Cocktail(int id, String name, Preparation preparation, String glassType, Flavours typology, String urlImg, String history) {
        this.id = id;
        this.name = name;
        this.ingredients = new LinkedHashSet();
        this.preparation = preparation;
        this.decorations = new LinkedHashMap();
        this.glassType = glassType;
        this.typology = typology;
        this.urlImg = urlImg;
        this.history = history;
    }
    
    public void addIngredient(Ingredient ingredient) {
        this.ingredients.add(ingredient);
    }
    
    public void addDecoration(String name, String prep) {
        this.decorations.put(name, prep);
    }

}
    