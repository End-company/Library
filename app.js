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
	}).when('/sex',{
		templateUrl:'pages/mine/wodeziliao/shexingbie.html'
	}).when('/toux',{
		templateUrl:'pages/mine/wodeziliao/shetouxiang.html'
	}).when('/pinglunOK',{
		templateUrl:'pages/shuye/pinglunOK/pinglunOK.html'
	}).when('/pingOK',{
		templateUrl:'pages/shuye/pinglunOK/pingOK.html'
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
		templateUrl:'html/zhanghao/reci/reci.html',
		controller:"ceciCtrl",
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
	}).when('/yuanfenBook1',{
		templateUrl:'pages/shuye/yuanfenBook1/yuanfenBook1.html'
	}).when('/yuanfenBook3',{
		templateUrl:'pages/shuye/yuanfenBook3/yuanfenBook3.html',
		controller:"yuanfenBook3Ctrl"
	}).when('/wodebiji',{
		templateUrl:'pages/shuye/wodebiji/wodebiji.html',
		controller:"wodebijiCtrl"
	}).when('/close',{
		templateUrl:'html/wangling/close.html'
	}).when("/clear",{
		templateUrl:'html/wangling/clear.html'
	}).when("/pianhao",{
		templateUrl:'pages/mine/pianhao/pianhao.html'
	}).when("/Reading1",{
		templateUrl:'pages/reading/Reading1/reading1.html'
	}).when("/Reading2",{
		templateUrl:'pages/reading/Reading2/reading2.html'
	}).when("/Reading3",{
		templateUrl:'pages/reading/Reading3/reading3.html'
	}).when("/Reading4",{
		templateUrl:'pages/reading/Reading4/reading4.html'
	}).when("/Reading5",{
		templateUrl:'pages/reading/Reading5/reading5.html'
	}).when("/Reading6",{
		templateUrl:'pages/reading/Reading6/reading6.html'
	}).when("/gerenCenter",{
		templateUrl:'pages/mine/gerenCenter/gerenCenter.html'

	}).when("/mulu",{
		templateUrl:'pages/reading/mulu/mulu.html'
	}).when("/Mybiji",{
		templateUrl:'pages/reading/Mybiji/Mybiji.html'
	})
}])
