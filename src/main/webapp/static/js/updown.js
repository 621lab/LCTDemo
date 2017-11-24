/**
 * Created by Administrator on 2017/4/28.
 */
$(function () {
    $("#main_div").css({
        height:$(window).height() * 0.5
    });
    $(".row2").css({
        height:$(window).height() * 0.3
    });
    $(".fa-chevron-down,.fa-chevron-up").click(function () {
        var el = $(this).parents(".widget-title").children(".chart-body");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
            $(".row2").css({
                height:$(window).height() * 0
            });
            $("#main_div").css({
                height:$(window).height() * 0.8
            });
            main.resize();
            main1.resize();
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
            $(".row2").css({
                height:$(window).height() * 0.3
            });
            $("#main_div").css({
                height:$(window).height() * 0.5
            });
            main.resize();
            main1.resize();
        }
    });
    });
