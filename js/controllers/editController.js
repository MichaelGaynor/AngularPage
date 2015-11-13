let EditController = function($scope, $stateParams, WhiskeyService) {
  
  WhiskeyService.getWhiskey($stateParams.whiskeyId).then( (res)=> {
    $scope.singleWhiskey = res.data;
  });

  $scope.updateWhiskey = function (obj) {
    WhiskeyService.update(obj).then( (res)=> {
      console.log(res);
    });
  };

};

EditController.$inject = ['$scope', '$stateParams', 'WhiskeyService'];

export default EditController;