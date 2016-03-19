/**
 * Created by Muhammad on 12/16/2015.
 */


angular.module('myApp')

    .controller('BurialDetailsController',function($document,$state,firebaseUrl,$firebaseObject)
    {

        var loginData = angular.fromJson(window.localStorage['loginData']);
        var vm = this;
        vm.hideDetails =true;



        vm.searchBdetails = function(id)
        {
            var ref = new Firebase(firebaseUrl+"Graveyard Location/"+loginData.graveyardId+"/Occupied_Graves/"+id);
            vm.bDetails = $firebaseObject(ref);
            vm.bDetails.$loaded().then(function()
            {
                vm.hideDetails =false;

            })

        };
        vm.graveId = function(id)
        {
            console.log(id);

        };



        $document.ready(function()
        {
            if(loginData == null || loginData == undefined || loginData == "")
            {
                $state.go("sign-In");
            }
        });







    });