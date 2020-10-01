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

  private getTodoListUrl() {
    return `${this.baseApiUrl}/todo`;
  }

  //For both put & delete http requests
  private getModifyTodoUrl(id: number) {
    return `${this.baseApiUrl}/todo/${id}`;
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

  //public getToDos(): Observable<ToDo[]> {
  public getToDos(): Observable<any> {
    return this.httpClient.get(this.getTodoListUrl());
  }

  public createToDo(id: number, title: string): Observable<any> {
    return this.httpClient.post(this.getModifyTodoUrl(id), {title});
  }
  
  //public editToDo(id: Number, toDo: ToDo): Observable<ToDo> {
  public editToDo(id: number, toDo: ToDo): Observable<any> {
    return this.httpClient
      .put(this.getModifyTodoUrl(id), toDo, { headers: this.headers })
      .pipe(catchError(this.error));
  }

  public deleteToDo(id: number): Observable<any> {
    return this.httpClient
      .delete(this.getModifyTodoUrl(id))
      .pipe(catchError(this.error));
  }
}
