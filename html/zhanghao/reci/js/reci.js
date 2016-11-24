app.controller('ceciCtrl',['$scope',function($scope){
	var search=$('.search');
	var reci=$('.reci');
	var header=$('#header')
	search.on('touchstart',function(e){
		reci.css('display','block');
	})
    header.on("touchmove",function(){
		reci.css('display','none');
	})

}])
