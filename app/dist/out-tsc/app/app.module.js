"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var TodoReducer = require("./store/todo/todo.reducers");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var todo_effects_1 = require("./store/todo/todo.effects");
var store_1 = require("@ngrx/store");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var todo_list_component_1 = require("./components/todo-list/todo-list.component");
var todo_list_item_component_1 = require("./components/todo-list-item/todo-list-item.component");
var todo_service_1 = require("./services/todo.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                todo_list_component_1.TodoListComponent,
                todo_list_item_component_1.TodoListItemComponent
            ],
            entryComponents: [
                todo_list_component_1.TodoListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                store_1.StoreModule.forRoot({ todos: TodoReducer.TodoReducer }),
                effects_1.EffectsModule.forRoot([todo_effects_1.TodoEffects])
            ],
            providers: [todo_service_1.TodoService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map