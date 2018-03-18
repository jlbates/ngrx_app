"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var todo_model_1 = require("../../models/todo.model");
var todo_state_1 = require("./todo.state");
var todo_constants_1 = require("../../constants/todo/todo.constants");
var defaultTodoStates = [
    __assign({}, todo_model_1.default.generateMockTodo(), todo_state_1.initializeTodoState())
];
var defaultState = {
    todos: defaultTodoStates,
    loading: false,
    pending: 0
};
function modifyTodoState(state, todo, modifications) {
    return __assign({}, state, { todos: state.todos.map(function (t) {
            if (t._id === todo._id) {
                return __assign({}, t, todo, modifications);
            }
            else {
                return t;
            }
        }) });
}
function TodoReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case todo_constants_1.TODOS.GET_TODOS: {
            return __assign({}, state, { loaded: false, loading: true });
        }
        case todo_constants_1.TODOS.GET_TODOS_SUCCESS: {
            return __assign({}, state, { todos: action.payload.concat([defaultTodoStates[0]]), loading: false });
        }
        case todo_constants_1.TODOS.GET_TODOS_ERROR: {
            return __assign({}, state, { todos: state.todos.concat([action.payload]) });
        }
        case todo_constants_1.TODOS.DELETE_TODO: {
            return __assign({}, state, state.todos.splice(state.todos.indexOf(action.payload), 1));
        }
        case todo_constants_1.TODOS.DELETE_TODO_SUCCESS: {
            return state;
        }
        case todo_constants_1.TODOS.DELETE_TODO_ERROR: {
            return __assign({}, state, { todos: state.todos.concat([action.payload]) });
        }
        case todo_constants_1.TODOS.CREATE_TODO: {
            return __assign({}, state, { todos: state.todos.map(function (t) {
                    // Set the loading property on the created item
                    if (t._id === action.payload._id) {
                        t.loading = true;
                    }
                    return t;
                }) });
        }
        case todo_constants_1.TODOS.CREATE_TODO_SUCCESS: {
            console.log('Create success');
            return __assign({}, state, { todos: state.todos.filter(function (t) {
                    return t._id !== 'new';
                }).concat([__assign({}, action.payload, { edited: true }), __assign({}, todo_model_1.default.generateMockTodo(), todo_state_1.initializeTodoState())]) });
        }
        case todo_constants_1.TODOS.UPDATE_TODO: {
            return __assign({}, state, { todos: state.todos.map(function (t) {
                    if (t._id === action.payload._id) {
                        t.loading = true;
                    }
                    return t;
                }) });
        }
        case todo_constants_1.TODOS.UPDATE_TODO_SUCCESS: {
            return modifyTodoState(state, action.payload, {});
        }
        case todo_constants_1.TODOS.UPDATE_TODO_ERROR: {
            return __assign({}, state, { todos: state.todos.map(function (t) {
                    if (t._id === action.payload._id) {
                        t.error = true;
                    }
                    return t;
                }) });
        }
        case todo_constants_1.TODOS.COMPLETE_TODO: {
            return __assign({}, state, { todos: state.todos.map(function (t) {
                    if (t._id === action.payload._id) {
                        t.status = 'done';
                    }
                    return t;
                }) });
        }
        default: {
            return state;
        }
    }
}
exports.TodoReducer = TodoReducer;
//# sourceMappingURL=todo.reducers.js.map