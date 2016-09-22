'use strict';
/**
 * @ngdoc function
 * @name testRemembroApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('testRemembroApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $q, $timeout) {
    $scope.oauthLogin = function(provider) {
      $scope.err = null;
      //Auth.$authWithOAuthPopup(provider, {rememberMe: true}).then(redirect, showError);
        var auth = firebase.auth();

        var provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider).then(function(result) {
          // User signed in!
          var uid = result.user.uid;
          redirect();
        }).catch(function(error) {
            showError(error);
        });
    };

    function redirect() {
      $location.path('/account');
    }

    function showError(err) {
      $scope.err = err;
    }


  });
