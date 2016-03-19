/**
 * Created by Muhammad on 12/4/2015.
 */

angular.module('myApp')

    .controller('SignInController',function(firebaseUrl,$firebaseArray,$firebaseObject,$state,$document,$timeout)
    {


        var loginData = angular.fromJson(window.localStorage['loginData']);
        var ref = new Firebase(firebaseUrl);
        var vm = this;
        vm.incorrect_pass = true;




        $document.ready(function()
        {
            if(loginData != null)
            {
                    $state.go(loginData.role);
            }

        });

        vm.logout = function()
        {
            window.localStorage.removeItem("loginData");
            $state.go("sign-In");

        }


        vm.login = function()
        {
            if((vm.email != null && vm.email != "") && (vm.pass != null && vm.pa != ""))
            {
                ref.authWithPassword({
                    email    : vm.email,
                    password : vm.pass
                }, function(error, authData) {
                    if (error) {

                        // error when email and password is incorrect
                       alert("Login Failes!"+error);
                        $timeout(function()
                        {
                            vm.pass = "";
                            vm.email = "";
                        },0);


                    } else {
                        var userUid = authData.uid;
                        var childref = ref.child("users/"+userUid);
                        var details = $firebaseObject(childref);

                        details.$loaded().then(function()
                        {
                            if(details.roll == "caretaker")
                            {
                                window.localStorage['loginData'] = JSON.stringify({
                                    role:details.roll,
                                    id:details.$id,
                                    graveyardId:details.graveyardId
                                });

                                $state.go("caretaker");

                            }
                            else
                            {

                                window.localStorage['loginData'] = JSON.stringify({
                                    role:'admin',
                                    id:details.$id
                                });

                                $timeout(function()
                                {
                                    vm.pass = "";
                                    vm.email = "";
                                },0);
                                $state.go("admin");

                            }
                        })
                    }
                });
            }
            else {
                alert("Email id and password is required");
            }


        }


    });
