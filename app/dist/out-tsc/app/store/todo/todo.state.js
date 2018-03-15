"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeTodoState = function () {
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
exports.intializeTodoListState = function () {
    return {
        loading: false,
        pending: 0,
    };
};
//# sourceMappingURL=todo.state.js.map