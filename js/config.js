

let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract   : true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url        : '/',
      controller : 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.list', {
      url        : '/list',
      controller : 'ListController',
      templateUrl: 'templates/list.tpl.html'
    })
    .state('root.single', {
      url        : '/single/:whiskeyId',
      controller : 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.add', {
      url        : '/add',
      controller : 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.edit', {
      url        : '/edit/:whiskeyId',
      controller : 'EditController',
      templateUrl: 'templates/edit.tpl.html'
    })
    .state('root.soundcloud', {
      url        : '/soundcloud',
      controller : 'SoundCloudController',
      templateUrl: 'templates/soundcloud.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;