var tpl = require('./tree.html');
var controller = require('./tree.controller');
var tree = {
    'restrict': 'E',
    'template': tpl,
    'bindings': {
        'items': '=',
        'textField': '@',
        'valueField': '@',
        'childreField': '@',
        'containerClass': '@'
    },
    'controller': controller,
    'controllerAs': 'tree'
}

module.exports = tree;