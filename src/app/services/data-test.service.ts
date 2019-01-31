import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class DataTestService {


  constructor(private http: HttpClient) { }

  getDummyData(): Observable<TodoItem> {
    return this.http.get<TodoItem>('https://jsonplaceholder.typicode.com/todos/1');
  }
}
