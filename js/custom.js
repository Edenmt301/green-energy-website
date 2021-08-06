
const readMore = document.querySelector("#readMore");
const more = document.querySelector("#hidden");
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

readMore.addEventListener('click',expandMore);

function expandMore(e){
    e.preventDefault();
    if (more.style.display === "none"){
        more.style.display = "block"
        readMore.innerHTML="Read Less";
    }
    else{
        more.style.display = "none"
        readMore.innerHTML="Read More";
    }

}
const sectionOneOptions = {
      rootMargin: "-200px 0px 0px 0px"
    };
    
    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("nav-scrolled");
        } else {
          header.classList.remove("nav-scrolled");
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);
    
    
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}