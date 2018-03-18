import Todo from '../../models/todo.model';
import {initializeTodoState, TodoListState, TodoState} from './todo.state';
import * as TodoActions from './todo.action';
import {TODOS} from '../../constants/todo/todo.constants';

export type Action = TodoActions.All;

const defaultTodoStates: TodoState[] = [
  {
    ...Todo.generateMockTodo(),
    ...initializeTodoState()
  }
];

const defaultState: TodoListState = {
  todos: defaultTodoStates,
  loading: false,
  pending: 0
};

function modifyTodoState(state, todo: TodoState, modifications): TodoListState {

  return {
    ...state,
    todos: state.todos.map(t => {
      if (t._id === todo._id) {
        return {...t, ...todo, ...modifications};
      } else {
        return t;
      }
    })
  };
}

export function TodoReducer(state = defaultState, action: Action) {

  switch (action.type) {
    case TODOS.GET_TODOS: {
      return {...state, loaded: false, loading: true};
    }

    case TODOS.GET_TODOS_SUCCESS: {
      return {...state, todos: [...(action as any).payload, defaultTodoStates[0]], loading: false};
    }

    case TODOS.GET_TODOS_ERROR: {

      return {...state, todos: [...state.todos, (action as any).payload]};
    }


    case TODOS.DELETE_TODO: {

      return {...state, ...state.todos.splice(state.todos.indexOf((action as any).payload), 1)};

    }


    case TODOS.DELETE_TODO_SUCCESS: {

      return state;
    }


    case TODOS.DELETE_TODO_ERROR: {

      return {...state, todos: [...state.todos, (action as any).payload]};
    }

    case TODOS.CREATE_TODO: {

      return {
        ...state,
        todos: state.todos.map(t => {
          // Set the loading property on the created item
          if (t._id === (action as any).payload._id) {
            t.loading = true;
          }
          return t;
        })
      };
    }

    case TODOS.CREATE_TODO_SUCCESS: {
      console.log('Create success');
      return {
        ...state,
        todos: [...state.todos.filter(t => {
          return t._id !== 'new';
        }),
          {...(action as any).payload, edited: true},
          {...Todo.generateMockTodo(), ...initializeTodoState()}]
      };
    }

    case TODOS.UPDATE_TODO: {

      return {
        ...state,
        todos: state.todos.map(t => {
          if (t._id === (action as any).payload._id) {
            t.loading = true;
          }

          return t;
        })
      };
    }

    case TODOS.UPDATE_TODO_SUCCESS: {

      return modifyTodoState(state, (action as any).payload, {});
    }


    case TODOS.UPDATE_TODO_ERROR: {

      return {
        ...state,
        todos: state.todos.map(t => {
          if (t._id === (action as any).payload._id) {
            t.error = true;
          }

          return t;
        })
      };

    }

    case TODOS.COMPLETE_TODO: {


      return {
        ...state,
        todos: state.todos.map(t => {
          if (t._id === (action as any).payload._id) {
            t.status = 'done';
          }
          return t;
        })
      };

    }

    default: {

      return state;
    }

  }

}





