const tabs=document.querySelectorAll("[data-tab-target]")
const tabContents=document.querySelectorAll("[data-tab-content]")

// const tabChange = () =>{
// }

tabs.forEach(tab=>{
    tab.addEventListener("click",() =>{
        const target=document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent=>
            {tabContent.classList.remove("active");
        })

        tabs.forEach(tab=>
            {tab.classList.remove("active");
        })

        tab.classList.add("active");
        target.classList.add("active");

    })
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activo", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activo";
}


