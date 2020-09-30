package com.ensolvers.ToDoApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "To-Do not found")
public class ToDoNotFoundException extends RuntimeException{
    public ToDoNotFoundException() {
        super();
    }
}
