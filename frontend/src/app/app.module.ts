import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoService } from 'src/services/to-do.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AddToDoComponent,
    EditToDoComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
