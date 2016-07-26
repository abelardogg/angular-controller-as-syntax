mainApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html'
        })
        .state('home.paragraph', {
            url: '/paragraph',

        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.html'
            // we'll get to this in a bit
        })
        .state('about.info', {
            url: '/info',

        });

});
