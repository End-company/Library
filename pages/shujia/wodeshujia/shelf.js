app.controller('shelfCtrl',['$scope',function($scope){
	
}]);
app.directive('lunbol',[function(){
	return{
		restrict:'A',
		replace:true,
		transclude:true,
		template:'<div class="booklunbo"><div ng-transclude></div></div>',
		link:function($secope,el){
			var box=$('.bookList');
//			var lis=$("li .booklunbo")
			var flag=true;
			var start;
			box.on('touchstart',function(e){
				start=e.originalEvent.changedTouches[0].clientX;
			})
			box.on('touchend',function(e){
				end=e.originalEvent.changedTouches[0].clientX;
				var width=$('.float:first').outerWidth();
				var n=0;
				if(end+50<start){
					box.stop().animate({'left':-width},function(){
						box.append($('.float:first')).css({'left':0});
						flag=true;
					})
					flag=false;
				}else if(end-50>start){
					$('.float:last').insertBefore($('.float:first'));
					box.css({'left':-width}).animate({'left':0},function(){
						  flag=true; 
					})
					flag=true;
				}
			})
		}
	}
}]);