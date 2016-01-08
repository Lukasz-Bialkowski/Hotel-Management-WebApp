angular.module('ngBoilerplate.account', ['ui.router', 'ngResource'])
.config(function($stateProvider) {
    $stateProvider.state('login', {
        url:'/login',
        views: {
            'main': {
                templateUrl:'account/login.tpl.html',
                controller: 'LoginCtrl'
            }
        },
        data : { pageTitle : "Logowanie" }
    })
    .state('register', {
            url:'/register',
            views: {
                'main': {
                    templateUrl:'account/register.tpl.html',
                    controller: 'RegisterCtrl'
                }
            },
            data : { pageTitle : "Rejestracja" }
            }
    );
})
.factory('sessionService', function() {
    var session = {};
    var str = {};
    session.login = function(data) {
        alert('Zalogowany jako ' + data.login + " haslo " + data.password);
        localStorage.setItem("session", data);
        str = data;
    };
    session.logout = function() {
        localStorage.removeItem("session");
    };
    session.isLoggedIn = function() {
        return localStorage.getItem("session") !== null;
    };
    session.getUser = function() {
        return str;
    };
    return session;
})
.factory('accountService', function($resource) {
    var service = {};
    service.register = function(account, success, failure) {
        var Account = $resource("/basic-web-app/rest/accounts");
        Account.save({}, account, success, failure);
    };
    service.userExists = function(account, success, failure) {
        var Account = $resource("/basic-web-app/rest/accounts");
        var data = Account.get({login:account.login}, function(data) {
            var accounts = data.accounts;
            if(accounts.length !== 0) {
                success(accounts[0]);
            } else {
                failure();
            }
        },
        failure);
    };
    return service;
})
.controller("LoginCtrl", function($scope, sessionService, accountService, $state) {
    $scope.login = function() {
        accountService.userExists($scope.current, function(account) {
            sessionService.login(account);
            $state.go("home");
        },
        function() {
            alert("Blad podczas proby logowania");
        });
    };
})
.controller("RegisterCtrl", function($scope, sessionService, $state, accountService) {
    $scope.zipCodePatternPL = /^[0-9]{2}-[0-9]{3}$/;

    $scope.register = function() {
        accountService.register($scope.current,
        function(returnedData) {
            sessionService.login(returnedData);
            $state.go("home");
        },
        function() {
            alert("Blad podczas proby rejestracji");
        });
    };
});