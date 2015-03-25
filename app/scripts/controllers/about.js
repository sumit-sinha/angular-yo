'use strict';

/**
 * @ngdoc function
 * @name angularappV10App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularappV10App
 */
angular.module('angularappV10App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
