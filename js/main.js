import angular from 'angular';
import 'angular-ui-router';
import configFunc from './config';
import HomeController from './controllers/homeController';
import SoundCloudController from './controllers/soundcloudController';
import TodoController from './controllers/todoController';


//register a model
angular
  .module('app', ['ui.router'])
  .constant('SC', '8927a65b926a9001bc02f4277da049d4')
  .config(configFunc)
  .controller('HomeController', HomeController)
  .controller('SoundCloudController', SoundCloudController)
  .controller('TodoController', TodoController)
  ;