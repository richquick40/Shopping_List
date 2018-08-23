/* Created by Richard Quick on 21/6/2017.  ...*/

angular.module ("tutorialCtrlModule" , [])

.controller("TutorialCtrl" , ["$scope" , function($scope){

		$scope.tutorialObject = {};
		$scope.tutorialObject.title = "Main Page";
		$scope.tutorialObject.subTitle = "Sub title";

		$scope.tutorialObject.bindOutput = 2;

		$scope.tutorialObject.firstName = "Richard";
		$scope.tutorialObject.lastName = "Quick"

		$scope.timesTwo = function() {

			$scope.tutorialObject.bindOutput *=2;
		}

	}])

.controller("TutorialCtrl2" , ["$scope", function($scope) {

	$scope.secondTutorial = "This is the Second Page";

}]);



