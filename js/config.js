

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
    .state('root.todo', {
      url        : '/todo',
      controller : 'TodoController',
      templateUrl: 'templates/todo.tpl.html'
    })
    .state('root.singletodo', {
      url        : '/todo/:singleID',
      controller : 'SingleController',
      templateUrl: 'templates/single.tpl.html'
    })
    .state('root.soundcloud', {
      url        : '/soundcloud',
      controller : 'SoundCloudController',
      templateUrl: 'templates/soundcloud.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;