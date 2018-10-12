$(document).ready(function(){
    $(".activity-name").click(function(){
        $('.detail').empty();
        var $popdata = $(this).siblings('.detail-content').clone();
        $('.detail').html($popdata);
        $(".detail").css({"display":"block"});
        $("body").css({"overflow":"hidden"});
        console.log($popdata);
    });

    $(document).on('click', '.close', function () {
        console.log("click")
        $('.detail').css({"display":"none"});
        $("body").css({"overflow":"scroll"});
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("activity-name") 
            && $(e.target).parents(".detail").length === 0) 
        {
            $(".detail").css({"display":"none"});
            $("body").css({"overflow":"scroll"});
        }
    });

    // jquery code for signin and forgot page
    $("input").click(function () {
        $(this).prev().css({ "display": "block", "margin-bottom": "0rem" });
    });

    $("input").blur(function () {
        if ($(this).val().length <= 0) {
            $(this).prev().css({ "display": "none" });   
        }
    });

    $(".vertical-dots").click(function (e) {
        console.log("click");
        e.stopPropagation();
        $(this).next(".notification").css({ "display": "block", "margin-bottom": "0rem" });
    });

    $(document).on('click', function (e) {
        $(".notification").hide();
    });

    // keypress event
    $('input[type="text"]').keypress(function () {
        $("#email-err").show();
    });
    $('input[type="password"]').keyup(function () {
        console.log($(this).val().length);
        if (($(this).val().length) == 0) {
            $("#password-err").show();
        } else {
            $("#password-err").hide();
        }
    });

    // forgot page
    $(".night-mood").click(function(){
        $(this).parents(".notification").css({"background-color":"#333333"});
        $("body").css({"background-color":"#333333"});
    });
});