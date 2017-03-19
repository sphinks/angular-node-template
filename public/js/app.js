'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['ngResource', 'ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/contacts", { templateUrl: "partials/index", controller: "ContactsIndexCtrl" })
      .when("/contacts/new", { templateUrl: "partials/edit", controller: "ContactsEditCtrl" })
      .when("/contacts/:id", { templateUrl: "partials/show", controller: "ContactsShowCtrl" })
      .when("/contacts/:id/edit", { templateUrl: "partials/edit", controller: "ContactsEditCtrl" })
      .otherwise({ redirectTo: "/contacts" });
  }]);