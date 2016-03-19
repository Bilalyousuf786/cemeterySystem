/**
 * Created by Muhammad on 12/31/2015.
 */


angular.module('myApp')

    .controller('CaretakerListController',function($document,$state,$firebaseArray,firebaseUrl)
    {
        var loginData = angular.fromJson(window.localStorage['loginData']);

        $document.ready(function()
        {
            if(loginData == null || loginData == undefined || loginData == "")
            {
                $state.go("sign-In");
            }
        });

        var ref = new Firebase(firebaseUrl+"/users");
        var vm = this;
        vm.caretakersDetails = $firebaseArray(ref);

        vm.caretakersDetails.$loaded().then(function()
        {


            vm.currentPage = 0;
            vm.pageSize = 10;
            vm.data = vm.caretakersDetails;
            vm.numberOfPages=function(){
                return Math.ceil(vm.data.length/vm.pageSize);
            }

        })

    })

    .filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    }
})
