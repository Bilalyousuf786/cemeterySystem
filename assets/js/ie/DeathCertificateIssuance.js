/**
 * Created by Bilal on 8/5/2015.
 */
var app = angular.module("left-sidebar",["firebase"]);

app.constant("firebaseURL","https://bilalduaapp.firebaseio.com/");

app.controller("ctrl1",function(firebaseURL)
{
    var ref = new Firebase(firebaseURL);
    var ab = this;

    ab.userData = function()
    {
        var compURL = ref.child("UsersDetails");
        var userEmail = ab.userMail;
        compURL.set({

            userEmail:{
                fName: ab.userFname,
                lName: ab.userLname,
                gender: ab.userGender,
                KinName : ab.userKinName,
                KinRelation:ab.usereKinRelation,
                BurialNic:ab.userBurialNic,
                ConfirmBurialNic:ab.userConfirmBurialNic
                /*mail: ab.userMail,
                pass: ab.userPass;*/
                /*                dp: ab.userPic*/
            }

        })
    };
