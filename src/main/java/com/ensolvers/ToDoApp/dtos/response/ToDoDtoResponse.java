package com.ensolvers.ToDoApp.dtos.response;

import com.ensolvers.ToDoApp.dtos.request.ToDoDto;
import com.ensolvers.ToDoApp.models.ToDo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoDtoResponse {
    private Integer id;
    private String title;
    private Boolean isMarked;

    public static ToDoDtoResponse fromToDo(ToDo todo) {
        return ToDoDtoResponse.builder()
                .id(todo.getId())
                .title(todo.getTitle())
                .isMarked(todo.getIsMarked())
                .build();
    }
}
