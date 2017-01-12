var controller = function($ngRedux) {
    this.redux = $ngRedux;
}

controller.prototype.$onInit = function() {
    this.unsubscribe = this.redux.connect(this.mapStateToThis)(this);
    this.displayTextField = 'displayText';
    this.valueField = 'value';
    this.childrenField = 'children'
}

controller.prototype.mapStateToThis = function(state) {
    return {
        leftMenuItems: state.leftMenu
    }
}

controller.prototype.$onDestroy = function() {
    this.unsubscribe();
}

module.exports = controller;