var initialState = [];
var todoConstants = require('../../core/constants');

function todosPaginator(state, action) {
    switch (action.type) {
        case todoConstants.TODO_FETCH_COMPLETE:
            return action.paginator
        default:
            return state || initialState;
    }
}

module.exports = todosPaginator;