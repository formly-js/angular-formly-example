import angular from 'angular';
import carsAppName from './cars-app';

angular.bootstrap(document.body, [carsAppName], {
  strictDi: true
});
