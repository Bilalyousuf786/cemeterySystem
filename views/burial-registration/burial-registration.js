

angular.module('myApp')
    .controller('BurialController',function(firebaseUrl,$firebaseArray,$firebaseObject,$document,$state)
    {
        var loginData = angular.fromJson(window.localStorage['loginData']);
        var ref = new Firebase(firebaseUrl);
        var vm = this;
        vm.showForm = true;




        //List of ages
        vm.ageList = [];
        for(var i = 1;i<=100;i++)
        {
            vm.ageList.push(i);
        }



        $document.ready(function()
        {
            if(loginData == null || loginData == undefined || loginData == "")
            {
                    $state.go("sign-In");
            }
        });




        var childRef = ref.child("/Graveyard Location/"+loginData.graveyardId+"/Unoccupied_Graves");


        vm.available_graves = $firebaseArray(childRef);

        vm.available_graves.$loaded().then(function()
        {
            vm.showForm = false;


            vm.cropper = {};
            vm.cropper.sourceImage = null;
            vm.cropper.croppedImage   = null;
            vm.bounds = {};

            vm.burial_reg = function()
            {
                for(var i=0;i<vm.available_graves.length;i++)
                {
                    if(vm.available_graves[i].GraveNo == vm.selectedGraveNo)
                    {
                        var uId = vm.available_graves[i].$id;
                        var RegPath = ref.child("/Graveyard Location/"+loginData.graveyardId+"/Occupied_Graves/"+uId);
                        RegPath.set({
                            burialName:vm.burialName,
                            fatherName:vm.fatherName,
                            gender:vm.gender,
                            age:vm.age,
                            cnic:vm.cnic,
                            date: vm.date.toString(),
                            address:vm.address,
                            GraveNo:vm.selectedGraveNo,
                            pic:vm.cropper.croppedImage,
                            NextOfKin:{
                                kinName: vm.kinName,
                                kinCnic:vm.kinCnic,
                                kinCell:vm.kinCell,
                                kinAddress:vm.kinAddress
                            }
                        },function(error)
                        {
                            if(error)
                            {
                                alert("Burial not Registered successfully");
                                $state.go("caretaker");
                            }
                            else
                            {
                                var cdciRef = ref.child("CDCI/"+uId);
                                cdciRef.set({
                                    burialNic : vm.cnic,
                                    nextOfKinNic : vm.kinCnic,
                                    issue: "No",
                                    graveyardId : loginData.graveyardId
                                },function(error)
                                {
                                    if(!error)
                                    {
                                        alert("Burial Registered successfully : "+uId);
                                        var removechildRef = ref.child("/Graveyard Location/"+loginData.graveyardId+"/Unoccupied_Graves/"+uId);
                                        removechildRef.remove();
                                        $state.go("caretaker");
                                    }
                                })

                            }
                        })

                    }
                }
            };
        })






    });
