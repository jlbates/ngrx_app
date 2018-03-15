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
var core_1 = require("@angular/core");
var TodoListItemComponent = (function () {
    function TodoListItemComponent() {
        this.created = new core_1.EventEmitter();
        this.deleted = new core_1.EventEmitter();
        this.edited = new core_1.EventEmitter();
        this.completed = new core_1.EventEmitter();
    }
    TodoListItemComponent.prototype.ngOnInit = function () {
        console.log(this.todo);
    };
    TodoListItemComponent.prototype.createTodo = function (todo) {
        console.log(todo);
        this.created.emit(todo);
    };
    TodoListItemComponent.prototype.editTodo = function (todo) {
        this.todo.editing = !this.todo.editing;
    };
    TodoListItemComponent.prototype.completeTodo = function (todo) {
        this.completed.emit(todo);
    };
    TodoListItemComponent.prototype.editTodoSubmit = function (todo) {
        this.edited.emit(todo);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "todo", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "created", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "deleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "edited", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TodoListItemComponent.prototype, "completed", void 0);
    TodoListItemComponent = __decorate([
        core_1.Component({
            selector: 'app-todo-list-item',
            templateUrl: './todo-list-item.component.html',
            styleUrls: ['./todo-list-item.component.scss'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());
exports.TodoListItemComponent = TodoListItemComponent;
//# sourceMappingURL=todo-list-item.component.js.map