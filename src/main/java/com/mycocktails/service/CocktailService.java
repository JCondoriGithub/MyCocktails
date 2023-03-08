package com.mycocktails.service;

import com.mycocktails.enums.Flavours;
import com.mycocktails.enums.Method;
import com.mycocktails.model.Cocktail;
import com.mycocktails.model.Ingredient;
import com.mycocktails.model.Preparation;

import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

@Service
public class CocktailService {

    private ArrayList<Cocktail> list = new ArrayList<Cocktail>();
    private int lastId;
    
    public CocktailService() {
                
        Ingredient ingr = new Ingredient("gin", "1/4", 3.2);
        Ingredient ingr2 = new Ingredient("vodka", "3/5", 4.0);
        Ingredient ingr3 = new Ingredient("rum", "1/2", 0.5);
        
        Preparation prep = new Preparation(Method.Build, "Versane nello Shot la Crema di Cacao Scura e la Vodka In un tin, Versare la crema di latte e frustare con il mix per montarla. Aggiungerla delicatamente allo shot.");
        prep.addVariant("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since");
        Preparation prep2 = new Preparation(Method.Throwing, "Versane nello Shot la Crema di Cacao Scura e la Vodka In un tin, Versare la crema di latte e frustare con il mix per montarla. Aggiungerla delicatamente allo shot.");
        prep2.addVariant("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since");
        prep2.addVariant("tab profile: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to ma");
        
        Cocktail c1 = new Cocktail(1, "cocktail1", prep2, "coppa", Flavours.Dolce, "./img/01.png", "kfuhwekufhicbwube");
        c1.addIngredient(ingr3);
        c1.addIngredient(ingr);
        c1.addDecoration("limone", "zknvuhvwie");
        
        Cocktail c2 = new Cocktail(2, "cocktail2", prep, "calice", Flavours.Aspro, "./img/02.png", "ckwubucgwcyewi");
        c2.addIngredient(ingr);
        c2.addIngredient(ingr2);
        c2.addDecoration("ciliegia", null);
        
        Cocktail c3 = new Cocktail(3, "cocktail3", prep2, "calice", Flavours.Soave, "./img/03.png", "zcvoicvjofig<<<");
        c3.addIngredient(ingr2);
        c3.addDecoration("cetriolo", "vcjbfvisd");
        c3.addDecoration("limone", null);
        
        list.add(c1);
        list.add(c2);
        list.add(c3);
        
        lastId = 3;
    }
    
    public ArrayList<Cocktail> getAll() {
        return list;
    }
    
    public Optional<Cocktail> getByid(int id) {
        
        Optional<Cocktail> cocktailFound = list.stream().filter(item -> item.getId() == id).findFirst();	

        if(cocktailFound.isEmpty()) {
            return Optional.empty();
	}
        
        return cocktailFound;
    }
    
    public ArrayList<Cocktail> getByTypology(String category) {
        
        ArrayList<Cocktail> cocktailsFound = new ArrayList<Cocktail>();
        
        try {
            cocktailsFound = (ArrayList<Cocktail>) list.stream().filter(item -> item.getTypology() == Flavours.valueOf(category)).collect(Collectors.toList());
            return cocktailsFound;
        } catch(IllegalArgumentException e) {
            return cocktailsFound;
        }  
    }
    
    public ArrayList<Cocktail> getByIngredient(String ingr) {
        
        ArrayList<Cocktail> cocktailsFound = new ArrayList<Cocktail>();
        
        for(Cocktail c: list) {
            for(Ingredient i: c.getIngredients()) {
                if(i.getName().equals(ingr))
                    cocktailsFound.add(c);
            }
        }
        
        return cocktailsFound;
    }
    
    public ArrayList<Cocktail> getByMethod(String method) {
        
        ArrayList<Cocktail> cocktailsFound = new ArrayList<Cocktail>();
        
        try {
            cocktailsFound = (ArrayList<Cocktail>) list.stream().filter(item -> item.getPreparation().getName() == Method.valueOf(method)).collect(Collectors.toList());
            return cocktailsFound;
        } catch(IllegalArgumentException e) {
            return cocktailsFound;
        }
    }
    
    public Cocktail create(Cocktail cocktail) {

    	lastId++;
        cocktail.setId(lastId);
        list.add(cocktail);
        
        return cocktail;
    }
    
    public Optional<Cocktail> update(int id, Cocktail cocktail) {
        
        Optional<Cocktail> cocktailFound = list.stream().filter(item -> item.getId() == id).findFirst();	

        if(cocktailFound.isEmpty()) {
            return Optional.empty();
	}
        
        if(cocktail.getName() != null)
            cocktailFound.get().setName(cocktail.getName());
        
        if(cocktail.getTypology() != null)
            cocktailFound.get().setTypology(cocktail.getTypology());
        
        if(cocktail.getUrlImg() != null)
            cocktailFound.get().setUrlImg((cocktail.getUrlImg()));
        
        return cocktailFound;
    }
    
    public boolean delete(int id) {
        
        Optional<Cocktail> cocktailFound = list.stream().filter(item -> item.getId() == id).findFirst();
        
        if(cocktailFound.isEmpty()) {
            return false;
        }

        list.remove(cocktailFound.get());
        return true;
    }
}
