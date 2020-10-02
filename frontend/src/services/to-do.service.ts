import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import ToDo from 'src/types/ToDo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private readonly baseApiUrl = 'http://localhost:8080/api';
  private readonly headers = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(private httpClient: HttpClient) {}

  private get todoListUrl() {
    return `${this.baseApiUrl}/todo`;
  }

  private get postTodoUrl() {
    return `${this.baseApiUrl}/todo`;
  }

  //For both put & delete http requests
  private getModifyTodoUrl(id: number) {
    return `${this.baseApiUrl}/todo/${id}`;
  }

  public getToDoList() {
    return this.httpClient.get<{ toDoList: ToDo[] }>(this.todoListUrl);
  }

  public createToDo(title: string) {
    return this.httpClient.post<ToDo>(this.postTodoUrl, {
      title,
      complete: false,
    });
  }

  public editToDo(toDo: ToDo) {
    return this.httpClient
      .put<ToDo>(this.getModifyTodoUrl(toDo.id), toDo, {
        headers: this.headers,
      })
      .pipe(catchError(this.error));
  }

  public deleteToDo(id: number) {
    return this.httpClient
      .delete<ToDo>(this.getModifyTodoUrl(id))
      .pipe(catchError(this.error));
  }

  // Handle Errors
  private error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
