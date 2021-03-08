$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 129) {
            $("nav").addClass("active");
        } else {
           $("nav").removeClass("active");
        }
    });
});

// google map
function initMap() {
    var seoul = { lat: 37.538326 ,lng: 127.077379 };
    map = new google.maps.Map( document.getElementById('map'), {
        zoom: 16,
        center: seoul
      });
  
    new google.maps.Marker({
      position: seoul,
      map: map,
      label: "솔모 정보 기술"
    });
  }