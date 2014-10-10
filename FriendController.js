var app = angular.module('ngFriendFinder');

app.controller('FriendController', function($scope, friendService){
	$scope.friends = friendService.getFriends()
});