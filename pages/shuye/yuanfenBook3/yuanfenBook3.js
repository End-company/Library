app.controller('yuanfenBook3Ctrl',['$scope',function($scope){
	
}]);
app.directive('lunbo',[function(){
	return{
		restrict:'A',
		replace:true,
		transclude:true,
		template:'<div class="books"><div ng-transclude></div></div>',
		link:function($secope,el){
			var box=$('.booking');
			var flag=true;
			var start;
			box.on('touchstart',function(e){
				start=e.originalEvent.changedTouches[0].clientX;
			})
			box.on('touchend',function(e){
				end=e.originalEvent.changedTouches[0].clientX;
				var width=$('.tu:first').outerWidth();
				var n=0;
				if(end+50<start){
					box.stop().animate({'left':-width},function(){
						box.append($('.tu:first')).css({'left':0});
						flag=true;
					})
					flag=false;
				}else if(end-50>start){
					$('.tu:last').insertBefore($('.tu:first'));
					box.css({'left':-width}).animate({'left':0},function(){
						  flag=true; 
					})
					flag=true;
				}
			})
		}
	}
}]);
