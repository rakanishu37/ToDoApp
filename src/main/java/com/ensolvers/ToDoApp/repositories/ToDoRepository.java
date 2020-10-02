package com.ensolvers.ToDoApp.repositories;

import com.ensolvers.ToDoApp.models.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<ToDo, Integer> {
}
