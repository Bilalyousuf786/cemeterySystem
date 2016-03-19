/**
 * Created by Muhammad on 12/16/2015.
 */

angular.module('myApp')

    .controller('CreateCaretakerController',function(firebaseUrl,$document,$state,$timeout,$firebaseArray )
    {

        var loginData = angular.fromJson(window.localStorage['loginData']);
        var ref = new Firebase(firebaseUrl);
        var vm = this;
        vm.formHide = false;



        var loginData = angular.fromJson(window.localStorage['loginData']);

        $document.ready(function()
        {
            if(loginData == null || loginData == undefined || loginData == "")
            {
                $state.go("sign-In");
            }
        });
        var gravesNameRef = ref.child("Graveyard Location");
        vm.graveyardName = $firebaseArray(gravesNameRef);

        vm.graveyardName.$loaded().then(function()
        {
                vm.formHide = true;
        });


        vm.gId;
        vm.graveId = function(id)
        {
            for(var i =0; i < vm.graveyardName.length;i++)
            {
                if(id == vm.graveyardName[i].graveyard_name)
                {
                    vm.gId = vm.graveyardName[i].$id;
                    break;
                }
            }
        };


        vm.caretaker_regis = function()
        {
            ref.createUser({
                email    : vm.email,
                password : vm.pass
            }, function(error, userData) {
                if (error) {
                    console.log("Error creating user:",error);
                } else {
                    var childRef = new Firebase(firebaseUrl+"/users/"+userData.uid);
                    childRef.set(
                        {
                            firstName:vm.fName,
                            lastName:vm.lName,
                            address:vm.address,
                            graveyardId:vm.gId,
                            contactNo:vm.contactNo,
                            cnic:vm.cnic,
                            roll:'caretaker'
                        },function(error)
                        {
                            if(error)
                            {
                                alert("Caretaker not created : "+error);
                                $state.go("admin");
                            }
                            else
                            {
                                alert("Caretaker created successfully.");
                                $state.go("admin");
                            }
                        }
                    );

                }
            });
        };

        /*vm.createAdmin = function() {
            ref.createUser({
                email: vm.email,
                password: vm.pass
            }, function (error, userData) {
                if (error) {
                    console.log("Error creating admin:", error);
                } else {

                    var childRef = new Firebase(firebaseUrl + "/users/" + userData.uid);
                    childRef.set(
                        {
                            firstName: vm.fName,
                            lastName: vm.lName,
                            roll: 'admin'
                        }, function (error) {
                            if (error) {
                                alert("Admin not created : " + error);
                                $state.go("admin");
                            }
                            else {
                                alert("Admin created successfully.");
                                $state.go("admin");

                            }
                        }
                    );
                }
            });

        };*/

    });
