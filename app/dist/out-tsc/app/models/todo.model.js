"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = (function () {
    function Todo() {
        this.title = '',
            this.description = '',
            this.date = new Date(),
            this.status = '';
    }
    Todo.generateMockTodo = function () {
        return {
            _id: 'new',
            title: '',
            description: '',
            date: new Date(),
            status: ''
        };
    };
    return Todo;
}());
exports.default = Todo;
//# sourceMappingURL=todo.model.js.map