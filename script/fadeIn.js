window.addEventListener("DOMContentLoaded", ()=>{
    const scrollTrigger = document.querySelectorAll(".recipes__container");

    //If it's greater than 0
    if (scrollTrigger.length) {
      scrollFadeIn(scrollTrigger);
    }

    function scrollFadeIn(trigger) {
      window.addEventListener("scroll", () => {
        for (let i = 0; i < trigger.length; i++) {
        //getBoundingClientRect Get the size of an element
        //top topmost window in the browser
          let position = trigger[i].getBoundingClientRect().top;
          let scroll = window.pageYOffset || document.documentElement.scrollTop;
          let offset = position + scroll;
          windowHeight = window.innerHeight;

          if (scroll >= offset - windowHeight + 200) {
            trigger[i].classList.add("is-active");
          }
        }
      });
    }

})

