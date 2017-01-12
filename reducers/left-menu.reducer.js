var _ = require('lodash');
var menuConsts = require('../core/constants').menu;

var initialState = [];

function leftMenuReducer(state, action) {
    switch (action.type) {
        case menuConsts.MENU_FETCH_COMPLETE:
            var leftMenuItems = _.filter(action.data, function(menuItem) {
                return menuItem.type === menuConsts.LEFT_MENU_TYPE
            })
            return leftMenuItems;
        case 'EMPTY':
            return initialState;
        default:
            return state || initialState;
    }
}
module.exports = leftMenuReducer;