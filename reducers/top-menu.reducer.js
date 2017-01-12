var _ = require('lodash');
var menuConsts = require('../core/constants').menu;

var initialState = [];

function topMenuReducer(state, action) {
    switch (action.type) {
        case menuConsts.MENU_FETCH_COMPLETE:
            var topMenuItems = _.filter(action.data, function(menuItem) {
                return menuItem.type === menuConsts.TOP_MENU_TYPE
            })
            return topMenuItems;
        default:
            return state || initialState;
    }
}
module.exports = topMenuReducer;