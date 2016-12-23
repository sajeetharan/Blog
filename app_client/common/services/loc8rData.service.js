(function() {

  angular
    .module('blog')
    .service('loc8rData', loc8rData);

  loc8rData.$inject = ['$http'];
  function loc8rData ($http) {
    var locationByCoords = function () {
      return $http.get('/api/blog');
    };
    return {
      locationByCoords : locationByCoords
    };
  }

})();