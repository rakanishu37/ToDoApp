import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToDoService } from 'src/services/to-do.service';
import ToDo from 'src/types/ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public title = 'To-Do List';
  public toDoList: ToDo[];
  public newTodoTitle: string;
  public isEditing: boolean = false;
  public previousToDo: ToDo;
  public editToDoTitle: string;
  constructor(private toDoService: ToDoService) {}

  public ngOnInit(): void {
    this.subscription = this.toDoService.getToDoList().subscribe((response) => {
      this.toDoList = response.toDoList;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  // ADD
  public onNewTitleChange(event: InputEvent) {
    this.newTodoTitle = (event.currentTarget as HTMLInputElement).value;
  }

  public onCreate() {
    this.toDoService
      .createToDo(this.newTodoTitle)
      .subscribe((response) => this.addToToDoList(response));
  }
  // ADD

  // EDIT
  public cancelEditing() {
    this.isEditing = false;
  }

  public onChangeToDoTitle(event: InputEvent) {
    this.editToDoTitle = (event.currentTarget as HTMLInputElement).value;
  }

  public onClickEditButton(toDo: ToDo) {
    this.isEditing = true;
    this.previousToDo = toDo;
  }

  public onClickSaveButton() {
    this.cancelEditing();
    this.updateToDo({...this.previousToDo, title: this.editToDoTitle});
  }
  // EDIT
  private updateToDoList(updatedTodo: ToDo) {
    this.toDoList = this.toDoList.map((currentToDo) =>
      currentToDo.id === updatedTodo.id ? updatedTodo : currentToDo
    );
  }

  private addToToDoList(toDo: ToDo) {
    this.toDoList = [...this.toDoList, toDo];
  }

  private removeFromToDoList(toDoRemoved: ToDo) {
    this.toDoList = this.toDoList.filter((toDo) => toDo.id !== toDoRemoved.id);
  }

  public updateCheckbox(toDo: ToDo) {
    const updatedToDo = { ...toDo, complete: !toDo.complete };
    this.updateToDo(updatedToDo);
  }

  private updateToDo(updatedToDo: ToDo) {
    this.updateToDoList(updatedToDo);
    this.toDoService
      .editToDo(updatedToDo)
      .subscribe((response) => this.updateToDoList(response));
  }

  public onDelete(id: number) {
    this.toDoService
      .deleteToDo(id)
      .subscribe((response) => this.removeFromToDoList(response));
  }
}
