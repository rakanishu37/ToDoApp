import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  
  @Input() public readonly title: string;
  @Output() public readonly checkboxValue = new EventEmitter<MouseEvent>();  
  @Output() public readonly edit = new EventEmitter<Event>();  
  @Output() public readonly delete = new EventEmitter<Event>();

  public inputCheckboxHandler(event: MouseEvent) {
    this.checkboxValue.emit(event);
  }

  public editHandler(event: Event) {
    this.edit.emit(event);
  }

  public deleteHandler(event: Event) {
    this.delete.emit(event);
  }
}