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
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.api_url = 'http://localhost:3000';
        this.todoUrl = this.api_url + "/api/todos";
    }
    TodoService.prototype.createTodo = function (todo) {
        return this.http.post("" + this.todoUrl, todo);
    };
    TodoService.prototype.getToDos = function () {
        return this.http.get(this.todoUrl)
            .map(function (res) {
            return res['data'].docs;
        });
    };
    TodoService.prototype.editTodo = function (todo) {
        var editUrl = "" + this.todoUrl;
        return this.http.put(editUrl, todo);
    };
    TodoService.prototype.deleteTodo = function (id) {
        var deleteUrl = this.todoUrl + "/" + id;
        return this.http.delete(deleteUrl)
            .map(function (res) {
            return res;
        });
    };
    TodoService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map