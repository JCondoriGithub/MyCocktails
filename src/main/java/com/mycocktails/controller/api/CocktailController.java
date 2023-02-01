package com.mycocktails.controller.api;

import com.mycocktails.model.Cocktail;
import com.mycocktails.service.CocktailService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CocktailController {
    
    @Autowired
    private CocktailService cocktailservice;

    public CocktailController() {
    }
    
    @RequestMapping("/api/cocktails")
    public ArrayList<Cocktail> getAll() {
        return cocktailservice.getAll();
    }
    
    @RequestMapping("/api/cocktails/{category}")
    public ArrayList<Cocktail> getByCategory(@PathVariable String category) {
        return cocktailservice.getByCategory(category);
    }
}
