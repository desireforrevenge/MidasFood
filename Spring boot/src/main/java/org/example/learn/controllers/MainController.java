package org.example.learn.controllers;

import org.example.learn.database.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
public class MainController {
    private final Data data;
    @Autowired
    public MainController(Data data) {
        this.data = data;
    }

    @GetMapping("/api/contacts")
    public List<Map<String, Object>> contacts() {
        System.out.println("http://localhost:8080/api/contacts");
        return data.getJdbcTemplate().queryForList("SELECT * FROM public.contacts");
    }

    @GetMapping("/api/main_dish")
    public List<Map<String, Object>> main_dish() {
        System.out.println("http://localhost:8080/api/main_dish");
        //Что бы сделать главным блюдом любое другое - нужно поменять id на 1.
        return data.getJdbcTemplate().queryForList("SELECT name, description, cost, weight FROM public.products where id = 1");
    }

    @GetMapping("/api/second_main_dish")
    public List<Map<String, Object>> second_main_dish() {
        System.out.println("http://localhost:8080/api/second_main_dish");
        //Ситуация аналогична ситуации с главным блюдом. Нужно поменять id на 2 у нужного блюда.
        return data.getJdbcTemplate().queryForList("SELECT name, cost, weight FROM public.products where id = 2");
    }
}
