angular.module('contServices',[]).factory('cont',function($http){
    var contFactory = {};
    userFactory.create = function(regData) {
    return $http.post('/api/user-data', regData);
}

return userFactory;
});