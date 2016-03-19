/**
 * Created by Mateen Bhai on 2/4/2016.
 */


angular.module("myApp")

    .controller("grave_availability_controller",function(firebaseUrl,$firebaseArray)
    {

        var _self = this;
        var ref = new Firebase(firebaseUrl+"Graveyard Location");
        _self.grave_availability = $firebaseArray(ref);


        _self.grave_availability.$loaded().then(function()
        {
            var abc ;
            _self.graveYard_details = [];
           for(var i=0;i<_self.grave_availability.length;i++)
           {
               _self.graveYard_details.push({
                name:_self.grave_availability[i].graveyard_name,
                available:available(),
                occupied:ocupied()
            })
           }

            /*Object.keys(_self.grave_availability[i].Unoccupied_Graves).length*/

            function ocupied()
            {
                var abc;
                if(_self.grave_availability[i].Occupied_Graves == null)
                {
                    return abc = 0;
                }
                else
                {

                    return abc = Object.keys(_self.grave_availability[i].Occupied_Graves).length;
                }
            }

            function available()
            {
                var abc;
                if(_self.grave_availability[i].Unoccupied_Graves == null)
                {
                    return abc = 0;
                }
                else
                {
                    return abc = Object.keys(_self.grave_availability[i].Unoccupied_Graves).length;
                }
            }
        })



    })