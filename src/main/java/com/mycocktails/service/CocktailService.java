package com.mycocktails.service;

import com.mycocktails.model.Cocktail;
import com.mycocktails.model.Ingrediente;
import com.mycocktails.model.Preparazione;
import java.util.ArrayList;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class CocktailService {

    private ArrayList<Cocktail> list = new ArrayList<Cocktail>();
    private int lastId;
    
    public CocktailService() {
                
        Ingrediente ingr = new Ingrediente("gin", "1/4", 3.2);
        Ingrediente ingr2 = new Ingrediente("vodka", "3/5", 4.0);
        Ingrediente ingr3 = new Ingrediente("rum", "1/2", 0.5);
        
        Preparazione prep = new Preparazione(Preparazione.Metodo.Build, "asdfghjkl");
        prep.addVariante("qwertyuiop");
        Preparazione prep2 = new Preparazione(Preparazione.Metodo.Throwing, "mnbvcxzlkjh");
        prep2.addVariante("lpsjjfsdggc");
        prep2.addVariante("cuhciuchaehwe");
        
        Cocktail c1 = new Cocktail(1, "cocktail1", prep2, "coppa", Cocktail.Sapori.Dolce, "./img/01.png", "kfuhwekufhicbwube");
        c1.addIngrediente(ingr3);
        c1.addIngrediente(ingr);
        c1.addDecorazione("limone", "zknvuhvwie");
        
        Cocktail c2 = new Cocktail(2, "cocktail2", prep, "calice", Cocktail.Sapori.Aspro, "./img/02.png", "ckwubucgwcyewi");
        c2.addIngrediente(ingr);
        c2.addIngrediente(ingr2);
        c2.addDecorazione("ciliegia", null);
        
        Cocktail c3 = new Cocktail(3, "cocktail3", prep2, "calice", Cocktail.Sapori.Soave, "./img/03.png", "zcvoicvjofig<<<");
        c3.addIngrediente(ingr2);
        c3.addDecorazione("cetriolo", "vcjbfvisd");
        c3.addDecorazione("limone", null);
        
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
            cocktailsFound = (ArrayList<Cocktail>) list.stream().filter(item -> item.getTipologia() == Cocktail.Sapori.valueOf(category)).collect(Collectors.toList());
            return cocktailsFound;
        } catch(IllegalArgumentException e) {
            return cocktailsFound;
        }  
    }
    
    public ArrayList<Cocktail> getByIngredient(String ingr) {
        
        ArrayList<Cocktail> cocktailsFound = new ArrayList<Cocktail>();
        
        for(Cocktail c: list) {
            for(Ingrediente i: c.getIngredienti()) {
                if(i.getNome().equals(ingr))
                    cocktailsFound.add(c);
            }
        }
        
        return cocktailsFound;
    }
    
    public ArrayList<Cocktail> getByMethod(String method) {
        
        ArrayList<Cocktail> cocktailsFound = new ArrayList<Cocktail>();
        
        try {
            cocktailsFound = (ArrayList<Cocktail>) list.stream().filter(item -> item.getPreparazione().getNome() == Preparazione.Metodo.valueOf(method)).collect(Collectors.toList());
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
        
        if(cocktail.getTipologia() != null)
            cocktailFound.get().setTipologia(cocktail.getTipologia());
        
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
