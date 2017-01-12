var tpl = require('./todo-item.html');
var controller = require('./todo-item.controller');
var todoItem = {
    restrict: 'E',
    template: tpl,
    bindings: {
        item: '<',
        selectedTodo: '<',
        startEditing: '&',
        editComplete: '&',
        markCompleted: '&'
    },
    controller: controller,
    controllerAs: 'todoItem'
}

module.exports = todoItem;