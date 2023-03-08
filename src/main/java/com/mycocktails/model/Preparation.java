package com.mycocktails.model;

import java.util.LinkedHashSet;
import java.util.Set;

import com.mycocktails.enums.Method;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class Preparation {

	private int id;
    private Method name;
    private String prepDefault;
    private Set<String> variants;

    public Preparation(Method name, String prepDefault) {
        this.name = name;
        this.prepDefault = prepDefault;
        this.variants = new LinkedHashSet();
    }

    public void addVariant(String variant) {
        this.variants.add(variant);
    }
    
}
