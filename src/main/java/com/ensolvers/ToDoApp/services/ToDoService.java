package com.ensolvers.ToDoApp.services;

import com.ensolvers.ToDoApp.dtos.request.ToDoDto;
import com.ensolvers.ToDoApp.exceptions.ToDoNotFoundException;
import com.ensolvers.ToDoApp.models.ToDo;
import com.ensolvers.ToDoApp.repositories.ToDoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ToDoService {
    private final ToDoRepository toDoRepository;

    public ToDo createToDo(ToDoDto toDoDto) {
        LocalDateTime date = LocalDateTime.now();
        return toDoRepository.save(
                ToDo.builder()
                        .title(toDoDto.getTitle())
                        .isMarked(toDoDto.getIsMarked())
                        .createdAt(date.toLocalDate())
                        .updatedAt(date)
                        .build()
        );
    }

    public List<ToDo> getAllToDo() {
        return toDoRepository.findAll();
    }

    public ToDo updateToDo(Integer id, ToDoDto toDoDto) {
        ToDo searchedToDo = toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);

        return toDoRepository.save(
                ToDo.builder()
                        .id(searchedToDo.getId())
                        .title(toDoDto.getTitle())
                        .isMarked(toDoDto.getIsMarked())
                        .createdAt(searchedToDo.getCreatedAt())
                        .updatedAt(LocalDateTime.now())
                        .build());
    }

    public ToDo deleteById(Integer id) {
        ToDo searchedToDo = toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);

        toDoRepository.deleteById(searchedToDo.getId());

        return searchedToDo;
    }
}
