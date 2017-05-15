(function(angular) {
  'use strict';
angular.module('app', ['ngComponentRouter' , 'home' , 'tab2'])

.config(function($locationProvider) {
 //  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
  template:
    '<nav>\n' +
    '  <a ng-link="[\'Home\']">Home</a>\n' +
    '  <a ng-link="[\'Tab2\']">Tab 2</a>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
     {path: '/', name: 'Home', component: 'home', useAsDefault: true},
     {path: '/home', name: 'Home', component: 'home',},
     {path: '/tab2', name: 'Tab2', component: 'tab2',},
  ]
});
})(window.angular);
