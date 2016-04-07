


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
        vm.hideDetails = true;
        var ref = new Firebase(firebaseUrl+"Graveyard Location/"+vm.gId+"/Occupied_Graves");
        ref.orderByChild("cnic").equalTo(vm.burialId).on("value", function(snapshot) {
           if(snapshot.val())
           {
                console.log(snapshot.val());
               angular.forEach(snapshot.val(), function(value, key){
                   vm.bDetails = value;
                   vm.hideDetails = false;
               });

           }
            else
           {
               vm.hideDetails = true;
               alert("No record found against this id");
           }
        });
    };

});




