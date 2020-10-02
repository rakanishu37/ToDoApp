package com.ensolvers.ToDoApp.services;

import com.ensolvers.ToDoApp.dtos.request.ToDoDto;
import com.ensolvers.ToDoApp.exceptions.ToDoNotFoundException;
import com.ensolvers.ToDoApp.exceptions.ToDoTitleAlreadyUsedException;
import com.ensolvers.ToDoApp.models.ToDo;
import com.ensolvers.ToDoApp.repositories.ToDoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ToDoService {
    private final ToDoRepository toDoRepository;

    public ToDo createToDo(ToDoDto toDoDto) {
        LocalDateTime date = LocalDateTime.now();
        ToDo toDo;
        try {
            toDo = toDoRepository.save(
                    ToDo.builder()
                            .title(toDoDto.getTitle())
                            .complete(toDoDto.getComplete())
                            .createdAt(date.toLocalDate())
                            .updatedAt(date)
                            .build());
        } catch (DataIntegrityViolationException e) {
            throw new ToDoTitleAlreadyUsedException();
        }
        return toDo;
    }

    public List<ToDo> getAllToDo() {
        return toDoRepository.findAll();
    }

    public ToDo updateToDo(Integer id, ToDoDto toDoDto) {
        ToDo searchedToDo = toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);

        try {
            searchedToDo = toDoRepository.save(
                    ToDo.builder()
                            .id(searchedToDo.getId())
                            .title(toDoDto.getTitle())
                            .complete(toDoDto.getComplete())
                            .createdAt(searchedToDo.getCreatedAt())
                            .updatedAt(LocalDateTime.now())
                            .build());
        } catch (DataIntegrityViolationException e) {
            throw new ToDoTitleAlreadyUsedException();
        }
        return searchedToDo;
    }

    public ToDo deleteById(Integer id) {
        ToDo searchedToDo = toDoRepository.findById(id)
                .orElseThrow(ToDoNotFoundException::new);

        toDoRepository.deleteById(searchedToDo.getId());

        return searchedToDo;
    }
}
