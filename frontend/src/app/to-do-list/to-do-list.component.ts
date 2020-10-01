import { Component, EventEmitter, Input, Output } from '@angular/core';
import ToDo from 'src/types/ToDo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  @Input() public readonly toDoList: ToDo[] = [];
  @Output() public readonly checkboxValue:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() public readonly edit:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() public readonly delete:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public onCheckboxChange (event: MouseEvent) {
    this.checkboxValue.emit(event);
  }
    
  public onEdit(event: MouseEvent) {
    this.edit.emit(event);
  }

  public onDelete(event: MouseEvent) {
    this.delete.emit(event);
  }
}
