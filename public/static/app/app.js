define(['angular','uiRouter','ui-bootstrap'], function (angular) {
	return angular.module('app',['ui.router','ui.bootstrap']).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'static/views/flickrapp/home.html',
            controller:'MainCtrl'
        });
   });
	 
});