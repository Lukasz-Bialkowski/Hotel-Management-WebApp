angular.module('ngBoilerplate.reservations', ['ui.router', 'ngResource', 'ngBoilerplate.account'])
.config(function($stateProvider){
    $stateProvider.state('reservations', {
        url:'/reservations',
        views: {
            'main' : {
                templateUrl : 'reservations/avreservations.tpl.html',
                controller : 'ReservationCtrl'
            }
        },
        data : { pageTitle : "Rezerwacja" }
    })

})
.factory('AvailableReservationsService', function($resource) {
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
        addReservationToUser : {
            method : 'POST',
            params : {
                operation : 'addReservationToUser'
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
.controller('ReservationCtrl', function($scope, $state, AvailableReservationsService, sessionService){
    $scope.user = sessionService.getUser();
    $scope.isLoggedIn = sessionService.isLoggedIn;
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
    $scope.availableReservations = [
        {"id":null,"startDate":1452293439063,"endDate":1452293439063,"totalCost":12.3,"room":{"id":null,"roomNr":16,"standard":"WYSOKI"},"status":"AKTYWNA"},
        {"id":null,"startDate":1452293439063,"endDate":1452293439063,"totalCost":12.3,"room":{"id":null,"roomNr":16,"standard":"WYSOKI"},"status":"AKTYWNA"},
        {"id":null,"startDate":1452293439063,"endDate":1452293439063,"totalCost":12.3,"room":{"id":null,"roomNr":16,"standard":"WYSOKI"},"status":"AKTYWNA"},
        {"id":null,"startDate":1452293439063,"endDate":1452293439063,"totalCost":12.3,"room":{"id":null,"roomNr":16,"standard":"WYSOKI"},"status":"AKTYWNA"},
        {"id":null,"startDate":1452293439063,"endDate":1452293439063,"totalCost":12.3,"room":{"id":null,"roomNr":16,"standard":"WYSOKI"},"status":"AKTYWNA"},
        {"id":null,"startDate":1452293439063,"endDate":1452293439063,"totalCost":12.3,"room":{"id":null,"roomNr":16,"standard":"WYSOKI"},"status":"AKTYWNA"}
    ];
    $scope.addReservationToUser = function(item, indeks){
        AvailableReservationsService.addReservationToUser({id:$scope.user.id}, item,function(response){
           alert("Dodano rezerwacje dla uzytkownika "+ $scope.user.login);
        });
        $scope.availableReservations.splice(indeks, 1);
    };

});