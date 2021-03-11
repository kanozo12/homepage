$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".move-nav").addClass("active");
            $(".icon-container .tag:nth-child(1) img").attr("src", "../../assets/img/index/white_sitemap.png");
            $(".icon-container .tag:nth-child(2) img").attr("src", "../../assets/img/index/white_setup-dots.png");
        } else {
           $(".move-nav").removeClass("active");
           $(".icon-container .tag:nth-child(1) img").attr("src", "../../assets/img/index/sitemap.png");
           $(".icon-container .tag:nth-child(2) img").attr("src", "../../assets/img/index/setup-dots.png");
        }
    });
});