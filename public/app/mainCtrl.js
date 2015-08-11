// main control file

var app = angular.module('treasureHunters');

app.controller('mainCtrl', function($scope, authService, $location, mainService){
	
                // User State 
    $scope.$watch(authService.isLoggedIn, function (isLoggedIn){
		$scope.isLoggedIn = isLoggedIn;
		$scope.currentUser = authService.currentUser();
		console.log($scope.currentUser);
	}); 

    $scope.addClick = function() {
        console.log("hit add")
        if ($scope.currentUser !== undefined) {
            $location.path('listing')
        }
        else {
            alert('You must login to Add a Listing!');
        }
    };

    $scope.myListingClick = function() {
        if ($scope.currentUser !== undefined) {
            $location.path('update');
        }
        else {
            alert('You must login to Manage Listings!');
        }
    };
});
