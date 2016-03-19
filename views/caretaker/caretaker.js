/**
 * Created by Taimoor tariq on 12/18/2015.
 */


angular.module('myApp')

    .controller('CaretakerController',function($document,$state)
    {

        var loginData = angular.fromJson(window.localStorage['loginData']);
        var vm = this;

        $document.ready(function()
        {
            if(loginData == null || loginData == undefined || loginData == "")
            {
                $state.go("sign-In");
            }
        });


        vm.logout = function()
        {
            window.localStorage.removeItem("loginData");
            $state.go("sign-In");

        }

    });