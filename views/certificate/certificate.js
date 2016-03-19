/**
 * Created by Muhammad Bilal on 12/7/2015.
 */

app.controller("certificateController", function(firebaseUrl,$firebaseArray,$firebaseObject,$scope){

    var vm = this;
    var ref = new Firebase(firebaseUrl);
    vm.hideDetails =true;

    var ref = new Firebase(firebaseUrl+"Graveyard Location");
    vm.graveyardName = $firebaseArray(ref);


    vm.gId;
    vm.graveId = function(id)
    {
        for(var i =0; i < vm.graveyardName.length;i++)
        {
            if(id == vm.graveyardName[i].graveyard_name)
            {
                vm.gId = vm.graveyardName[i].$id;
                //console.log(vm.gId);
                break;
            }
        }
    }


    vm.bDetails;
    vm.searchBdetails = function(id)
    {
        var ref = new Firebase(firebaseUrl+"Graveyard Location/"+vm.gId+"/Occupied_Graves/"+vm.burialId);
        vm.bDetails = $firebaseObject(ref);
        vm.bDetails.$loaded().then(function()
        {


            if(vm.bDetails.GraveNo != undefined )
            {
                vm.hideDetails =false;

            }
            else
            {
                vm.hideDetails =true;
                alert("No record found!")

            }

        })
    }

    /*vm.exportAction = function(){
        switch($scope.export_action){
            case 'pdf': $scope.$broadcast("export-pdf", {});
                break;
            case 'excel': $scope.$broadcast("export-excel", {});
                break;
            case 'doc': $scope.$broadcast("export-doc", {});
                break;
            default: console.log("no event caught");
        }
    }
*/





});