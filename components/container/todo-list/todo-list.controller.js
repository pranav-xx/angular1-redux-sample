function controller($ngRedux, todoActionCreator) {
    this.redux = $ngRedux;
    this.todoActionCreator = todoActionCreator;
}

controller.prototype.$onInit = function() {
    this.unsubscribe = this.redux.connect(this.mapStateToThis, this.todoActionCreator)(this);
    this.getTodos()
}

controller.prototype.mapStateToThis = function(state) {
    return {
        list: state.todos.list,
        paginator: state.todos.paginator,
        selectedTodo: state.todos.selectedToDo
    }
}

controller.prototype.setSelected = function(currentItem) {
    this.setTodoSelected(currentItem);
}

controller.prototype.isTodoSelected = function(sourceId, targetId) {
    return sourceId === targetId;
}

controller.prototype.editComplete = function(newTodo) {
    this.updateTodo(newTodo);
    this.resetSelectedTodo();
}

controller.prototype.$onDestroy = function() {
    this.unsubscribe();
}


module.exports = controller;