let serviceCards = document.getElementById('service-cards');
let servicesliderS = document.getElementById('sliderS');
//let cards = servicesliderS.getElementsByTagName('li');
let serviceWidth = document.getElementById('service').offsetWidth;
let prevservices = document.getElementById('prevBs');
let nextservices = document.getElementById('nextBs');
let serviceCardsWidth = serviceCards.clientWidth;
let servicesToShow = Math.round(serviceCardsWidth/serviceWidth); 

servicesliderSChildren = [...servicesliderS.children];

// servicesliderSChildren.slice(-servicesToShow).reverse().forEach(card => {
//     servicesliderS.insertAdjacentHTML("afterbegin",card.outerHTML);
// });

// servicesliderSChildren.slice(0, servicesToShow).forEach(card => {
//     servicesliderS.insertAdjacentHTML("beforeend",card.outerHTML);
// });

function inicializaVariables(){
    serviceCards = document.getElementById('service-cards');
    servicesliderS = document.getElementById('sliderS');
    //cards = servicesliderS.getElementsByTagName('li');
    serviceWidth = document.getElementById('service').offsetWidth;
    prevservices = document.getElementById('prevBs');
    nextservices = document.getElementById('nextBs');
    serviceCardsWidth = serviceCards.clientWidth;
    servicesToShow = Math.round(serviceCardsWidth/serviceWidth);  

}
function main() {

    /* if(window.innnerWidth > 768) {
        servicesToShow = 3;
    } else {
        servicesToShow = 1;
    }
    */

    //Dragging
    let isDraggingRev = false, startX, startScrollLeft, timeOutId;
    console.log(servicesToShow);
    if(servicesToShow < 2) {
        console.log(servicesToShow);

        // const dragStart = (e) => {
        //     isDraggingRev = true;
        //     servicesliderS.classList.add("dragging");
        //     startX = e.pageX;
        //     startScrollLeft = serviceCards.scrollLeft;
        // }

        // const dragging = (e) => {
        //     if(!isDraggingRev) return;
        //     servicesliderS.classList.remove("cursor-grab");
        //     serviceCards.classList.remove("snap-x");
        //     serviceCards.scrollLeft = startScrollLeft - (e.pageX - startX);
        //     servicesliderS.classList.add("cursor-grabbing");
        //     servicesliderS.classList.add("dragging");
            
        // }

        // const dragStop = (e) => {
        //     isDraggingRev = false;
        //     servicesliderS.classList.remove("cursor-grabbing");
        //     servicesliderS.classList.add("cursor-grab");
        //     serviceCards.classList.add("snap-x");
        //     servicesliderS.classList.remove("dragging");
        // }

        // serviceCards.addEventListener("mousedown", dragStart);
        // serviceCards.addEventListener("mousemove", dragging);
        // serviceCards.addEventListener("mouseup", dragStop);
        
        //endDragging

        //infiniteScroll


        const infiniteScroll=() => {

            if (serviceCards.scrollLeft === 0) {
                // serviceCards.classList.remove("scroll-smooth");
                // serviceCards.scrollLeft = serviceCards.scrollWidth - ( 2 * serviceCards.offsetWidth);
                //serviceCards.classList.add("scroll-smooth");
                prevservices.classList.add("hidden");
                nextservices.classList.remove("hidden");
                
            } else if(Math.ceil(serviceCards.scrollLeft) === serviceCards.scrollWidth - serviceCards.offsetWidth){
                
                // serviceCards.classList.remove("scroll-smooth");
                // serviceCards.scrollLeft = serviceCards.offsetWidth;
                //serviceCards.classList.add("scroll-smooth");
                nextservices.classList.add("hidden");
                prevservices.classList.remove("hidden");
            } 
            else if(Math.ceil(serviceCards.scrollLeft) === (serviceCards.scrollWidth - serviceCards.offsetWidth)/2){
                
                // serviceCards.classList.remove("scroll-smooth");
                // serviceCards.scrollLeft = serviceCards.offsetWidth;
                //serviceCards.classList.add("scroll-smooth");
                nextservices.classList.remove("hidden");
                prevservices.classList.remove("hidden");
            } 
            // else {
            //     nextservices.classList.remove("hidden");
            //     prevservices.classList.remove("hidden");
            // }

            // clearTimeout(timeOutId);
            // if(!serviceCards.matches(":hover")) {autoplay();}
            // else {serviceCards.classList.remove("scroll-smooth");}
        };
        serviceCards.addEventListener("scroll",infiniteScroll);
        //endInfiniteScroll


        //servicesliderS.style.width = cards.length*cardWidth+'px';

        //cardWidth = document.getElementsById('service').offsetWidth;


        //buttonMovement
        prevservices.onclick = () => {
            serviceCards.classList.add("scroll-smooth");
            serviceCards.scrollLeft -= serviceWidth;
            serviceCards.classList.remove("scroll-smooth");
        };

        nextservices.onclick = () => {
            serviceCards.classList.add("scroll-smooth");
            serviceCards.scrollLeft += serviceWidth;
            serviceCards.classList.remove("scroll-smooth");
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
            serviceCards.classList.add("scroll-smooth");
            timeOutId = setTimeout(() => serviceCards.scrollLeft += serviceWidth, 2500);
            //serviceCards.classList.remove("scroll-smooth");
        }

        autoplay();

        serviceCards.addEventListener("mouseenter", () => clearTimeout(timeOutId));
        serviceCards.addEventListener("mouseleave", autoplay);
    } else {}
}

main();

window.addEventListener("resize", function () {
    // Call your script whenever the window is resized
    inicializaVariables();
    main();
});