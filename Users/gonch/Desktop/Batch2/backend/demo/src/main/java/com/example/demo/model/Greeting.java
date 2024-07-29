package com.example.demo.model;

import java.time.LocalDateTime;

public class Greeting {
    private String name;
    private String message;
    private LocalDateTime timestamp;

    public Greeting(String name) {
        this(name, "Hello, " + name + "!");
    }

    public Greeting(String name, String message) {
        this.name = name;
        this.message = message;
        this.timestamp = LocalDateTime.now();
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public LocalDateTime getTimestamp() { return timestamp; }
}