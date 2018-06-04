angular.module('userApp',['ngRoute','userControllers'])
.config(function($routeProvider , $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/pages/hello.html',
        controller: 'regCtrl',
        controllerAs: 'register'
    })
.when('/login', {
    templateUrl: 'app/views/pages/users/login.html',
    controller: 'regCtrl',
    controllerAs: 'register'
})
    .when('/pages', {
       templateUrl: 'app/views/pages/pages.html' 
    })
.when('/contact', {
    templateUrl: 'app/views/pages/contact.html',
   
})
    
.when ('/dejavu', {
    templateUrl: 'app/views/pages/dejavu.html'
})

.when ('/goodnews', {
    templateUrl: 'app/views/pages/goodnews.html'
})

.when ('/sessions', {
    templateUrl: 'app/views/pages/sessions.html'
})
.when ('/london', {
    templateUrl: 'app/views/pages/london.html'
})

.when ('/zapier' , {
    templateUrl: 'app/views/pages/zapier.html'
})

.when ('/ufc', {
    templateUrl: 'app/views/pages/ufc.html'
})

.when ('/register', {
    templateUrl: 'app/views/pages/users/register.html',
    controller: 'regCtrl',
    controllerAs: 'register'
})

.when ('/management', {
    templateUrl: 'app/views/pages/management.html'
   
    
})

.otherwise({ redirectTo:'/' } );

$locationProvider.html5Mode({
    enabled: true,
    requireBase: false
});
});
