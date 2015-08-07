// main control file

var app = angular.module('treasureHunters');

app.controller('mainCtrl', function($scope, authService, $location, mainService){
	$scope.$watch(authService.isLoggedIn, function (isLoggedIn){
		$scope.isLoggedIn = isLoggedIn;
		$scope.currentUser = authService.currentUser();
		console.log($scope.currentUser);
	});

	$scope.distances = ["5 miles", "15 miles", "25 miles"];

	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 };

    $scope.showSearchBar = ($location.path() === '/home');
    console.log($location.path())
    // $scope.locationSearch = "Ogden, UT";

    $scope.submitLocSearch = function(location){
    	console.log('hitmainctrl', location, $scope.locationSearch);
    	mainService.geocode(location).then(function(res) {
    		console.log('geocodeinmain', res);
    		$scope.map.center.latitude = res.data.latitude;
    		$scope.map.center.longitude = res.data.longitude;
    		mainService.getListings([res.data.longitude, res.data.latitude]).then(function(resp){
    			console.log("newlistingsmainctrl", resp);
            	$scope.theListings = resp;
            	console.log("thelistingsafter", $scope.theListings)
        	})
    	})
    }    
  
});
