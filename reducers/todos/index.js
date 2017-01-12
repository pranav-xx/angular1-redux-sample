var combineReducers = require('redux').combineReducers;
var selectedToDoReducer = require('./selected-todo.reducer');
var todosReducer = require('./todos.reducer');
var todosPaginatorReducer = require('./todos-paginator.reducer');

module.exports = combineReducers({
    selectedToDo: selectedToDoReducer,
    list: todosReducer,
    paginator: todosPaginatorReducer
});