import angular from 'angular';
import caRoot from './components/ca-root';
import initFormly from './run/init-formly.js';

export default angular.module('carsApp', [
  caRoot
])
  .run(initFormly)
  .name;
