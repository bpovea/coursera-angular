(function(){
    'use strict';

    angular.module('LunchCheck',[])

    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = [$scope];
    function LunchCheckController ($scope){
        $scope.items = "";
        $scope.message = "";
        $scope.messageClass = "";
        $scope.itemsClass = ""
    
        $scope.check = function () {
            if ($scope.items == "" ){
                $scope.message = "Please enter data first!";
                $scope.messageClass = "wrong";
                $scope.itemsClass = "wrong-textbox";
            }else{
                var items_length = $scope.items.split(",").length
                if (items_length < 4 ){
                    $scope.message = "Enjoy!";
                }else{
                    $scope.message = "Too much!";
                }
                $scope.messageClass = "right";
                $scope.itemsClass = "right-textbox";
            }
        };

    }

})();



// (function () {
//     'use strict';
    
//     angular.module('DIApp', [])
//     .controller('DIController', DIController);
    
//     function DIController ($scope,
//                            $filter,
//                            $injector) {
//       $scope.name = "Yaakov";
    
//       $scope.upper = function () {
//         var upCase = $filter('uppercase');
//         $scope.name = upCase($scope.name);
//       };
    
//       console.log($injector.annotate(DIController));
//     }
    
//     function AnnonateMe(name, job, blah) {
//       return "Blah!";
//     }
    
//     console.log(DIController.toString());
    
//     })();
