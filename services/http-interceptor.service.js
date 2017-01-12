function httpInterceptor($q, $ngredux, loaderActionCreator) {
    var self = this;
    this.unsubscribe = $ngredux.connect(null, loaderActionCreator)(this);
    return {
        request: function(config) {
            self.incrementLoadCounter()
            return config;
        },
        requestError: function(rejection) {
            self.decrementLoadCounter();
            return $q.reject(rejection);
        },
        response: function(response) {
            self.decrementLoadCounter();
            return response;
        },
        responseError: function(rejection) {
            self.decrementLoadCounter();
            return $q.reject(rejection);
        }
    };
}

module.exports = httpInterceptor;