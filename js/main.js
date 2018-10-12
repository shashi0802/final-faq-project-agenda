// // $(document).ready(function () {
var fun2 = function () {
    console.log("I am in document ready");
    $(".container").parent().children("#calling-id").eq(0).addClass("time-even");
    $(".container").parent().children("#calling-id").eq(1).addClass("time-odd");
}

// // });

$(window).on('load', function () {
    // var funct1 = function () {

    // $(document).ready(function () {
    // var fun2 = function () {
    console.log("I am in document ready");
    $(".scroll-tag").eq(0).addClass("time-even");
    console.log("ssssssssssssssssssssssssssss", $(".scroll-tag"));
    $(".scroll-tag").eq(1).addClass("time-odd");
    // }
    // });

    $("#loader").fadeOut("slow");
    $("#wrapper-loader").css({ "display": "block" });

    $(document).on("click", ".author-name", function () {
        $('.detail').empty();
        var $popdata = $(this).parents('.row').next('.detail-content').clone()
        var $htmllll = $('.detail').html($popdata[0]);
        $(".detail").fadeIn();
        $("body").css({ "overflow": "hidden" });
    });

    $(document).on('click', '.close', function () {
        console.log("click")
        $('.detail').fadeOut();
        $("body").css({ "overflow": "scroll" });
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("activity-name")
            && $(e.target).parents(".detail").length === 0) {
            $(".detail").fadeOut();
            $("body").css({ "overflow": "scroll" });
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
    $(".night-mood").click(function () {
        $(this).parents(".notification").css({ "background-color": "#333333" });
        $("body").css({ "background-color": "#333333" });
    });
    // }
});

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    console.log("Page top : ", pageTop);
    var tags = $(".scroll-tag");
    console.log("tagssssss: ", tags);
    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        console.log("tag : ", tag);
        console.log("tag position : ", $(tag).position().top);
        if (pageTop <= 90) {

        }
        else if ($(tag).position().top <= pageTop) {
            $(tag).addClass("time-even");
            $(tag).next().addClass("time-odd");
            console.log("in iff block");
        }
        else {
            $(tag).removeClass("time-even");
            $(tag).next().removeClass("time-odd");
        }
    }
})