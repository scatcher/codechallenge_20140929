angular.module('codechallengeApp')
  .filter('playerName', function() {
  return function(stats, filterText) {
    return true;
    //return stats && stats.name ? stats.name.toLowerCase()
    //    .indexOf(filterText.toLowerCase()) > -1 : true;
  };
});
