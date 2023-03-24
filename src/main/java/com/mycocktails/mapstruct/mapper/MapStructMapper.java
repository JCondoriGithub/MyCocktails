package com.mycocktails.mapstruct.mapper;

import org.mapstruct.*;

import com.mycocktails.model.*;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface MapStructMapper {

	Cocktail mapCocktail(Cocktail cocktail);
	
	Ingredient mapIngredient(Ingredient ingredient);
	
	Preparation mapPreparation(Preparation preparation);
	
    @Mapping(target = "id", ignore = true)
	void update(@MappingTarget Cocktail cocktailToUpdate, Cocktail cocktail);
}
