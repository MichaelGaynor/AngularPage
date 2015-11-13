let ListController = function($scope, WhiskeyService) {

  $scope.title = "Scotch List";

  WhiskeyService.GetWhiskey().then( (res)=> {
    $scope.whiskeys = res.data.results;
  });
};

ListController.$inject = ['$scope', 'WhiskeyService'];
export default ListController;