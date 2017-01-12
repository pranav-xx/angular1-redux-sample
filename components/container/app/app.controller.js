function controller($ngRedux, menuActionCreator) {
    this.redux = $ngRedux;
    this.menuActionCreator = menuActionCreator;
}

controller.prototype.$onInit = function() {
    this.unsubscribe = this.redux.connect(null, this.menuActionCreator)(this);
    this.loadMenu();
}
controller.prototype.$onDestroy = function() {
    this.unsubscribe();
}

module.exports = controller;