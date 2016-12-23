/*(function () {

  angular
    .module('loc8rApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];
  function homeCtrl ($scope, loc8rData, geolocation) {
    var vm = this;
      loc8rData.locationByCoords()
        .success(function(data) {
          vm.message = data.length > 0 ? "" : "No locations found nearby";
          vm.data = { locations: data };
          console.log(vm.data);
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
    
  }

})();
*/

(function () {
  angular
    .module('loc8rApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['$scope', 'loc8rData', 'geolocation'];

  function homeCtrl (loc8rData) {
    var vm = this;

      loc8rData.locationByCoords()
        .success(function(data) {
          //vm.message = data.length > 0 ? "" : "No locations found nearby";
        //vm.data = { locations: data };
          //console.log(vm.data);
          $ecope.ports = data;
        })
        .error(function (e) {
          vm.message = "Sorry, something's gone wrong, please try again later";
        });
    
  }

})();
