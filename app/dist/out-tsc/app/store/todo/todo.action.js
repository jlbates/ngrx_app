"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_constants_1 = require("../../constants/todo/todo.constants");
var GetTodos = (function () {
    function GetTodos() {
        this.type = todo_constants_1.TODOS.GET_TODOS;
    }
    return GetTodos;
}());
exports.GetTodos = GetTodos;
var GetTodosSuccess = (function () {
    function GetTodosSuccess(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.GET_TODOS_SUCCESS;
    }
    return GetTodosSuccess;
}());
exports.GetTodosSuccess = GetTodosSuccess;
var GetTodosError = (function () {
    function GetTodosError() {
        this.type = todo_constants_1.TODOS.GET_TODOS_ERROR;
    }
    return GetTodosError;
}());
exports.GetTodosError = GetTodosError;
var GetTodo = (function () {
    function GetTodo(payload) {
        this.type = todo_constants_1.TODOS.GET_TODO;
    }
    return GetTodo;
}());
exports.GetTodo = GetTodo;
var GetTodoSuccess = (function () {
    function GetTodoSuccess(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.GET_TODO_SUCCESS;
    }
    return GetTodoSuccess;
}());
exports.GetTodoSuccess = GetTodoSuccess;
var GetTodoError = (function () {
    function GetTodoError() {
        this.type = todo_constants_1.TODOS.GET_TODO_ERROR;
    }
    return GetTodoError;
}());
exports.GetTodoError = GetTodoError;
// Action for Creating TOdos
var CreateTodo = (function () {
    function CreateTodo(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.CREATE_TODO;
    }
    return CreateTodo;
}());
exports.CreateTodo = CreateTodo;
var CreateTodoSuccess = (function () {
    function CreateTodoSuccess(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.CREATE_TODO_SUCCESS;
    }
    return CreateTodoSuccess;
}());
exports.CreateTodoSuccess = CreateTodoSuccess;
var CreateTodoError = (function () {
    function CreateTodoError() {
        this.type = todo_constants_1.TODOS.CREATE_TODO_ERROR;
    }
    return CreateTodoError;
}());
exports.CreateTodoError = CreateTodoError;
var UpdateTodo = (function () {
    function UpdateTodo(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.UPDATE_TODO;
    }
    return UpdateTodo;
}());
exports.UpdateTodo = UpdateTodo;
var UpdateTodoSuccess = (function () {
    function UpdateTodoSuccess(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.UPDATE_TODO_SUCCESS;
        console.log(this.payload);
    }
    return UpdateTodoSuccess;
}());
exports.UpdateTodoSuccess = UpdateTodoSuccess;
var UpdateTodoError = (function () {
    function UpdateTodoError(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.UPDATE_TODO_ERROR;
    }
    return UpdateTodoError;
}());
exports.UpdateTodoError = UpdateTodoError;
var DeleteTodo = (function () {
    function DeleteTodo(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.DELETE_TODO;
    }
    return DeleteTodo;
}());
exports.DeleteTodo = DeleteTodo;
var DeleteTodoSuccess = (function () {
    function DeleteTodoSuccess(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.DELETE_TODO_SUCCESS;
    }
    return DeleteTodoSuccess;
}());
exports.DeleteTodoSuccess = DeleteTodoSuccess;
var DeleteTodoError = (function () {
    function DeleteTodoError(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.DELETE_TODO_ERROR;
    }
    return DeleteTodoError;
}());
exports.DeleteTodoError = DeleteTodoError;
var CompleteTodo = (function () {
    function CompleteTodo(payload) {
        this.payload = payload;
        this.type = todo_constants_1.TODOS.COMPLETE_TODO;
    }
    return CompleteTodo;
}());
exports.CompleteTodo = CompleteTodo;
//# sourceMappingURL=todo.action.js.map