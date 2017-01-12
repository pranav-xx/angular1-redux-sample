var menuConstants = require('../core/constants').menu;

function menuActionCreator(menuService) {
    var menuService = menuService;
    var loadMenu = function() {
        return function(dispatch) {
            menuService.getMenu().then(onMenuLoaded.bind(this, dispatch))
        }
    }
    var getMenuFetchCompleteAction = function(menuItemsServerData) {
        return {
            type: menuConstants.MENU_FETCH_COMPLETE,
            data: menuItemsServerData
        }
    }
    var onMenuLoaded = function(dispatch, menuItemsServerData) {
        dispatch(getMenuFetchCompleteAction(menuItemsServerData.data));
    }
    return {
        loadMenu: loadMenu
    }
}

module.exports = menuActionCreator