package com.example.demo.service;

import com.example.demo.model.Greeting;
import org.springframework.stereotype.Service;

@Service
public class SimpleGreetingService implements GreetingService {
    @Override
    public String greet(String name) {
        return "Hello, " + name + "!";
    }

    @Override
    public Greeting getGreeting(String name) {
        return new Greeting(name);
    }
}
