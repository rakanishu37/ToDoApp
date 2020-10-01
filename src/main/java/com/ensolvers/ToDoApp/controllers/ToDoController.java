package com.ensolvers.ToDoApp.controllers;

import com.ensolvers.ToDoApp.dtos.request.ToDoDto;
import com.ensolvers.ToDoApp.dtos.response.ToDoDtoList;
import com.ensolvers.ToDoApp.dtos.response.ToDoDtoResponse;
import com.ensolvers.ToDoApp.models.ToDo;
import com.ensolvers.ToDoApp.services.ToDoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/todo")
@RequiredArgsConstructor
public class ToDoController {
    private final ToDoService toDoService;


    @GetMapping("")
    public ResponseEntity<ToDoDtoList> getAllTodo() {
        List<ToDo> toDos = toDoService.getAllToDo();
        return !toDos.isEmpty()
                ? ResponseEntity.ok(ToDoDtoList.fromToDoList(toDos))
                : ResponseEntity.status(HttpStatus.OK)
                    .body(ToDoDtoList.builder()
                        .toDos(new ArrayList<ToDoDtoResponse>()).build());
    }

    @PostMapping("")
    public ResponseEntity<ToDoDtoResponse> createToDo(@Valid @RequestBody ToDoDto toDoDto) {
        ToDo toDo = toDoService.createToDo(toDoDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(ToDoDtoResponse.fromToDo(toDo));
    }

    @PutMapping("/{idToDo}")
    public ResponseEntity<ToDoDtoResponse> updateToDo(@PathVariable(name = "idToDo") Integer idToDo,
                                                      @Valid @RequestBody ToDoDto toDoDto) {
        ToDo toDo = toDoService.updateToDo(idToDo, toDoDto);
        return ResponseEntity.ok(ToDoDtoResponse.fromToDo(toDo));
    }

    @DeleteMapping("/{idToDo}")
    public ResponseEntity<ToDoDtoResponse> deleteToDoById(@PathVariable(name = "idToDo") Integer idToDo) {
        ToDo toDo = toDoService.deleteById(idToDo);
        return ResponseEntity.ok(ToDoDtoResponse.fromToDo(toDo));
    }


}
