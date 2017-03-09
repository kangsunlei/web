$(document).ready(function(){
    var jWindow = $(window);
    jWindow.scroll(function(){
        var scrollHeight = jWindow.scrollTop();
        // console.log(scrollHeight,winWidth);
        if(scrollHeight>620){
            $('nav').fadeIn(200);
        }else{
            $('nav').fadeOut(200);
        }

        if (scrollHeight>620 && scrollHeight<1100){
            $('nav a:not(.nav-a-1)').removeClass("a-hover");
            $('.nav-a-1').addClass("a-hover");
        }else if (scrollHeight>1100 && scrollHeight<1580){
            $('nav a:not(.nav-a-2)').removeClass("a-hover");
            $('.nav-a-2').addClass("a-hover");
        }else if (scrollHeight>1580 && scrollHeight<2060){
            $('nav a:not(.nav-a-3)').removeClass("a-hover");
            $('.nav-a-3').addClass("a-hover");
        }else if (scrollHeight>2060 && scrollHeight<2540){
            $('nav a:not(.nav-a-4)').removeClass("a-hover");
            $('.nav-a-4').addClass("a-hover");
        }else if (scrollHeight>2540){
            $('nav a:not(.nav-a-5)').removeClass("a-hover");
            $('.nav-a-5').addClass("a-hover");
        }
    });
    window.onload = function(){
        jWindow.trigger('scroll');
        myResize();
    };
    function myResize() {
        var winWidth = $('body').width();
        if(winWidth<1281){
            $(".head-right").css({"display":"none"});
            $(".arrow-d").css({"display":"none"});
        }else{
            $(".head-right").css({"display":"block"});
            $(".arrow-d").css({"display":"block"});
        }

    }
    jWindow.resize(function(){
        myResize();
    });
    //锚点平滑过渡
    $(function(){
        $('a[href*=#],area[href*=#]').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var $target = $(this.hash);
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                            scrollTop: targetOffset
                        },
                        1000);
                    return false;
                }
            }
        });
    })
});