/**
 * Created by Muhammad on 12/31/2015.
 */


angular.module('myApp')

    .controller('CDCIController',function($document,$state,$firebaseArray,firebaseUrl)
    {
        var loginData = angular.fromJson(window.localStorage['loginData']);

        var ref = new Firebase(firebaseUrl+"/CDCI");
        var allDetails = $firebaseArray(ref);
        var vm = this;
        vm.cdciForm = false;
        vm.validId = false;

        allDetails.$loaded().then(function()
        {
            vm.cdciForm = true;
        });

        vm.searchBdetails = function()
        {
            for(var i=0;i<allDetails.length;i++)
            {
                //console.log(allDetails[i].$id);
                if(allDetails[i].$id == vm.burialId)
                {
                    vm.validId = true;
                    break;
                }
            }
        };



        vm.certificateIssue = function()
        {
            var cedcRef = ref.child("/"+vm.burialId);
            cedcRef.update(
                {
                    issue:"Yes"
                },function(error)
                {
                    if(!error)
                    {
                        alert("Death certificate issuance request sent.... ");
                        $state.go($state.current,{},{reload:true})
                    }
                });


        }


    })
