/**
 * Created by Muhammad Bilal on 12/16/2015.
 */

angular.module('myApp')

    .controller('CreateGravesController',function(firebaseUrl,$firebaseArray,$firebaseObject,$document,$timeout,$state)
    {

        var loginData = angular.fromJson(window.localStorage['loginData']);
        var ref = new Firebase(firebaseUrl);
        var vm = this;


        $document.ready(function()
        {
            if(loginData == null || loginData == undefined || loginData == "")
            {
                $state.go("sign-In");
            }

        });

        vm.create_graves = function()
        {
            var childRef = new Firebase(firebaseUrl+"Graveyard Location/"+loginData.graveyardId+"/Unoccupied_Graves");
            var graveID = childRef.push(
                {
                   location:vm.location,
                   GraveNo: vm.graveNo

                },function(error)
                {
                    if(error)
                    {
                        alert("Error : "+error);
                    }
                    else
                    {
                       alert("New Grave added successfully ID : "+graveID.key());
                    }
                });


            $timeout(function()
            {
                vm.location = "";
                vm.graveNo = "";
            },0);

        };
    });