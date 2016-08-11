'use strict';

/**
 * @ngdoc function
 * @name testRemembroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testRemembroApp
 */
angular.module('testRemembroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
