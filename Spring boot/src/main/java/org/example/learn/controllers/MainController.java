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
        return data.getJdbcTemplate().queryForList("SELECT * FROM public.contacts");
    }
}
