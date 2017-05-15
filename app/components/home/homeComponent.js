(function(angular) {
  'use strict';
angular.module('home', [])
  .service('carsService', CarsService)

  .component('home', {
    template: '<h2>You in Home</h2><ng-outlet></ng-outlet><carslist/>',
    $routeConfig: [
      {path:'/',    name: 'Carslist',   component: 'carslist', useAsDefault: true}
    //   {path:'/:id', name: 'CrisisDetail', component: 'crisisDetail'}
    ]
  })
  .component('carslist', {
    template:
      '<b> List </b>\n' +
      '<ul>\n' +
      '  <li ng-repeat="crisis in $ctrl.cars"\n' +
      '    ng-class="{ selected: $ctrl.isSelected(crisis) }"\n' +
      '    ng-click="$ctrl.onSelect(crisis)">\n' +
      '    <span class="badge">{{crisis.id}}</span> {{crisis.name}}\n' +
      '  </li>\n' +
      '</ul>\n',
    bindings: { $router: '<' },
    controller: CarsListComponent,
    $canActivate: function($nextInstruction, $prevInstruction) {
      console.log('$canActivate', arguments);
    }
  })
//
//   .component('crisisDetail', {
//     templateUrl: 'crisisDetail.html',
//     bindings: { $router: '<' },
//     controller: CrisisDetailComponent
//   });
//
//
function CarsService($q) {
      var carsPromise = $q.resolve([
        {id: 1, name: 'mercedes'},
        {id: 2, name: 'Mitsubishy'},
        {id: 3, name: 'Nisan'},
        {id: 4, name: 'BMW'}
      ]);

      this.getCars = function() {
        return carsPromise;
    };
  }
//
//   this.getCrisis = function(id) {
//     return crisesPromise.then(function(crises) {
//       for (var i = 0; i < crises.length; i++) {
//         if (crises[i].id === id) return crises[i];
//       }
//     });
//   };
// }
//
 function CarsListComponent(carsService) { console.log('here');
//   var selectedId = null;
  var ctrl = this;
//
  this.$routerOnActivate = function(next) {  console.log('activate');
    console.log('$routerOnActivate', this, arguments);
    // Load up the crises for this view
    carsService.getCars().then(function(cars) { console.log(cars);
      ctrl.cars = cars;
      selectedId = next.params.id;
    });

  };

//
//   this.isSelected = function(crisis) {
//     return (crisis.id === selectedId);
//   };
//
//   this.onSelect = function(crisis) {
//     this.$router.navigate(['CrisisDetail', { id: crisis.id }]);
//   };
}

// function CrisisDetailComponent(crisisService, dialogService) {
//   var ctrl = this;
//   this.$routerOnActivate = function(next) {
//     // Get the crisis identified by the route parameter
//     var id = next.params.id;
//     crisisService.getCrisis(id).then(function(crisis) {
//       if (crisis) {
//         ctrl.editName = crisis.name;
//         ctrl.crisis = crisis;
//       } else { // id not found
//         ctrl.gotoCrises();
//       }
//     });
//   };
//
//   this.$routerCanDeactivate = function() {
//     // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
//     if (!this.crisis || this.crisis.name === this.editName) {
//       return true;
//     }
//     // Otherwise ask the user with the dialog service and return its
//     // promise which resolves to true or false when the user decides
//     return dialogService.confirm('Discard changes?');
//   };
//
//   this.cancel = function() {
//     ctrl.editName = ctrl.crisis.name;
//     ctrl.gotoCrises();
//   };
//
//   this.save = function() {
//     ctrl.crisis.name = ctrl.editName;
//     ctrl.gotoCrises();
//   };
//
//   this.gotoCrises = function() {
//     var crisisId = ctrl.crisis && ctrl.crisis.id;
//     // Pass along the hero id if available
//     // so that the CrisisListComponent can select that hero.
//     this.$router.navigate(['CrisisList', {id: crisisId}]);
//   };
// }
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
