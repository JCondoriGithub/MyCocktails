package com.mycocktails.service;

import java.util.ArrayList;
import java.util.Optional;

import com.mycocktails.model.Cocktail;

public interface InterfaceCocktailService {

	public ArrayList<Cocktail> getAll();
	
	public Optional<Cocktail> getByid(int id);
	
	public ArrayList<Cocktail> getByTypology(String category);
	
	public ArrayList<Cocktail> getByIngredient(String ingr);
	
	public ArrayList<Cocktail> getByMethod(String method);
	
	public Cocktail create(Cocktail cocktail);
	
	public Optional<Cocktail> update(int id, Cocktail cocktail);
	
	public boolean delete(int id);
}
