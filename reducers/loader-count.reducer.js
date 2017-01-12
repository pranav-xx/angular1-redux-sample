var _ = require('lodash');
var loaderConsts = require('../core/constants').loader;

var initialState = 0;

function loaderCountReducer(state, action) {
    switch (action.type) {
        case loaderConsts.INCREMENT_LOADER_COUNT:
            return ++state;
        case loaderConsts.DECREMENT_LOADER_COUNT:
            return --state;
        default:
            return state || initialState;
    }
}
module.exports = loaderCountReducer;