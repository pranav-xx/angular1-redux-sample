var tpl = require('./loader.html');
var controller = require('./loader.controller');
var loader = {
    template: tpl,
    restrict: 'E',
    controller: controller,
    controllerAs: 'loader'
}

module.exports = function() {
    return loader;
}