(function() {
    angular.module('socialApp')
        .controller('AppController', ['$scope', '$mdSidenav', '$mdMedia', function($scope, $mdSidenav, $mdMedia) {
            $scope.toggleIcons = function() {
                $scope.iconsOnly = !$scope.iconsOnly;
            };
            $scope.$watch(function() {
                if ($mdMedia('sm') || $mdMedia('xs')) {
                    return true;
                } else {
                    return false;
                }
                console.log($scope.showButton);
            }, function(response) {
                $scope.showButton = response;
                if (response) {
                    $scope.iconsOnly = false;
                } else {
                    $scope.iconsOnly = true;
                }
                console.log("This is status of button :" + response);
            });
            $scope.toggleLeft = function() {
                $mdSidenav('left').toggle();
            };
        }]);
})();