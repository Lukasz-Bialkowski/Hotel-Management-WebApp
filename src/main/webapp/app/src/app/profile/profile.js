angular.module('ngBoilerplate.profile', ['ui.router', 'ngResource', 'ngBoilerplate.account'])
.config(function($stateProvider){
    $stateProvider.state('profile', {
        url:'/profile',
        views: {
            'main' : {
                templateUrl : 'profile/profile.tpl.html',
                controller : 'ProfileCtrl'
            }
        },
        data : { pageTitle : "Menu" }
    })
    .state('profile.reservations', {
        url : '/reservations',
        views : {
            'right': {
                templateUrl : 'profile/reservations.tpl.html',
                controller: 'ProfileCtrl'
            }
        },
        data : { pageTitle : "Rezerwacje" }
    })
})
.factory('ReservationsService', function($resource) {
    var resource = $resource("/basic-web-app/rest/profile/reservations/:id/:secId/:operation/:page",{},{
        list : {
            method : 'GET',
            isArray : true
        },
        listCurrentReservations : {
            method : 'GET',
            isArray : true,
            params : {
                operation : 'listCurrentReservations'
            }
        },
        listHistoryReservations : {
            method : 'GET',
            isArray : true,
            params : {
                operation : 'listHistoryReservations'
            }
        },
        get : {
            method : 'GET'
        },
        create : {
            method : 'GET',
            params : {
                operation : 'create'
            }
        },
        save : {
            method : 'POST',
            params : {
                operation : 'save'
            }
        },
        remove : {
            method : 'DELETE'
        },
        sortprops : {
            method : 'GET',
            isArray : true,
            params : {
                operation : 'sortprops'
            }
        },
        filter : {
            method : 'GET',
            isArray : true,
            params : {
                operation : 'filter'
            }
        }
    });
    return resource;
 })
.controller('ProfileCtrl', function($scope, $state, ReservationsService, sessionService){
    ReservationsService.get({id:1});
    $scope.user = sessionService.getUser();
    $scope.reservations = [];
    $scope.getCurrentReservations = function() {
        $scope.title = "Obecne rezerwacje";
        ReservationsService.listCurrentReservations({},function(response){
            $scope.reservations = response;
        });
    };
    $scope.getHistoryReservations = function() {
        $scope.title = "Historia rezerwacji";
        ReservationsService.listHistoryReservations({},function(response){
            $scope.reservations = response;
        });
    };


})
.controller('ReservationsCtrl', function($scope, $state){

});