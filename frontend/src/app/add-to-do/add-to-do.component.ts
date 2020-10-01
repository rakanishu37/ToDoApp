import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  @Output() public readonly taskTitle = new EventEmitter<Event>();
  @Output() public readonly addToDo = new EventEmitter<Event>();

  public taskInputHandler(event: Event) {
    this.taskTitle.emit(event);
  }

  public addHandler(event: Event) {
    this.addToDo.emit(event);
  }
}
