let reviewCards = document.getElementById('review-cards');
let reviewSlider = document.getElementById('slider');
//let cards = reviewSlider.getElementsByTagName('li');
let reviewWidth = document.getElementById('review').offsetWidth;
let prevReviews = document.getElementById('prevB');
let nextReviews = document.getElementById('nextB');
let reviewCardsWidth = reviewCards.clientWidth;
let reviewsToShow = Math.round(reviewCardsWidth/reviewWidth); 

function inicializaVariables(){
    reviewCards = document.getElementById('review-cards');
    reviewSlider = document.getElementById('slider');
    //cards = reviewSlider.getElementsByTagName('li');
    reviewWidth = document.getElementById('review').offsetWidth;
    prevReviews = document.getElementById('prevB');
    nextReviews = document.getElementById('nextB');
    reviewCardsWidth = reviewCards.clientWidth;
    reviewsToShow = Math.round(reviewCardsWidth/reviewWidth);  

}
function main() {

    /* if(window.innnerWidth > 768) {
        reviewsToShow = 3;
    } else {
        reviewsToShow = 1;
    }
    */

    //Dragging
    let isDraggingRev = false, startX, startScrollLeft, timeOutId;
    if(reviewsToShow > 2) {
    const dragStart = (e) => {
        isDraggingRev = true;
        reviewSlider.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = reviewCards.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDraggingRev) return;
        reviewSlider.classList.remove("cursor-grab");
        reviewCards.classList.remove("snap-x");
        reviewCards.scrollLeft = startScrollLeft - (e.pageX - startX);
        reviewSlider.classList.add("cursor-grabbing");
        reviewSlider.classList.add("dragging");
        
    }

    const dragStop = (e) => {
        isDraggingRev = false;
        reviewSlider.classList.remove("cursor-grabbing");
        reviewSlider.classList.add("cursor-grab");
        reviewCards.classList.add("snap-x");
        reviewSlider.classList.remove("dragging");
    }

    reviewCards.addEventListener("mousedown", dragStart);
    reviewCards.addEventListener("mousemove", dragging);
    reviewCards.addEventListener("mouseup", dragStop);
    } else {}
    //endDragging

    //infiniteScroll
    reviewSliderChildren = [...reviewSlider.children];

    reviewSliderChildren.slice(-reviewsToShow).reverse().forEach(card => {
        reviewSlider.insertAdjacentHTML("afterbegin",card.outerHTML);
    });

    reviewSliderChildren.slice(0, reviewsToShow).forEach(card => {
        reviewSlider.insertAdjacentHTML("beforeend",card.outerHTML);
    });

    const infiniteScroll=() => {

        if (reviewCards.scrollLeft === 0) {
            reviewCards.classList.remove("scroll-smooth");
            reviewCards.scrollLeft = reviewCards.scrollWidth - ( 2 * reviewCards.offsetWidth);
            //reviewCards.classList.add("scroll-smooth");
            
        } else if(Math.ceil(reviewCards.scrollLeft) === reviewCards.scrollWidth - reviewCards.offsetWidth){
            
            reviewCards.classList.remove("scroll-smooth");
            reviewCards.scrollLeft = reviewCards.offsetWidth;
            //reviewCards.classList.add("scroll-smooth");
        }

        clearTimeout(timeOutId);
        if(!reviewCards.matches(":hover")) {autoplay();}
        else {reviewCards.classList.remove("scroll-smooth");}
    };
    reviewCards.addEventListener("scroll",infiniteScroll);
    //endInfiniteScroll


    //reviewSlider.style.width = cards.length*cardWidth+'px';

    //cardWidth = document.getElementsById('review').offsetWidth;


    //buttonMovement
    prevReviews.onclick = () => {
        reviewCards.classList.add("scroll-smooth");
        reviewCards.scrollLeft -= reviewWidth;
        reviewCards.classList.remove("scroll-smooth");
    };

    nextReviews.onclick = () => {
        reviewCards.classList.add("scroll-smooth");
        reviewCards.scrollLeft += reviewWidth;
        reviewCards.classList.remove("scroll-smooth");
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
        reviewCards.classList.add("scroll-smooth");
        timeOutId = setTimeout(() => reviewCards.scrollLeft += reviewWidth, 2500);
        //reviewCards.classList.remove("scroll-smooth");
    }

    autoplay();

    reviewCards.addEventListener("mouseenter", () => clearTimeout(timeOutId));
    reviewCards.addEventListener("mouseleave", autoplay);
}

main();

window.addEventListener("resize", function () {
    // Call your script whenever the window is resized
    inicializaVariables();
    main();
});