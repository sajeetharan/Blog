(function () {

  //angular.module('blog', ['ngRoute']);
  angular.module('blog', []);
  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
  }

  angular
    .module('blog')
    .config(['$routeProvider', config]);

})();