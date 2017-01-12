var initialState = [];
var todoConstants = require('../../core/constants').todos;

function todos(state, action) {
    switch (action.type) {
        case todoConstants.TODO_FETCH_COMPLETE:
            return action.data.list;
        case todoConstants.UPDATE_TODO:
            var newState = state.slice();
            return state.map(function(currentItem) {
                if (currentItem.id === action.data.id) {
                    currentItem.text = action.data.text;
                }
                return currentItem;
            });
        default:
            return state || initialState;
    }
}

module.exports = todos;