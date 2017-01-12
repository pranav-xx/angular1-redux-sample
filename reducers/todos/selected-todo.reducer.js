var initialState = {};
var todoConstants = require('../../core/constants').todos;

function selectedToDoReducer(state, action) {
    switch (action.type) {
        case todoConstants.SET_TODO_SELECTED:
            return Object.assign({}, action.data);
        case todoConstants.RESET_SELECTED_TODO:
            return initialState;
        default:
            return state || initialState;
    }
}

module.exports = selectedToDoReducer;