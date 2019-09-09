/*global $ */
$(document).ready(function () {

    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before(`<a href=\"#\" class=\"menu-mobile\">       
            <img src="./assets/images/logo_morweb_home.png" alt="logo">
        </a>`);

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 943) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function (e) {
        if ($(window).width() <= 943) {
            $(this).children("ul").fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
    // 自动下拉变色

    function realeFunc1(e) {
        //可见区域顶部高度
        var visibleTop = window.scrollY;
        // var centerY = obj.offsetTop + (obj.offsetHeight / 2);
        // var joinXMain=document.documentElement.clientHeight/2;
        // var joinXMin = document.documentElement.clientHeight / 3 - 50;
        //当滚动条下滑超过150时，使导航条变成绝对定位，变换导航条的背景颜色
        var joinXMin = 150;
        if (visibleTop > joinXMin) {
            $('.header_main').attr('style', 'position:fixed;top:0;top:0;left: 0;z-index:12;width:100%;background-image: url("./assets/images/bg_morweb_morinformation_topnav.png");background-size: cover;"background-repeat": "no-repeat";"background-position": center;')
        } else {
            $('.header_main').attr('style', '')
        }
    }
    // footer定位底部
    function isFooterbottom() {
        var clientH = document.documentElement.clientHeight;
        var bodyH = document.body.scrollHeight;
        if (clientH > bodyH){
            $('#footer').attr('style', 'margin-top:' + (clientH - bodyH+50) + 'px');
        }else{
            return false
        }
    }
    // logo返回首页
    $('.header_main .logo').on('click',function(){
        location.href='./index.html';
    })
    // document.addEventListener('click', isFooterbottom);
    //isFooterbottom();
    window.addEventListener('scroll', debounce(realeFunc1,500), false)
    window.addEventListener('scroll', throttle(realeFunc1, 100,100), false)
    //mobie下a跳转
    $('.menu > ul > li a').on('click', function () {
        location.href = $(this).attr('href');

    })
    //返回首页
    $('.menu-mobile > img').on('click', function () {
        location.href = './index.html';

    }) 
    //hover
    document.body.addEventListener('touchstart', function(){ });
});