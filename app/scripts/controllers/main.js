'use strict';

/**
 * @ngdoc function
 * @name angularappV10App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularappV10App
 */
angular.module('angularappV10App')
  .controller('MainCtrl', function ($scope, localStorageService) {

    $scope.errors = [];
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    /**
     * function called when ToDo button is clicked
     * @author ssinha
     */
    $scope.addTodo = function() {
      if ($scope.todo !== null && $scope.todo !== '') {
        $scope.errors = [];
        $scope.todos.push($scope.todo);
      } else {
        $scope.errors.push('Please provide a value in input field');
      }

      $scope.todo = '';
    };

    /**
     * function called when remove button is clicked in UI
     * @param index
     * @author ssinha
     */
    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };
  });
