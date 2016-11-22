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
	}).when('/comment',{
		templateUrl:'pages/shuye/Allshuping/comment.html'
	}).when('/index',{
		templateUrl:'pages/mine/shezhi/index.html'
	}).when('/pinglunOK',{
		templateUrl:'pages/shuye/pinglunOK/pinglunOK.html'
	}).when('/yijianfankui',{
		templateUrl:'pages/mine/yijianfankui/feedback.html'
	}).when('/xitongxinxi',{
		templateUrl:'pages/mine/xitongxinxi/xitongxinxi.html'
	}).when('/wodexinxi',{
		templateUrl:'pages/mine/wodexinxi/wodexinxi.html'
	}).when('/personal',{
		templateUrl:'pages/mine/zuixinbanben/personal.html'
	}).when('/banbenxinxi',{
		templateUrl:'pages/mine/banbenxinxi/version.html'
	}).when('/sousu',{
		templateUrl:'html/zhanghao/bendi/bendi.html'
	}).when('/lijiReading',{
		templateUrl:'pages/bookcity/lijiReading/index.html'
	}).when('/fuzhuangsheji',{
		templateUrl:'html/zhanghao/reci/reci.html'
	}).when('/saixuan',{
		templateUrl:'html/zhanghao/saixuan/saixuan.html'
	}).when('/xianxia',{
		templateUrl:'pages/bookcity/reReading/lixuewu.html'
	}).when('/zhoubang',{
		templateUrl:'pages/bookcity/zhoubang/lixuewu.html'
	}).when('/bangding',{
		templateUrl:'pages/mine/bangdingshouji/bangding.html'
	}).when('/shezhimima',{
		templateUrl:'html/wangqian/shezhimima.html'
	}).when('/ziliao',{
		templateUrl:'html/wangqian/ziliao.html'
	}).when('/bookmark',{
		templateUrl:'html/guying/bookmark.html'
	}).when('/mynote',{
		templateUrl:'html/guying/mynote.html'
	}).when('/selectbookmark',{
		templateUrl:'html/guying/selectbookmark.html'
	}).when('/selectnote',{
		templateUrl:'html/guying/selectnote.html'
	}).when('/mulu',{
		templateUrl:'pages/reading/mulu/mulu.html'
	}).when('/Mybiji',{
		templateUrl:'pages/reading/Mybiji/Mybiji.html'
	}).when("/close",{
		templateUrl:'html/wangling/close.html'
	})
}])
