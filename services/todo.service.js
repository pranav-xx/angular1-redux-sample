function todoService($http) {
    this.getTodos = function() {
        return $http.get('/todos');
    }
}

module.exports = todoService;