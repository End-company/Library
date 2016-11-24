app.controller('wodebijiCtrl',['$scope',function($scope){
	
}]);
app.directive('lunbo1',[function(){
	return{
		restrict:'A',
		replace:true,
		transclude:true,
		template:'<div class="books"><div ng-transclude></div></div>',
		link:function($secope,el){
			var boxes=$('.booking');
			var flag=true;
			var start;
			boxes.on('touchstart',function(e){
				start=e.originalEvent.changedTouches[0].clientX;
			})
			boxes.on('touchend',function(e){
				end=e.originalEvent.changedTouches[0].clientX;
				var width=$('.tu:first').outerWidth();
				var n=0;
				if(end+50<start){
					boxes.stop().animate({'left':-width},function(){
						boxes.append($('.tu:first')).css({'left':0});
						flag=true;
					})
					flag=false;
				}else if(end-50>start){
					$('.tu:last').insertBefore($('.tu:first'));
					boxes.css({'left':-width}).animate({'left':0},function(){
						  flag=true; 
					})
					flag=true;
				}
			})
		}
	}
}]);
