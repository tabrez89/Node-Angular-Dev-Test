/*global define*/


define(['app/app'],function(app){
  'use strict';
 return app.controller('MainCtrl',['$scope', '$http',function($scope, $http){
  $scope.inputModel = {
        tagvalue :''  
    };
   $scope.searchonFlickr = function(isValid){
    /*To-Do Handle the validations*/
    flickrutils.utils.showMask();
     $http({method: 'GET', url: '/api/flickr/getFlickr?tagValue='+$scope.inputModel.tagvalue}).success(function(data){
      flickrutils.utils.hideMask();
        $scope.flickrResponse = data;
     }).error(function(err){
      flickrutils.utils.hideMask();
      noty({text: "Error at api side !",  timeout: 2000, type: 'error'});
     });
   };

   $scope.searchonFlickr(true);
 }]);
});

