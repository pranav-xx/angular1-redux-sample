var tpl = require('./left-navigation.html');
var ctrl = require('./left-navigation.controller');
require('./left-navigation.scss');
var leftNavigation = {
    restrict: 'E',
    template: tpl,
    controller: ctrl,
    controllerAs: 'leftNavigation'
}
module.exports = function() { return leftNavigation };