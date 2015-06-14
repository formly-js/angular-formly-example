import angular from 'angular';
import formlyModuleName from 'angular-formly';

export default angular
  .module('caRoot', [formlyModuleName])
  .directive('caRoot', caRoot)
  .name;

function caRoot() {
  return {
    restrict: 'E',
    template: require('./ca-root.html'),
    scope: {},
    controllerAs: 'vm',
    bindToController: true,
    controller: CaRootCtrl
  };

  // @ngInject
  function CaRootCtrl($log) {
    var vm = this;

    vm.onSubmit = onSubmit;

    vm.model = {name: {}};

    vm.fields = [
      {
        model: 'model.name',
        key: 'first',
        type: 'input',
        templateOptions: {
          label: 'First Name'
        }
      },
      {
        model: 'model.name',
        key: 'last',
        type: 'input',
        templateOptions: {
          label: 'Last Name'
        }
      },
      {
        key: 'age',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: 'Age'
        }
      }
    ];

    function onSubmit() {
      $log.info('submitted!', vm.model);
    }
  }
}
