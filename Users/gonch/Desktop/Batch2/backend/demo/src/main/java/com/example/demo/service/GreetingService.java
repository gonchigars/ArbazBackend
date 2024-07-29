package com.example.demo.service;

import com.example.demo.model.Greeting;

public interface GreetingService {
    String greet(String name);
    Greeting getGreeting(String name);
}
