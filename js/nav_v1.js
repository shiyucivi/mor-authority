// JavaScript Document
var navArray = new Array(
	{
		"name"	: "对话服务平台",
		"url"	: "talk_platform.html",
		"backlinks" : "1",
		"data"	: []
	},
	{
		"name"	: "核心技术",
		"url"	: "technology.html",
		"backlinks" : "1",
		"data"	: []
	},
	{
		"name"	: "解决方案",
		"url"	: "",
		"backlinks" : "1",
		"data1Name"	: "AI+方案",
		"data2Name"	: "设备方案",
		"data3Name":"行业方案",
		"data"	: [
			{
				"name"	: "大脑方案",
				"url"	: "ai+.html",
				"backlinks" : "1",
				"cifen"	: "1"
			},
			{
				"name"	: "智能车机",
				"url"	: "car_machine.html",
				"backlinks" : "1",
				"cifen"	: "2"
			},
			{
				"name"	: "智能音箱",
				"url"	: "speaker.html",
				"backlinks" : "1",
				"cifen"	: "2"
			},
			{
				"name"	: "智能电视",
				"url"	: "smart_tv.html",
				"backlinks" : "1",
				"cifen"	: "2"
			},
			{
				"name"	: "智能耳机",
				"url"	: "head_phone.html",
				"backlinks" : "1",
				"cifen"	: "2"
			},
			{
				"name"	: "智能机器人",
				"url"	: "robot.html",
				"backlinks" : "1",
				"cifen"	: "2"
			},
			{
				"name"	: "手机助手",
				"url"	: "phone_voice_assist.html",
				"backlinks" : "",
				"cifen"	: "2"
			},
			{
				"name"	: "车家互联",
				"url"	: "car_home.html",
				"backlinks" : "1",
				"cifen"	: "3"
			},
			{
				"name"	: "汽车售前",
				"url"	: "car_beforesell.html",
				"backlinks" : "1",
				"cifen"	: "3"
			},
			{
				"name"	: "智能家居",
				"url"	: "home_life.html",
				"backlinks" : "1",
				"cifen"	: "3"
			},
			{
				"name"	: "智能社区",
				"url"	: "community.html",
				"backlinks" : "1",
				"cifen"	: "3"
			},
			{
				"name"	: "智能厨房",
				"url"	: "kitchen.html",
				"backlinks" : "1",
				"cifen"	: "3"
			},
			{
				"name"	: "智慧养老",
				"url"	: "oldlife.html",
				"backlinks" : "1",
				"cifen"	: "3"
			},{
				"name"	: "智能酒店",
				"url"	: "hotel.html",
				"backlinks" : "1",
				"cifen"	: "3"
			}
		]
	},
	{
		"name"	: "蓦然新闻",
		"url"	: "news.html",
		"backlinks" : "1",
		"data"	: []
	},
	{
		"name"	: "关于公司",
		"url"	: "",
		"backlinks" : "1",
		"data"	: [
			{
				"name"	: "公司介绍",
				"url"	: "about.html",
				"backlinks" : "1"
			},{
				"name"	: "联系我们",
				"url"	: "contact.html",
				"backlinks" : "1"
			}
		]
	}
	,{
		"name"	: "加入我们",
		"url"	: "joinus.html",
		"backlinks" : "0",
		"data"	: []
	}
);
var html = "";
$.each(navArray,function(i,v){
	html += '<li>';
	if(v.data.length > 0 && v.data.length <= 5){
		html += '' + v.name + ''
			 +	'<ol class="nav_z">';
			$.each(v.data,function(ii,vv){
				html +=	'<li>';
				if(vv.backlinks == 1){
					html +=	'<a href="' + vv.url + '">' + vv.name + '</a>';
				}else{
					html +=	'<a href="' + vv.url + '" target="_blank">' + vv.name + '</a>';
				}
				html +=	'</li>';
			})
		html +=	'</ol>';
	}else if(v.data.length > 5){
		html += '' + v.name + ''
			 +	'<div class="zuoYouFen">'
			 +		'<ol class="nav_z"><p>' + v.data1Name + '</p>';
			$.each(v.data,function(ii,vv){
				if(vv.backlinks == 1 && vv.cifen == 1){
					html +=	'<li><a href="' + vv.url + '">' + vv.name + '</a></li>';
				}else if(vv.backlinks == 0 && vv.cifen == 1){
					html +=	'<li><a href="' + vv.url + '" target="_blank">' + vv.name + '</a></li>';
				}
			})
		html +=	'</ol>'
			 +	'<ol class="nav_z">'
			 +		'<p>' + v.data2Name + '</p>';
			$.each(v.data,function(ii,vv){
				if(vv.backlinks == 1 && vv.cifen == 2){
					html +=	'<li><a href="' + vv.url + '">' + vv.name + '</a></li>';
				}else if(vv.backlinks == 0 && vv.cifen == 2){
					html +=	'<li><a href="' + vv.url + '" target="_blank">' + vv.name + '</a></li>';
				}
			})
		html +=	'</ol>'
			+	'<ol class="nav_z">'
			+		'<p>' + v.data3Name + '</p>';
		 $.each(v.data,function(ii,vv){
			 if(vv.backlinks == 1 && vv.cifen == 3){
				 html +=	'<li><a href="' + vv.url + '">' + vv.name + '</a></li>';
			 }else if(vv.backlinks == 0 && vv.cifen == 3){
				 html +=	'<li><a href="' + vv.url + '" target="_blank">' + vv.name + '</a></li>';
			 }
		 })
		html +=	'</ol><h6 class="clearfix" style="display:none"></h6></div>';
	}else{
		if(v.backlinks == 1){
			html += '<a href="' + v.url + '">' + v.name + '</a>';
		}else{
			html += '<a href="' + v.url + '" target="_blank">' + v.name + '</a>';
		}
	}
	html += '</li>';
})
$(".header_nav_xf>ul").html(html);
$(".nav_xiao_tc>div>ul").html(html);

