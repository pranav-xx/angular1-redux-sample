//global imports
var angular = require('angular');
var ngRedux = require('ng-redux');
var thunk = require('redux-thunk');
require('normalize.css');
require('bootstrap/dist/css/bootstrap.css');

//local imports
var rootReducer = require('./reducers/index');
var app = require('./components/container/app/app');
var header = require('./components/presentation/header/header');
var topNavigation = require('./components/container/top-navigation/top-navigation');
var leftNavigation = require('./components/container/left-navigation/left-navigation');
var loader = require('./components/container/loader/loader');
var tree = require('./components/presentation/tree/tree');
var todoList = require('./components/container/todo-list/todo-list');
var todoItem = require('./components/presentation/todo-item/todo-item');

//action creators
var menuActionCreator = require('./action-creators/menu.action-creator');
var loaderActionCreator = require('./action-creators/loader.action-creator');
var todoActionCreator = require('./action-creators/todo.action-creator');

var menuService = require('./services/menu.service');
var todoService = require('./services/todo.service');
var httpInterceptorService = require('./services/http-interceptor.service');

angular
    .module('todo', ['ngRedux'])
    .config(function($ngReduxProvider, $httpProvider) {
        $ngReduxProvider.createStoreWith(rootReducer, [thunk.default], [window.__REDUX_DEVTOOLS_EXTENSION__()]);
        $httpProvider.interceptors.push('httpInterceptorService');
    })
    .service('_', require('lodash'))
    .service('loaderActionCreator', loaderActionCreator)
    .service('httpInterceptorService', ['$q', '$ngRedux', 'loaderActionCreator', httpInterceptorService])
    .service('menuService', ['$http', menuService])
    .factory('menuActionCreator', ['menuService', menuActionCreator])
    .service('todoService', ['$http', todoService])
    .factory('todoActionCreator', ['todoService', todoActionCreator])
    .directive('app', ['$ngRedux', 'menuActionCreator', app])
    .directive('header', header)
    .directive('topNavigation', ['$ngRedux', topNavigation])
    .directive('leftNavigation', ['$ngRedux', leftNavigation])
    .directive('loader', ['$ngRedux', loader])
    .directive('todoList', ['$ngRedux', 'todoActionCreator', todoList])
    .component('todoItem', todoItem)
    .component('tree', tree);