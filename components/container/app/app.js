var tpl = require('./app.html');
var controller = require('./app.controller.js');
require('./app.scss');
var appComponent = {
    scope: false,
    template: tpl,
    restrict: 'E',
    controller: controller
}
module.exports = function() { return appComponent };