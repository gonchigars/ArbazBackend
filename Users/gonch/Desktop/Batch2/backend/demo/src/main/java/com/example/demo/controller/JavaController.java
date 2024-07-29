package com.example.demo.controller;

import com.example.demo.model.Greeting;
import com.example.demo.service.GreetingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@RestController
public class JavaController {

    private final GreetingService greetingService;

    @Autowired
    public JavaController(@Qualifier("fanvicyGreetingSerce") GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    @GetMapping("/hello")
    public String helloParam(@RequestParam(value = "name", defaultValue = "World") String name) {
        return greetingService.greet(name);
    }

    @GetMapping("/hello/{name}")
    public String helloPath(@PathVariable String name) {
        return greetingService.greet(name);
    }

    @PostMapping("/greet")
    public String greet(@RequestBody Greeting greeting) {
        return greetingService.greet(greeting.getName());
    }

    @GetMapping("/json-hello")
    public Greeting jsonHello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return greetingService.getGreeting(name);
    }
}
