import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-edit-to-do',
  templateUrl: './edit-to-do.component.html',
  styleUrls: ['./edit-to-do.component.css']
})
export class EditToDoComponent {

  @Input() public readonly task: String;

  public get taskTitle() {
    return `Editing Task "${this.task}"`;
  }
}
