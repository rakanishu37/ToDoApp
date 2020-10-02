import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  @Input() public readonly complete: boolean;
  @Input() public readonly title: string;
  @Output() public readonly onClickCheckbox = new EventEmitter<MouseEvent>();
  @Output() public readonly onClickEdit = new EventEmitter<Event>();
  @Output() public readonly onClickDelete = new EventEmitter<Event>();

  public inputCheckboxHandler(event: MouseEvent) {
    event.preventDefault();
    this.onClickCheckbox.emit(event);
  }

  public editHandler(event: Event) {
    this.onClickEdit.emit(event);
  }

  public deleteHandler(event: Event) {
    this.onClickDelete.emit(event);
  }
}
