package com.mycocktails.model;

import java.util.ArrayList;

public class Cocktail {

    int id;
    private String tipologia;
    private String urlImg;

    public Cocktail() {
    }

    public Cocktail(int id, String tipologia, String urlImg) {
        this.id = id;
        this.tipologia = tipologia;
        this.urlImg = urlImg;
    }

    public int getId() {
        return id;
    }

    public String getTipologia() {
        return tipologia;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTipologia(String tipologia) {
        this.tipologia = tipologia;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    @Override
    public String toString() {
        return "Cocktail{" + "id=" + id + ", tipologia=" + tipologia + ", urlImg=" + urlImg + '}';
    }

}
    