$(window).load(function () {

    let sync_token = localStorage.getItem("sync_token")
    let pagination = localStorage.getItem("pagination_token")

    $(document).on("click", ".author-img-spons", function () {
        $('.sponexhi-details').empty();
        var $popdata = $(this).parents('.row').next('.sponsors-detail-page').clone()
        var $htmllll = $('.sponexhi-details').html($popdata[0]);
        $(".sponexhi-details").find(".sponsors-detail-page").css({ "display": "block" });

        $(".sponexhi-details").fadeTo(500, 1);
    });
   
    $(document).on("click", ".close", function(){
        $(".sponexhi-details").hide();
    });

    if (sync_token) {
        render_session_lists()
    } else {
        console.log("Data is not present")
    }

});


function render_session_lists() {


    // $(".session-list-items").empty();
    //$(".session-detail-title").show();

    var sponsors_exhibitors = localStorage.getItem("blt3095c4e04a3d69e6.development.sponsors_exhibitors");
    var assets = localStorage.getItem("blt3095c4e04a3d69e6.development.assets");

    var sponsors_exhibitors_data = JSON.parse(sponsors_exhibitors);
    var assets_data = JSON.parse(assets);
    var str = ''
    for (var i = 0; i < sponsors_exhibitors_data.length; i++) {
        for (var j = 0; j < assets_data.length; j++) {
            console.log("datatatataat", sponsors_exhibitors_data[0].logo)
            if (sponsors_exhibitors_data[i].logo == assets_data[j].uid) {
                str += "<div class='container'>"
                str += "<div class=row>"
                str += "<div class=author-img-spons>"
                str += "<img src=" + assets_data[j].url + ">"
                str += "</div>"
                str += "</div>"
                str += "<div class=sponsors-detail-page>"
                str += "<span class=close>&times;</span>"
                str += "<h2>" + sponsors_exhibitors_data[i].title + "</h2>"
                str += "<h3>" + sponsors_exhibitors_data[i].bio + "</h3>"
                str += "<h4>" + sponsors_exhibitors_data[i].area_focus + "</h4>"
                str += "<h4>" + sponsors_exhibitors_data[i].booth_number + "</h3>"
                if (sponsors_exhibitors_data[i].display_image == assets_data[j].uid)
                    str += "<div class=author-img>"
                str += "<img src=" + assets_data[j].url + ">"
                str += "</div>"
                str += "</div>"
                str += "</div>"
            }
        }

        $(".sponsors ").append(str)
    }

}
