package com.mycocktails.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mycocktails.model.Cocktail;

@Service
public class DbCocktailService implements InterfaceCocktailService {

	@Override
	public ArrayList<Cocktail> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Cocktail> getByid(int id) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public ArrayList<Cocktail> getByTypology(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Cocktail> getByIngredient(String ingr) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ArrayList<Cocktail> getByMethod(String method) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Cocktail create(Cocktail cocktail) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Cocktail> update(int id, Cocktail cocktail) {
		// TODO Auto-generated method stub
		return Optional.empty();
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
