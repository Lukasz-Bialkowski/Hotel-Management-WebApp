angular.module('ngBoilerplate.profile', ['ui.router', 'ngResource'])
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
    .state('reservations', {
        url : 'reservations',
        views : {
            'main': {
                templateUrl : 'reservations.tpl.html',
                controller: 'ReservationsCtrl'
            }
        },
        data : { pageTitle : "Rezerwacje" }
    })
})
.factory('ProfileService', function($resource) {
    var resource = $resource("/basic-web-app/rest/accounts/:id/:secId/:operation/:page",{},{
        list : {
            method : 'GET',
            isArray : true
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
.controller('ProfileCtrl', function($scope, $state, ProfileService){
    ProfileService.get({id:1});

})
.controller('ReservationsCtrl', function($scope, $state){

});