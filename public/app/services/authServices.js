angular.module('authServices',[]).factory('Auth',function($http){
    var authFactory = {};
    userFactory.login = function(regData) {
    return $http.post('/api/user-data', regData);
}

return userFactory;
});