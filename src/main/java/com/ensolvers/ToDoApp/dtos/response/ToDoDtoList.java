package com.ensolvers.ToDoApp.dtos.response;


import com.ensolvers.ToDoApp.dtos.request.ToDoDto;
import com.ensolvers.ToDoApp.models.ToDo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoDtoList {
    private List<ToDoDtoResponse> toDoList;

    public static ToDoDtoList fromToDoList(List<ToDo> toDoList) {
        return ToDoDtoList.builder()
                .toDoList(toDoList.stream()
                        .map(ToDoDtoResponse::fromToDo)
                        .collect(Collectors.toList()))
                .build();
    }
}
