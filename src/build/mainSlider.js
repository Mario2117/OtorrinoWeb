let sliderContainer = document.getElementById('carrusel');
let slider = document.getElementById('slider_image');
//let cards = slider.getElementsByTagName('li');
let imageWidth = document.getElementById('bg_image').offsetWidth;
let botonPrev = document.getElementById('preB');
let botonNext = document.getElementById('nexB');
let sliderContainerWidth = sliderContainer.clientWidth;
let elementsToShow = Math.round(sliderContainerWidth/imageWidth);

function initializeVariables() {
    sliderContainer = document.getElementById('carrusel');
    slider = document.getElementById('slider_image');
    //cards = slider.getElementsByTagName('li');
    imageWidth = document.getElementById('bg_image').offsetWidth;
    botonPrev = document.getElementById('preB');
    botonNext = document.getElementById('nexB');
    sliderContainerWidth = sliderContainer.clientWidth;
    elementsToShow = Math.round(sliderContainerWidth/imageWidth);  
}

function main() {
    //Dragging
    let isDragging = false, startX, startScrollLeft, timeOutId;
    //if(elementsToShow > 2) {
    const dragStart = (e) => {
        isDragging = true;
        slider.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = sliderContainer.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragging) return;
        slider.classList.remove("cursor-grab");
        sliderContainer.classList.remove("snap-x");
        sliderContainer.scrollLeft = startScrollLeft - (e.pageX - startX);
        slider.classList.add("cursor-grabbing");
        slider.classList.add("dragging");
        
    }

    const dragStop = (e) => {
        isDragging = false;
        slider.classList.remove("cursor-grabbing");
        slider.classList.add("cursor-grab");
        sliderContainer.classList.add("snap-x");
        slider.classList.remove("dragging");
    }

    sliderContainer.addEventListener("mousedown", dragStart);
    sliderContainer.addEventListener("mousemove", dragging);
    sliderContainer.addEventListener("mouseup", dragStop);
    //} else {}
    //endDragging

    //infiniteScroll
    sliderChildren = [...slider.children];

    sliderChildren.slice(-elementsToShow).reverse().forEach(card => {
        slider.insertAdjacentHTML("afterbegin",card.outerHTML);
    });

    sliderChildren.slice(0, elementsToShow).forEach(card => {
        slider.insertAdjacentHTML("beforeend",card.outerHTML);
    });

    const infiniteScroll=() => {

        if (sliderContainer.scrollLeft === 0) {
            sliderContainer.classList.remove("scroll-smooth");
            sliderContainer.scrollLeft = sliderContainer.scrollWidth - ( 2 * sliderContainer.offsetWidth);
            //sliderContainer.classList.add("scroll-smooth");
            
        } else if(Math.ceil(sliderContainer.scrollLeft) === sliderContainer.scrollWidth - sliderContainer.offsetWidth){
            
            sliderContainer.classList.remove("scroll-smooth");
            sliderContainer.scrollLeft = sliderContainer.offsetWidth;
            //sliderContainer.classList.add("scroll-smooth");
        }

        clearTimeout(timeOutId);
        if(!sliderContainer.matches(":hover")) {autoplay();}
        else {sliderContainer.classList.remove("scroll-smooth");}
    };
    sliderContainer.addEventListener("scroll",infiniteScroll);
    //endInfiniteScroll


    //slider.style.width = cards.length*cardWidth+'px';

    //cardWidth = document.getElementsById('review').offsetWidth;


    //buttonMovement
    botonPrev.onclick = () => {
        sliderContainer.classList.add("scroll-smooth");
        sliderContainer.scrollLeft -= imageWidth;
        sliderContainer.classList.remove("scroll-smooth");
    };

    botonNext.onclick = () => {
        sliderContainer.classList.add("scroll-smooth");
        sliderContainer.scrollLeft += imageWidth;
        sliderContainer.classList.remove("scroll-smooth");
    };
    /*
    for (let index = 0; index < cards.length; index++) {
        const element = cards[index];
        element.style.width = cardWidth+'px';
        
    }
    */

    //endButtonMovement

    //autoplay
    const autoplay = () => {
        sliderContainer.classList.add("scroll-smooth");
        timeOutId = setTimeout(() => sliderContainer.scrollLeft += imageWidth, 2500);
        //sliderContainer.classList.remove("scroll-smooth");
    }

    autoplay();

    sliderContainer.addEventListener("mouseenter", () => clearTimeout(timeOutId));
    sliderContainer.addEventListener("mouseleave", autoplay);

}

main();

window.addEventListener("resize", function () {
    // Call your script whenever the window is resized
    console.log("window resized");
    initializeVariables();
    main();
});