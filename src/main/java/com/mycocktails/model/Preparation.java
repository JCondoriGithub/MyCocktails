package com.mycocktails.model;

import java.util.LinkedHashSet;
import java.util.Set;

public class Preparation {

    private Method name;
    private String prepDefault;
    private Set<String> variants;

    public Preparation() {
    }

    public Preparation(Method name, String prepDefault) {
        this.name = name;
        this.prepDefault = prepDefault;
        this.variants = new LinkedHashSet();
    }
    
    public static enum Method {
        Neat, Build, Build_Layer, Dry_shake, Stir_Strain, Shake_Strain, Throwing
    }

    public Method getName() {
        return name;
    }

    public String getPrepDefault() {
        return prepDefault;
    }

    public Set<String> getVariants() {
        return variants;
    }

    public void setName(Method name) {
        this.name = name;
    }

    public void setPrepDefault(String prepDefault) {
        this.prepDefault = prepDefault;
    }

    public void addVariant(String variant) {
        this.variants.add(variant);
    }

    @Override
    public String toString() {
        return "Preparation{" + "name=" + name + ", prepDefault=" + prepDefault + ", variants=" + variants + '}';
    }
    
}
