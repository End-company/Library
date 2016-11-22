$(function(){
	var search=$('.search');
	var reci=$('.reci');
	var header=$('#header')
	search.on('touchstart',function(e){
		reci.css('display','block');
	})
    header.on("touchmove",function(){
		reci.css('display','none');
	})
})
app.controller("ceciCtrl",["$scope",function($scope){
	 //把你所有需要写的 JS代码全部写在这里面
	 
}])