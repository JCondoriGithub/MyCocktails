package com.mycocktails.service;

import com.mycocktails.model.Cocktail;
import java.util.ArrayList;
import org.springframework.stereotype.Service;

@Service
public class CocktailService {

    private ArrayList<Cocktail> list = new ArrayList<Cocktail>();
    private int lastId;
    
    public CocktailService() {
        
        list.add(new Cocktail(1, "amaro", "./img/01.png"));
        list.add(new Cocktail(2, "dolce", "./img/02.png"));
        list.add(new Cocktail(3, "dolce", "./img/03.png"));
        
        lastId = 3;
    }
    
    public ArrayList<Cocktail> getAll() {
        return list;
    }
    
    public ArrayList<Cocktail> getByCategory(String category) {
        
        ArrayList<Cocktail> cocktailsFound = new ArrayList<Cocktail>();
        
        for(Cocktail c: list) {
            if(c.getTipologia().equals(category))
                cocktailsFound.add(c);
        }
        return cocktailsFound;
    }
}
