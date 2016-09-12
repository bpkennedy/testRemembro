'use strict';

/**
 * @ngdoc service
 * @name testRemembroApp.Auth
 * @description
 * # Auth
 * Factory in the testRemembroApp.
 */
angular.module('testRemembroApp')
  .factory('Auth', function ($firebaseAuth) {
    return $firebaseAuth();
  });
