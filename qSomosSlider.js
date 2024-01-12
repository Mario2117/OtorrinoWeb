let somosCards = document.getElementById('somos-cards');
let somosSlider = document.getElementById('somos-slider');
//let cards = somosSlider.getElementsByTagName('li');
let somosWidth = document.getElementById('somos').offsetWidth;
let prevsomoss = document.getElementById('prevBso');
let nextsomoss = document.getElementById('nextBso');
let somosCardsWidth = somosCards.clientWidth;
let somossToShow = Math.round(somosCardsWidth/somosWidth); 

somosSliderChildren = [...somosSlider.children];

somosSliderChildren.slice(-somossToShow).reverse().forEach(card => {
    somosSlider.insertAdjacentHTML("afterbegin",card.outerHTML);
});

somosSliderChildren.slice(0, somossToShow).forEach(card => {
    somosSlider.insertAdjacentHTML("beforeend",card.outerHTML);
});

function inicializaVariables(){
    somosCards = document.getElementById('somos-cards');
    somosSlider = document.getElementById('somos-slider');
    //cards = somosSlider.getElementsByTagName('li');
    somosWidth = document.getElementById('somos').offsetWidth;
    prevsomoss = document.getElementById('prevBso');
    nextsomoss = document.getElementById('nextBso');
    somosCardsWidth = somosCards.clientWidth;
    somossToShow = Math.round(somosCardsWidth/somosWidth);  

}
function main() {

    /* if(window.innnerWidth > 768) {
        somossToShow = 3;
    } else {
        somossToShow = 1;
    }
    */

    //Dragging
    let isDraggingRev = false, startX, startScrollLeft, timeOutId;
    if(somossToShow < 2) {

        //autoplay
        /* const autoplay = () => {
            somosCards.classList.add("scroll-smooth");
            timeOutId = setTimeout(() => somosCards.scrollLeft += somosWidth, 3500);
            //somosCards.classList.remove("scroll-smooth");
        }

        autoplay();

        somosCards.addEventListener("mouseenter", () => clearTimeout(timeOutId));
        somosCards.addEventListener("mouseleave", autoplay); */
        //infiniteScroll


        const infiniteScroll=() => {

            if (somosCards.scrollLeft === 0) {
                somosCards.classList.remove("scroll-smooth");
                somosCards.scrollLeft = somosCards.scrollWidth - ( 2 * somosCards.offsetWidth);
                //somosCards.classList.add("scroll-smooth");
                
            } else if(Math.ceil(somosCards.scrollLeft) === somosCards.scrollWidth - somosCards.offsetWidth){
                
                somosCards.classList.remove("scroll-smooth");
                somosCards.scrollLeft = somosCards.offsetWidth;
                //somosCards.classList.add("scroll-smooth");
            }

            clearTimeout(timeOutId);
            if(!somosCards.matches(":hover")) {/* autoplay(); */}
            else {somosCards.classList.remove("scroll-smooth");}
        };
        somosCards.addEventListener("scroll",infiniteScroll);
        //endInfiniteScroll


        //somosSlider.style.width = cards.length*cardWidth+'px';

        //cardWidth = document.getElementsById('somos').offsetWidth;


        //buttonMovement
        prevsomoss.onclick = () => {
            somosCards.classList.add("scroll-smooth");
            somosCards.scrollLeft -= somosWidth;
            somosCards.classList.remove("scroll-smooth");
        };

        nextsomoss.onclick = () => {
            somosCards.classList.add("scroll-smooth");
            somosCards.scrollLeft += somosWidth;
            somosCards.classList.remove("scroll-smooth");
        };
        /*
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            element.style.width = cardWidth+'px';
            
        }
        */

        //endButtonMovement


    } else {}
}


main();


window.addEventListener("resize", function () {
    // Call your script whenever the window is resized
    inicializaVariables();
    main();
});