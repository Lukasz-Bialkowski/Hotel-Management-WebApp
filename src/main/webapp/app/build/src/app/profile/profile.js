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
    .state('cancelconfirm', {
            url : '/cancelconfirmation',
            views : {
                'main': {
                    templateUrl : 'profile/cancelconfirm.tpl.html',
                    controller: 'ConfirmationCtrl'
                }
            },
            data : { pageTitle : "Powodzenie" }
        });
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
        },
        deleteReservation : {
            method : 'DELETE',
            params : {
                operation : 'deleteReservation'
            }
        }
    });
    return resource;
 })
.controller('ProfileCtrl', function($scope, $state, ReservationsService, sessionService){
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
    $scope.cancelAvailable = function(startDate,status) {
        var today = new Date();
        var last = today.getTime() + 3*(24*60*60*1000);
        var start = Date.parse(startDate);

        console.log("Ostatnia mozliwa data: " + last);
        console.log("Poczatek rezerwacji : "+ start);
        console.log("Poczatek rezerwacji mniejszy od ostatniej mozliwej daty?: " + (start<last));

        if(last<start && status!='ANULOWANA'){ return true; }
        else{ return false; }
        return last<start;
    };
    $scope.cancelReservation = function(reservationId){
        var r = confirm("Czy napewno chcesz anulowac tę rezerwacje?\nTa operacja jest nieodwracalna!");
        if (r === true) {
            ReservationsService.deleteReservation({id:$scope.user.id, resId:reservationId}, function(response){
                alert("Na Twoją skrzynkę mailową został wysłany link aktywujacy anulowanie rezerwacji");
                $scope.getCurrentReservations();
                $scope.getHistoryReservations();
            });
        } else {
        }
    };

})
.controller("ConfirmationCtrl", function($scope, $state, ReservationsService, sessionService) {
    $scope.changeStateToProfile = function() {
        sessionService.logout();
        $state.go("login");
    };
});