var todoConstants = require('../core/constants').todos;

function todoActionCreator(todoService) {
    function getTodosFetchCompleteAction(todos) {
        return {
            type: todoConstants.TODO_FETCH_COMPLETE,
            data: todos
        }
    }

    function onTodosFetchComplete(dispatch, todos) {
        dispatch(getTodosFetchCompleteAction(todos.data));
    }

    function getTodos() {
        return function(dispatch) {
            todoService.getTodos().then(onTodosFetchComplete.bind(this, dispatch));
        }
    }

    function setTodoSelected(todoItem) {
        return {
            type: todoConstants.SET_TODO_SELECTED,
            data: todoItem
        }
    }

    function resetSelectedTodo() {
        return {
            type: todoConstants.RESET_SELECTED_TODO
        }
    }

    function updateTodo(newTodo) {
        return {
            type: todoConstants.UPDATE_TODO,
            data: newTodo
        }
    }

    return {
        getTodos: getTodos,
        setTodoSelected: setTodoSelected,
        resetSelectedTodo: resetSelectedTodo,
        updateTodo: updateTodo
    }
}

module.exports = todoActionCreator