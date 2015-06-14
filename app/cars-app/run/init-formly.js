export default initFormly;

// @ngInject
function initFormly(formlyConfig) {
  formlyConfig.setWrapper({
    name: 'label',
    template: '<label for="{{::id}}">{{to.label}}</label><formly-transclude></formly-transclude>'
  });

  formlyConfig.setType({
    name: 'input',
    template: '<input ng-model="model[options.key]" />',
    wrapper: ['label']
  });
}
