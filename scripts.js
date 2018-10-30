document.getElementById('opensidebar_id').addEventListener("click",openSidebar)
document.getElementById('closesidebar_id').addEventListener("click",closeSidebar)


function openSidebar(){
    document.getElementById("menuWrapper").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("menuWrapper").style.width = "0";
}


/*Slideshow*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("coverSlides");

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
