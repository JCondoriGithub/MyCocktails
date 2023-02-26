package com.mycocktails.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    
    @RequestMapping("/")
    public String index() {
        return "home";
    }

    @RequestMapping("/create/cocktail")
    public String createCocktail() {
        return "createform";
    }
    
    @RequestMapping("/edit/cocktail")
    public String editCocktail() {
        return "editform";
    }
}
