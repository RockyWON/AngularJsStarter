angular.module('userControllers',['loginControllers']).
controller('regCtrl', function($http, $location) {
    
    var app = this;

    this.regUser = function(regData) {
   app.loading = true;
        app.errorMsg = false;
        console.log('form submitted');
    console.log(this.regData);
$http.post('/api/user-data', this.regData).then(function(data) {
console.log(data.data.success);
console.log(data.data.message);
if(data.data.success){
app.loading = false;
    var successMsg = data.data.message;
app.successMsg = data.data.message;
$location.path('/login');
} else {
    app.loading = false;
app.errorMsg = data.data.message;
}
});
 };
});