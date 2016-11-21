var app=angular.module('reader',['ngRoute']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'pages/enter/login/login.html'
	}).when('/wodeshujia',{
		templateUrl:'pages/shujia/wodeshujia/shelf.html'
	}).when('/list',{
		templateUrl:'pages/bookcity/bangdan/list.html'
	}).when('/selected',{
		templateUrl:'pages/bookcity/jingxuan/selected.html'
	}).when('/class',{
		templateUrl:'pages/bookcity/fenlei/class.html'
	}).when('/class',{
		templateUrl:'pages/bookcity/fenlei/class.html'
	})
}])
