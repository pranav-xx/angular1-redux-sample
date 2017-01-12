var tpl = require('./header.html');
var headerCss = require('./header.scss');
var controller = require('./header.controller.js');
var headerComponent = {
    restrict: 'E',
    template: tpl,
    controller: controller,
    controllerAs: 'header'
};
module.exports = function() { return headerComponent; };