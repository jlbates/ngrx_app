import Todo from '../../models/todo.model';

export interface TodoState extends Todo {
  loading: boolean;
  editable: boolean;
  edited: boolean;
  editing: boolean;
  selected: boolean;
  refreshing: boolean;
  create: boolean;
  error: boolean;
}

export interface TodoListState {
  todos: TodoState[];
  loading: boolean;
  pending: number;
}

export const initializeTodoState = () => {
  return {
    loading: false,
    editable: true,
    edited: false,
    editing: false,
    selected: false,
    refreshing: false,
    create: true,
    error: false,
  };
};

export const intializeTodoListState = () => {
  return {
    loading: false,
    pending: 0,
  };
};
