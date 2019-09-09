// JavaScript Document
//导航-效果
$(".header_nav_xf>ul>li").mouseenter(function(){
	// $(this).children(".zuoYouFen").stop().slideDown();
	$(this).find(".nav_z").stop().slideDown();
});
$(".header_nav_xf>ul>li").mouseleave(function(){
	// $(this).children(".zuoYouFen").stop().slideUp();
	$(this).find(".nav_z").stop().slideUp();
});

$(".menu").click(function(){
	$(".menu span").eq(1).toggleClass("span_class_opacity");
	$(".menu span").eq(0).toggleClass("span_class_ratate1");
	$(".menu span").eq(2).toggleClass("span_class_ratate2");
	$(".nav_xiao_tc").slideToggle();
	if($(".nav_xiao_tc ul li ol").is(":visible") == true){
		$(".nav_xiao_tc ul li ol").slideUp();
	}
});
$(".nav_xiao_tc ul>li").click(function(){
	$(this).siblings("li").find("ol").slideUp();
	$(this).find("ol").slideToggle();
});
	//导航-效果
	//客户案例-效果
$(".anli_nr li").mouseenter(function(){
	$(".anli_nr_xia ul li").hide();
	$(this).siblings("li").find("span").hide();
	$(this).find("span").show();
	var th_eq = $(this).index();
	$(".anli_nr_xia ul li").eq(th_eq).show();
});
	//客户案例-效果
$(".zhineng_logo li span").hide();
$(".zhineng_logo li").eq(0).find("span").show();

$(function() {
	$("img.lazy").lazyload({effect: "fadeIn"});
});
