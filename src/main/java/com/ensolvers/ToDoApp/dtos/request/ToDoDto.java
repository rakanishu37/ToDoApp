package com.ensolvers.ToDoApp.dtos.request;


import com.ensolvers.ToDoApp.models.ToDo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ToDoDto {
    @NotBlank(message = "Title can't be empty")
    private String title;
    @NotNull
    private Boolean isMarked;
}
