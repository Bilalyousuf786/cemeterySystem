/**
 * Created by Mateen Bhai on 2/4/2016.
 */



angular.module("myApp")

    .controller("create_graveyard_Controller",function(firebaseUrl,$firebaseArray)
    {
        var vm = this;
        var ref= new Firebase(firebaseUrl+"Graveyard Location");

        vm.creatGraveyard = function()
        {
          var graveId =  ref.push(
                {
                    graveyard_name:vm.graveyardName
                },function(err)
                {
                    if (err)
                    {
                        console.log("Garaveyard not created : ",err);
                    }
                    else
                    {
                        console.log("Garaveyard Created : ",graveId.key());

                    }
                });
                if(graveId.key() != "")
                {
                    vm.graveyardName = "";
                }
        };


    })