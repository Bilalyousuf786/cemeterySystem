

var app = angular.module("myApp",['ui.router','firebase','angular-img-cropper']);

app.constant('firebaseUrl','https://graveyardapp.firebaseio.com/');

app.config(function($stateProvider,$urlRouterProvider)
{
    $urlRouterProvider.otherwise('home');

    $stateProvider.state('home',{
        url:'/home',
        templateUrl:'./views/home/home.html'
    })


    .state('about-us',{
        url:'/about-us',
        templateUrl:'./views/aboutUs/aboutUs.html'

    })
        .state('nextOfKin',{
            url: '/nextOfKin',
            templateUrl:'./views/nextOfKin/nextOfKin.html',
            controller: 'nextOfKinctrl',
            controllerAs: 'ctrl'
        })
        .state('cdci',{
            url: '/cdci',
            templateUrl:'./views/cdci/cdci.html',
            controller: 'CDCIController',
            controllerAs: 'ctrl'
    /*        controller: 'nextOfKinctrl',
            controllerAs: 'ctrl'*/
        })
        .state('google-map/:lat/:lon',{
            url:'/google-map',
            templateUrl:'./views/map/map.html',
            controller:'ExampleController',
            controllerAs:'ctrl'
        })

    .state('contact-us',{
        url:'/contact-us',
        templateUrl:'./views/contactUs/contactUs.html'
        //controller:'ContactUsController',
        //controllerAs:'ctrl'
    })

    .state('grave_availability',{
            url:'/graveAvailability',
            templateUrl:'./views/graves-availability/graves-availability.html',
            controller:'grave_availability_controller',
            controllerAs:'ctrl'
    })


    .state('sign-In',{
        url:'/sign-in',
        templateUrl:'./views/signIn/sign-in.html',
        controller:'SignInController',
        controllerAs:'ctrl'
    })

        .state('admin',{
            url:'/dashboard',
            templateUrl:'./views/admin/admin.html',
            controller:'AdminController',
            controllerAs:'ctrl'
        })

        .state('admin.create-graveyard',{
            url:'/create-graveyard',
            templateUrl:'./views/create-graveyard/create-graveyard.html',
            controller:'create_graveyard_Controller',
            controllerAs:'ctrl'
        })

            //sub route of admin
        .state('admin.create-caretaker',{
            url:'/create-caretaker',
            templateUrl:'./views/create-caretaker/create-caretaker.html',
            controller:'CreateCaretakerController',
            controllerAs:'ctrl'
        })

        .state('admin.caretaker-list',{
            url:'/caretaker-list',
            templateUrl:'./views/caretaker-list/caretaker-list.html',
            controller:'CaretakerListController',
            controllerAs:'ctrl'
        })

        .state('admin.certificate',{
            url:'/certificate',
            templateUrl:'./views/certificate/certificate.html',
            controller:'certificateController',
            controllerAs:'ctrl'
        })


        .state('caretaker',{
            url:'/dashboard1',
            templateUrl:'./views/caretaker/caretaker.html',
            controller:'CaretakerController',
            controllerAs:'ctrl'
        })



        .state('caretaker.burialDetails',{
            url:'/burial-details',
            templateUrl:'./views/BurialDetails/BurialDetails.html',
            controller:'BurialDetailsController',
            controllerAs:'ctrl'
        })

            //sub route of caretaker
        .state('caretaker.burial-reg',{
            url:'/burial-registration',
            templateUrl:'views/burial-registration/burial-registration.html',
            controller:'BurialController',
            controllerAs:'ctrl'
        })

            //sub route of caretaker
        .state('caretaker.create-graves',{
            url:'/create-graves',
            templateUrl:'views/create-graves/create-graves.html',
            controller:'CreateGravesController',
            controllerAs:'ctrl'
        })






});
