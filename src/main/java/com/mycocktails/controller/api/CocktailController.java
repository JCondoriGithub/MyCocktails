package com.mycocktails.controller.api;

import com.mycocktails.model.Cocktail;
import com.mycocktails.service.CocktailService;
import java.util.ArrayList;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@Slf4j
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
    
    @RequestMapping("/api/cocktails/{id}")
    public Cocktail getById(@PathVariable int id) {
        
        Optional<Cocktail> cocktailFound = cocktailservice.getByid(id);
        
        if(cocktailFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "l'elemento non è stato trovato");
        }
        
        return cocktailFound.get();
    }
    
    @RequestMapping("/api/cocktails/getbycategory/{category}")
    public ArrayList<Cocktail> getByTypology(@PathVariable String category) {
        
        ArrayList<Cocktail> cocktailsFound = cocktailservice.getByTypology(category);

        if(cocktailsFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "gli elementi non sono stati trovati");
        }
        
        return cocktailsFound;
    }
    
    @RequestMapping("/api/cocktails/getbyingredient/{ingredient}")
    public ArrayList<Cocktail> getByIngredient(@PathVariable String ingredient) {
        
        ArrayList<Cocktail> cocktailsFound = cocktailservice.getByIngredient(ingredient);

        if(cocktailsFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "gli elementi non sono stati trovati");
        }
            
        return cocktailsFound;
    }
    
    @RequestMapping("/api/cocktails/getbymethod/{method}")
    public ArrayList<Cocktail> getByMethod(@PathVariable String method) {
        
        ArrayList<Cocktail> cocktailsFound = cocktailservice.getByMethod(method);
        
        if(cocktailsFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "gli elementi non sono stati trovati");
        }
        
        return cocktailsFound;
    }
    
    @RequestMapping(value="/api/cocktails", method=RequestMethod.POST)
    public Cocktail create(@RequestBody Cocktail cocktail) {
        return cocktailservice.create(cocktail);
    }
    
    @RequestMapping(value="/api/cocktails/{id}", method=RequestMethod.PUT)
    public Cocktail update(@PathVariable int id, @RequestBody Cocktail cocktail) {
        
        Optional<Cocktail> cocktailFound = cocktailservice.update(id, cocktail);
        
	if(cocktailFound.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "l'elemento non è stato trovato");
	}
        return cocktailFound.get();
    }
    
    @RequestMapping(value="/api/cocktails/{id}", method=RequestMethod.DELETE)
    public void delete(@PathVariable int id) {
        
        boolean isDeleted = cocktailservice.delete(id);
        
        if(isDeleted == false){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "l'elemento non è stato trovato");
        }        
    }
}
