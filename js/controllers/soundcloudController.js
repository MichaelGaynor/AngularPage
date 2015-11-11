let SoundCloudController = function($scope, SC, $http, $sce) {

  $scope.title = "Sound Searcher";

  let url = 'http://api.soundcloud.com/tracks?client_id=' + SC;

  $scope.search = function(query) {
    query = encodeURI(query);
    $http.get(url + '&q=' + query).then( (res) => {
      $scope.songs = res.data;
    });
  };

  $scope.playMe = function(song) {
    $scope.audio = $sce.trustAsResourceUrl(song.stream_url+'?client_id='+SC);
    $scope.playing = song;
  };


};

SoundCloudController.$inject = ['$scope', 'SC', '$http', '$sce'];
export default SoundCloudController;