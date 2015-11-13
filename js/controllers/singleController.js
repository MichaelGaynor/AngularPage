let SingleController = function($scope, $stateParams, WhiskeyService, $state) {
  
  $scope.rate = 7;

  WhiskeyService.getWhiskey($stateParams.whiskeyId).then( (res)=> {
    $scope.singleWhiskey = res.data;
    if (res.data.rating) {
      $scope.rate = res.data.rating;
    }
  });

  $scope.deleteMe = function (obj) {
    WhiskeyService.delete(obj).then( (res)=> {
      console.log(res);
      $state.go('root.list');
    });
  };

  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value/$scope.max);
  };

  $scope.ratingStates = [
  {stateOn: 'fa-check-circle', stateOff: 'fa-check-circle-o'},
  {stateOn: 'fa-star', stateOff: 'fa-start-o'},
  {stateOn: 'fa-heart', stateOff: 'fa-ban'},
  {stateOn: 'fa-heart'},
  {stateOff: 'fa-power-off'}
  ];

  $scope.rateMe = function(singleWhiskey) {
    WhiskeyService.rate(singleWhiskey, $scope.rate).then( ()=> {
      alert('Rating Saved');
    });
  };

};

SingleController.$inject = ['$scope', '$stateParams', 'WhiskeyService', '$state'];

export default SingleController;