;$(function () {
    'use strict';

    var sidebar = $('.sidebar');
    var mask = $('.mask');
    var sidebar_trigger = $('#sidebar_trigger');
    var back_btn = $('.back-top');

    sidebar_trigger.on('click', showSideBar);
    mask.on('click', hideSideBar);
    back_btn.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 800);
    });
    $(window).on('scroll',function () {
       if($(window).scrollTop()>$(window).height()){
           back_btn.fadeIn();
       }else{
           back_btn.fadeOut();
       }
    });
    $(window).trigger('scroll');
    function showSideBar() {
        mask.fadeIn();
        sidebar.animate({'right': 0});
    }

    function hideSideBar() {
        mask.fadeOut();
        sidebar.animate({'right': -sidebar.width()});
    }

});