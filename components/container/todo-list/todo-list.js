var tpl = require('./todo-list.html');
var controller = require('./todo-list.controller.js');
var todoListComponent = {
    scope: false,
    template: tpl,
    restrict: 'E',
    controller: controller,
    controllerAs: 'todoList'
}
module.exports = function() { return todoListComponent };