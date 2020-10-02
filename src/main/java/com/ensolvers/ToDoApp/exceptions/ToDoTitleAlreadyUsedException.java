package com.ensolvers.ToDoApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "That title is already used")
public class ToDoTitleAlreadyUsedException extends RuntimeException {
    public ToDoTitleAlreadyUsedException() {
    }
}
