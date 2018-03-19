import {TodoState} from './todo.state';
import Todo from '../../models/todo.model';
import {Action} from '@ngrx/store';
import {TODOS} from '../../constants/todo/todo.constants';

export class GetTodos implements Action {
  readonly type = TODOS.GET_TODOS;
}

export class GetTodosSuccess implements Action {
  readonly type = TODOS.GET_TODOS_SUCCESS;

  constructor(public payload: TodoState[]) {
  }
}

export class GetTodosError implements Action {
  readonly type = TODOS.GET_TODOS_ERROR;
}


export class GetTodo implements Action {
  readonly type = TODOS.GET_TODO;

  constructor(payload: string) {
  }
}


export class GetTodoSuccess implements Action {
  readonly type = TODOS.GET_TODO_SUCCESS;

  constructor(public payload: Todo) {
  }
}


export class GetTodoError implements Action {
  readonly type = TODOS.GET_TODO_ERROR;
}

// Action for Creating TOdos
export class CreateTodo implements Action {
  readonly type = TODOS.CREATE_TODO;

  constructor(public payload: Todo) {
  }
}

export class CreateTodoSuccess implements Action {
  readonly type = TODOS.CREATE_TODO_SUCCESS;

  constructor(public payload: TodoState) {
  }
}

export class CreateTodoError implements Action {
  readonly type = TODOS.CREATE_TODO_ERROR;
}

export class UpdateTodo implements Action {
  readonly type = TODOS.UPDATE_TODO;

  constructor(public payload: TodoState) {
  }

}

export class UpdateTodoSuccess implements Action {
  readonly type = TODOS.UPDATE_TODO_SUCCESS;

  constructor(public payload: TodoState) {
  }

}

export class UpdateTodoError implements Action {
  readonly type = TODOS.UPDATE_TODO_ERROR;

  constructor(public payload: TodoState) {
  }

}

export class DeleteTodo implements Action {
  readonly type = TODOS.DELETE_TODO;

  constructor(public payload: TodoState) {
  }
}

export class DeleteTodoSuccess implements Action {
  readonly type = TODOS.DELETE_TODO_SUCCESS;

  constructor(public payload: TodoState) {
  }
}

export class DeleteTodoError implements Action {
  readonly type = TODOS.DELETE_TODO_ERROR;

  constructor(public payload: TodoState) {
  }
}

export class CompleteTodo implements Action {
  readonly type = TODOS.COMPLETE_TODO;

  constructor(public payload: TodoState) {
  }

}


export type All = GetTodo | GetTodoSuccess | GetTodoError |
  UpdateTodo | UpdateTodoSuccess | UpdateTodoError |
  GetTodos | GetTodosSuccess | GetTodosError |
  CreateTodo | CreateTodoSuccess | CreateTodoError |
  DeleteTodo | DeleteTodoSuccess | DeleteTodoError |
  CompleteTodo;
