angular.module('contactControllers',['contServices'])
.controller('regCtrl', function($http) {
   this.regUser = function(regData) {
        console.log('form submittededed');
        console.log(this.regData);
        $http.post('/api/user-data', this.regData);
    };

});