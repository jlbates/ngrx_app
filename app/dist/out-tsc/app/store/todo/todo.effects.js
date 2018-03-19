"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../../environments/environment");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/catch");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var effects_1 = require("@ngrx/effects");
var of_1 = require("rxjs/observable/of");
var todo_constants_1 = require("../../constants/todo/todo.constants");
var TodoActions = require("./todo.action");
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/common/http");
var httpOptions = {
    headers: new http_2.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var TodoEffects = (function () {
    function TodoEffects(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.GetTodos$ = this.actions$
            .ofType(todo_constants_1.TODOS.GET_TODOS)
            .mergeMap(function (action) {
            return _this.http.get(environment_1.environment.client.base_url + '/api/todos')
                .map(function (data) {
                return new TodoActions.GetTodosSuccess(data);
            })
                .catch(function () { return of_1.of(new TodoActions.GetTodoError()); });
        });
        this.createTodo$ = this.actions$
            .ofType(todo_constants_1.TODOS.CREATE_TODO)
            .mergeMap(function (action) {
            return _this.http.post(environment_1.environment.client.base_url + '/api/todos', action.payload, httpOptions)
                .map(function (data) {
                return new TodoActions.CreateTodoSuccess(__assign({}, data, { loading: false }));
            })
                .catch(function () { return of_1.of(new TodoActions.CreateTodoError()); });
        });
        this.deleteTodo$ = this.actions$
            .ofType(todo_constants_1.TODOS.DELETE_TODO)
            .mergeMap(function (action) {
            return _this.http.delete(environment_1.environment.client.base_url + '/api/todos/' + action.payload._id, httpOptions)
                .map(function (data) {
                return new TodoActions.DeleteTodoSuccess(__assign({}, data, { loading: false }));
            })
                .catch(function () { return of_1.of(new TodoActions.DeleteTodoError(action.payload)); });
        });
        this.updateTodo$ = this.actions$
            .ofType(todo_constants_1.TODOS.UPDATE_TODO)
            .mergeMap(function (action) {
            return _this.http.put(environment_1.environment.client.base_url + '/api/todos/' + action.payload._id, action.payload, httpOptions)
                .map(function (data) {
                return new TodoActions.UpdateTodoSuccess(action.payload);
            })
                .catch(function () { return of_1.of(new TodoActions.DeleteTodoError(action.payload)); });
        });
    }
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], TodoEffects.prototype, "GetTodos$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], TodoEffects.prototype, "createTodo$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], TodoEffects.prototype, "deleteTodo$", void 0);
    __decorate([
        effects_1.Effect(),
        __metadata("design:type", Observable_1.Observable)
    ], TodoEffects.prototype, "updateTodo$", void 0);
    TodoEffects = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            effects_1.Actions])
    ], TodoEffects);
    return TodoEffects;
}());
exports.TodoEffects = TodoEffects;
//# sourceMappingURL=todo.effects.js.map