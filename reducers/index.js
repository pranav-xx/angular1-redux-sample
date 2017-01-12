var combineReducers = require('redux').combineReducers;
var topMenuReducer = require('./top-menu.reducer');
var leftMenuReducer = require('./left-menu.reducer');
var loaderCountReducer = require('./loader-count.reducer');
var todosReducer = require('./todos/index');

module.exports = combineReducers({
    topMenu: topMenuReducer,
    leftMenu: leftMenuReducer,
    loaderCount: loaderCountReducer,
    todos: todosReducer
});