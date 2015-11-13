let AddController = function($scope, WhiskeyService) {
  
  $scope.addWhiskey = (obj)=> {
    WhiskeyService.addWhiskey(obj).then( (res)=> {
      $scope.whiskey = {};
    });
  };

};

AddController.$inject = ['$scope', 'WhiskeyService'];

export default AddController;