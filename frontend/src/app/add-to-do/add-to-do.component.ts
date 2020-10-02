import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {  
  @Output() public readonly onChangeTitle = new EventEmitter<InputEvent>();
  @Output() public readonly onClickAdd = new EventEmitter<Event>();

  public taskInputHandler(event: InputEvent) {
    this.onChangeTitle.emit(event);
  }

  public addHandler(event: Event) {
    this.onClickAdd.emit(event);
  }
}
