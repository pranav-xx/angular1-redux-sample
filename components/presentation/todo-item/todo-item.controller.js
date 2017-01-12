function todoItemController() {}
todoItemController.prototype.$onChanges = function(changedScope) {
    if (changedScope.selectedTodo && changedScope.selectedTodo.currentValue && changedScope.selectedTodo.currentValue.id !== undefined && changedScope.selectedTodo.currentValue.id !== changedScope.selectedTodo.previousValue.id) {
        document.getElementById('todo-text-' + changedScope.selectedTodo.currentValue.id).focus();
    }
}
todoItemController.prototype.selectedToDoChange = function(e) {
    var newTodoText = e.target.value;
    console.log("blur");
    this.editComplete({ newTodo: Object.assign(this.selectedTodo, { text: e.target.value }) });
}
module.exports = todoItemController;