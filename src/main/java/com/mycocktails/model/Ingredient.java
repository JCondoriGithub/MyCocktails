package com.mycocktails.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Ingredient {

	private int id;
    private String name;
    private String oz;
    private Double cl;
    
    public Ingredient(String name, String oz, Double cl) {
        this.name = name;
        this.oz = oz;
        this.cl = cl;
    }

}
