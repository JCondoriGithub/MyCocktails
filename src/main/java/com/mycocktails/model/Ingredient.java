package com.mycocktails.model;

public class Ingredient {

    private String name;
    private String oz;
    private Double cl;

    public Ingredient() {
    }
    
    public Ingredient(String name, String oz, Double cl) {
        this.name = name;
        this.oz = oz;
        this.cl = cl;
    }

    public String getName() {
        return name;
    }

    public String getOz() {
        return oz;
    }

    public Double getCl() {
        return cl;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOz(String oz) {
        this.oz = oz;
    }

    public void setCl(Double cl) {
        this.cl = cl;
    }

    @Override
    public String toString() {
        return "Ingredient{" + "name=" + name + ", oz=" + oz + ", cl=" + cl + '}';
    }

}
