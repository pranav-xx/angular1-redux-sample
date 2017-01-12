function MenuService($http) {
    this.getMenu = function() {
        return $http.get('/menu');
    }
}

module.exports = MenuService;