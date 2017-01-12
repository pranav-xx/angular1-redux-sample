function controller($ngRedux) {
    this.redux = $ngRedux;
}

controller.prototype.$onInit = function() {
    this.unsubscribe = this.redux.connect(this.mapStateToThis)(this);
}

controller.prototype.mapStateToThis = function(state) {
    return {
        loaderCount: state.loaderCount
    }
}

controller.prototype.$onDestroy = function() {
    this.unsubscribe();
}
module.exports = controller;