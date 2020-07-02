function reveal(){
    var class_nm = document.getElementById("menu");
    class_nm.classList.toggle("menu-active");
}



new fullpage('#fullpage',{
    
            scrollHorizontally: true,
            navigation: true,
            controlArrows: false,
            slidesNavigation: true,
            keyboardScrolling: true,
            // onLeave: (origin,destination,direction) =>{
            //     const section = destination.item;
            //     const title = section.querySelector('.title');
            //     const tl = new TimelineMax({ delay: 1.0 });
            //     tl.fromTo(title, 0.5, { y: "-50", opacity:0}, { y:0, opacity:1});
            // }
});

TweenMax.from(".logo", 1, {
    delay: 0.5,
    opacity:0,
    x:-30,
    ease: Expo.easeInOut
});

TweenMax.from(".about", 1, {
    delay: 1,
    opacity:0,
    y:-30,
    ease: Expo.easeInOut
});

TweenMax.from(".menu-icon", 1, {
    delay: 1.3,
    opacity:0,
    x:30,
    ease: Expo.easeInOut
});

TweenMax.from(".contact", 1, {
    delay: 1.5,
    opacity:0,
    y:-30,
    ease: Expo.easeInOut
});

TweenMax.from(".social-m", 1, {
    delay: 1.8,
    opacity:0,
    y:40,
    ease: Expo.easeInOut
});