var tpl = require('./top-navigation.html');
var ctrl = require('./top-navigation.controller');
require('./top-navigation.scss');
var topNavigation = {
    restrict: 'E',
    template: tpl,
    controller: ctrl,
    controllerAs: 'topNavigation'
}
module.exports = function() { return topNavigation };