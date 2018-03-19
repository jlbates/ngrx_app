import {TodoState} from './todo.state';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {of} from 'rxjs/observable/of';
import {TODOS} from '../../constants/todo/todo.constants';

import * as TodoActions from './todo.action';

import {HttpClient} from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class TodoEffects {

  constructor(private http: HttpClient,
              private actions$: Actions) {
  }

  @Effect()
  GetTodos$: Observable<Action> = this.actions$
    .ofType<TodoActions.GetTodos>(TODOS.GET_TODOS)
    .mergeMap(action =>
      this.http.get((environment as any).client.base_url + '/api/todos')
        .map((data: Response) => {
          return new TodoActions.GetTodosSuccess(<any>data as TodoState[]);
        })
        .catch(() => of(new TodoActions.GetTodoError()))
    );

  @Effect()
  createTodo$: Observable<Action> = this.actions$
    .ofType<TodoActions.CreateTodo>(TODOS.CREATE_TODO)
    .mergeMap(action =>
      this.http.post((environment as any).client.base_url + '/api/todos', action.payload, httpOptions)
        .map((data: Response) => {
          return new TodoActions.CreateTodoSuccess(<any>{...data, loading: false});
        })
        .catch(() => of(new TodoActions.CreateTodoError()))
    );

  @Effect()
  deleteTodo$: Observable<Action> = this.actions$
    .ofType<TodoActions.DeleteTodo>(TODOS.DELETE_TODO)
    .mergeMap(action =>
      this.http.delete((environment as any).client.base_url + '/api/todos/' + action.payload._id, httpOptions)
        .map((data: Response) => {
          return new TodoActions.DeleteTodoSuccess(<any>{...data, loading: false});
        })
        .catch(() => of(new TodoActions.DeleteTodoError(action.payload)))
    );

  @Effect()
  updateTodo$: Observable<Action> = this.actions$
    .ofType<TodoActions.UpdateTodo>(TODOS.UPDATE_TODO)
    .mergeMap(action =>
      this.http.put((environment as any).client.base_url + '/api/todos/' + action.payload._id, action.payload, httpOptions)
        .map((data: Response) => {
          return new TodoActions.UpdateTodoSuccess(action.payload);
        })
        .catch(() => of(new TodoActions.DeleteTodoError(action.payload)))
    );

}


