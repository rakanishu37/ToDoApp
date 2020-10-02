import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css'],
})
export class EditToDoComponent {
  @Input() public readonly task: String;
  @Output() public readonly onClickSave = new EventEmitter<MouseEvent>();
  @Output() public readonly onClickCancel = new EventEmitter<MouseEvent>();
  @Output() public readonly onChangeTitle = new EventEmitter<InputEvent>();
  
  public get taskTitle() {
    return `Editing Task "${this.task}"`;
  }

  public taskInputHandler(event: InputEvent) {
    this.onChangeTitle.emit(event);
  }

  public saveHandler(event: MouseEvent) {
    this.onClickSave.emit(event);
  }

  public cancelHandler(event: MouseEvent) {
    this.onClickCancel.emit(event);
  }
}
