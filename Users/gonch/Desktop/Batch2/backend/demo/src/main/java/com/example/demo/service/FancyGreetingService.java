package com.example.demo.service;
import com.example.demo.model.Greeting;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Qualifier;

@Service
@Qualifier("fancyGreetingService")
public class FancyGreetingService implements GreetingService {
    @Override
    public String greet(String name) {
        return "Greetings and salutations, " + name + "!";
    }

    @Override
    public Greeting getGreeting(String name) {
        return new Greeting(name, "Greetings and salutations, " + name + "!");
    }
}