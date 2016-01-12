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
.factory('sessionService', function($state) {
    var session = {};
    var str = {};
    session.login = function(data) {
        alert('Zalogowany jako ' + data.login + " haslo " + data.password);
        localStorage.setItem("session", data);
        str = data;
    };
    session.logout = function() {
        localStorage.removeItem("session");
        $state.go("home");
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
        var Account = $resource("/basic-web-app/rest/account/registration");
        Account.save({}, account, success, failure);
    };
    service.userExists = function(account, success, failure) {
        var Account = $resource("/basic-web-app/rest/account/credentials");
        var data = Account.get({login:account.login}, function(data) {
            console.log(JSON.stringify(data));
            if(data.login){
                if(data.enabled===true){
                    success(data);
                } else {
                    failure(data.login);
                }
            } else {failure();}

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
        function(flaga) {
            if(flaga){alert("Przed zalogowaniem musisz aktywowac konto w systemie");}
            else {alert("Blad podczas proby logowania");}
        });
    };
})
.controller("RegisterCtrl", function($scope, sessionService, $state, accountService) {
    $scope.zipCodePatternPL = /^[0-9]{2}-[0-9]{3}$/;
    $scope.register = function() {
        accountService.register($scope.current,
            function(returnedData) {
//                sessionService.login(returnedData);
                alert("Dziękujemy za rejestracje w systemie. \nWysłano wiadomość email z linkiem aktywacyjnym konto.");
                $state.go("home");

            },
            function() {
                alert("Blad podczas proby rejestracji");
        });
    };
});