"use strict";
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
var store_1 = require("@ngrx/store");
var core_1 = require("@angular/core");
var TodoAction = require("../../store/todo/todo.action");
var TodoListComponent = (function () {
    function TodoListComponent(store) {
        this.store = store;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.todoListState$ = this.store.select(function (state) { return state.todos; });
        this.store.dispatch(new TodoAction.GetTodos());
    };
    TodoListComponent.prototype.onCreate = function (todo) {
        console.log(todo);
        this.store.dispatch(new TodoAction.CreateTodo(todo));
    };
    TodoListComponent.prototype.onDelete = function (todo) {
        this.store.dispatch(new TodoAction.DeleteTodo(todo));
    };
    TodoListComponent.prototype.onEdit = function (todo) {
        this.store.dispatch(new TodoAction.UpdateTodo(todo));
    };
    TodoListComponent.prototype.completeTodo = function (todo) {
        this.store.dispatch(new TodoAction.CompleteTodo(todo));
    };
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'app-todo-list',
            templateUrl: './todo-list.component.html',
            styleUrls: ['./todo-list.component.scss']
        }),
        __metadata("design:paramtypes", [store_1.Store])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map