package com.example.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
@RequestMapping("/app")
public class HomeController {
    @GetMapping("home")
    public String homePage(){
        return "demo";
    }

    @GetMapping("vue/page*")
    public String vuePage(){
        return "forward:/index.html";
    }

    @ResponseBody
    @GetMapping
    public String hello(){
        log.info("有進來");
        return "hello";
    }
}
