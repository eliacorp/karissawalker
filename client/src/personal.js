angular.module('myApp')
.controller('personalCtrl', ($rootScope, $location, $window, $timeout, $http, anchorSmoothScroll, $scope, $anchorScroll, $interval, check, transformRequestAsFormPost, $routeParams)=>{


$rootScope.getContentType('personal', 'my.personal.date desc');


$rootScope.$on('personalReady', function(){
  console.log("personalReady is ready");

    $rootScope.findStyle();
})


$rootScope.Personal=[];

console.log("personalCtrl");





$rootScope.findStyle=()=>{

    if($routeParams.personal){

      for (var i in $rootScope.Personal){

        console.log($rootScope.Personal[i].slug);
        if($routeParams.style == $rootScope.Personal[i].slug){

          $rootScope.Personal=$rootScope.Personal[i];
          console.log($rootScope.Personal);

        }
      }

    }

};





  $rootScope.findPersonal();

  $rootScope.$on('$routeChangeSuccess', function(){
    $rootScope.findStyle();

  });



});
