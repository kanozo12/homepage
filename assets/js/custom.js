$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 129) {
            $("nav").addClass("active");
        } else {
           $("nav").removeClass("active");
        }
    });
});