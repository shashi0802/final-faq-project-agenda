// $( window ).load(function() {
// console.log("sdfbhgjfcghjdsvcfhdj")
    

//     $(".author-name").click(function () {
//     console.log("i m inside")
//     $('.detail').empty();
//     var $popdata = $(this).parents('.row').next('.detail-content').clone()
//     var $htmllll = $('.detail').html($popdata[0]);
//     $(".detail").fadeIn();
//     $("body").css({"overflow":"hidden"});
// });
// });

// $(document).ready(function() {
//     $("h3").click(function(){
//         alert("The paragraph was clicked.");
//     });
// });


$(window).on('load', function() {
    $(document).on("click", ".author-name", function() {
       $('.detail').empty();
     var $popdata = $(this).parents('.row').next('.detail-content').clone()
     var $htmllll = $('.detail').html($popdata[0]);
     $(".detail").fadeIn();
     $("body").css({"overflow":"hidden"});
    });

    
    $(document).on('click', '.close', function () {
        console.log("click")
        $('.detail').fadeOut();
        $("body").css({"overflow":"scroll"});
    });

    $(document).click(function (e) {
        if (!$(e.target).hasClass("activity-name") 
            && $(e.target).parents(".detail").length === 0) 
        {
            $(".detail").fadeOut();
            $("body").css({"overflow":"scroll"});
        }
    });
});