$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".move-nav").addClass("active");
            $(".icon-container img:nth-child(1)").attr("src", "../../assets/img/index/white_sitemap.png");
            $(".icon-container img:nth-child(2)").attr("src", "../../assets/img/index/white_setup-dots.png");
        } else {
           $(".move-nav").removeClass("active");
           $(".icon-container img:nth-child(1)").attr("src", "../../assets/img/index/sitemap.png");
           $(".icon-container img:nth-child(2)").attr("src", "../../assets/img/index/setup-dots.png");
        }
    });
});