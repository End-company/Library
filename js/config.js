app.config([
	'$routeProvider',
	function($routeProvider){
		// xxxxxxxx.app.html#/
		// 1.要在服务器环境下运行
		// 2.路由器可以不嵌套，即多层次的    /shucheng/redian
		// 3.每添加一个路由，  app.html    ccc    js
		$routeProvider.when('/',{
            templateUrl:'pages/enter/login/login.html',
            controller:'loginCtrl'
		}).when('/zhuce',{
			templateUrl:'pages/enter/register/register.html',
            controller:'registerCtrl'
		}).when('/zhaohui',{
			templateUrl:'pages/enter/getPassWord/getPassWord.html',
            controller:'getPassWordCtrl'
	    }).when('/xiugai',{
			templateUrl:'pages/enter/changePassWord/changePassWord.html',
            controller:'changePassWordCtrl'
	    })
	}
]);