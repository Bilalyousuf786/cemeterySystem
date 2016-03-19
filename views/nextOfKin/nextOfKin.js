


app.controller("nextOfKinctrl", function(firebaseUrl,$firebaseArray,$firebaseObject,$scope){

    var vm = this;
    var ref = new Firebase(firebaseUrl);
    vm.hideDetails =true;
    vm.showForm = true;

    var ref = new Firebase(firebaseUrl+"Graveyard Location");
    vm.graveyardName = $firebaseArray(ref);



    vm.graveyardName.$loaded().then(function()
    {
        vm.showForm = false;
    })

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
    };


    vm.bDetails;
    vm.searchBdetails = function(id)
    {
        var ref = new Firebase(firebaseUrl+"Graveyard Location/"+vm.gId+"/Occupied_Graves/"+vm.burialId);
        vm.bDetails = $firebaseObject(ref);
        vm.bDetails.$loaded().then(function()
        {
            vm.bDetails.date = new Date(vm.bDetails.date);

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
    };

});




