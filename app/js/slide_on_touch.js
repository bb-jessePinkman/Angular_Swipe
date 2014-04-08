// var i=0;
/*
$(document).ready(function() {
 
//Enable swiping...
	$(".carousel-inner").swipe( {
//Generic swipe handler for all directions
	swipeLeft:function() {
	$(this).parent().carousel('prev');
},
	swipeRight: function() {
	$(this).parent().carousel('next');
},
//Default is 75px, set to 0 for demo so any distance triggers swipe
threshold:0
});
});

*/
angular.module("touchapp",['ngTouch'])

/*.config(['$routeProvider',function($routeProvider)  //ROUTING
{
	$routeProvider.when('/swiperight',
	{
		templateUrl:'page0.html',
		controller:'touchscreen'
	}).
	when('/swipeleft',
	{
		templateUrl:'page1.html',
		controller:'touchscreen'
	})
}
]);	
*/


.controller('touchscreen',['$scope',function($scope)
{
		$scope.zone="Zone 1"; // initial
		$scope.slide=0;
		$scope.indicator1="white";
		$scope.indicator2="orange";
		$scope.active1="active";
		$scope.active2=" ";

	$scope.swiped=function()
	{
		
		if($scope.swipeme==true)
		{

			$scope.swipeme=false;
			$scope.zone="Zone 1";
			$scope.indicator1="white";
			$scope.indicator2="orange";
			$scope.active1="active";
			$scope.active2=" ";
		}
		else
		{
			$scope.swipeme=true;
			$scope.zone="Zone 2";
			$scope.indicator2="white";
			$scope.indicator1="orange";
			$scope.active2="active";
			$scope.active1=" ";


		}
	}
}]);

/*touchapp.directive('senseme',['$location',function($location)		//custom directive 
{
	return{
		restrict:'A',
		link:function(scope,element,attrs)
		{
			/* Using jQuery Mobile

			$("#element1").on("swiperight",function(){
				$location.path('swiperight');
				$(".carousel-inner").parent().carousel('next');
				threshold:30;
				scope.$apply();
			});

			$("#element1").on("swipeleft",function(){
				$location.path('swipeleft');
				$(".carousel-inner").parent().carousel('prev');
				threshold:30;
				scope.$apply();
			});
			///

		//Using Hammer js//
			 $(document).ready(function()
   			{ 
   				var el=document.getElementById("element");
   				Hammer(el).on('swiperight',function(event){
   																	//**Set the scope to true,its working,tried with angular view//
   					$(".carousel-inner").parent().carousel('next');
				threshold:30;
				scope.$apply();
   			 // We can use event.direction=="left" or right to check the direction as given in comments above//
   			 // For using hammer with jquery,visit the link given in the text document:"How to use.." in NOT IN USE folder //	
   			 });

   				Hammer(el).on('swipeleft',function(event){
   					$(".carousel-inner").parent().carousel('next');
				threshold:30;
				scope.$apply();
   			 
   			 });
   		});
		}	
	};
}]);*/