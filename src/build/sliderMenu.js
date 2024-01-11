let serviceCards = document.getElementById('service-cards');
let servicesliderS = document.getElementById('sliderS');
let serviceWidth = document.getElementById('service').offsetWidth;
let prevservices = document.getElementById('prevBs');
let nextservices = document.getElementById('nextBs');
let serviceCardsWidth = serviceCards.clientWidth;
let servicesToShow = Math.round(serviceCardsWidth/serviceWidth); 

servicesliderSChildren = [...servicesliderS.children];

function inicializaVariables(){
    serviceCards = document.getElementById('service-cards');
    servicesliderS = document.getElementById('sliderS');
    serviceWidth = document.getElementById('service').offsetWidth;
    prevservices = document.getElementById('prevBs');
    nextservices = document.getElementById('nextBs');
    serviceCardsWidth = serviceCards.clientWidth;
    servicesToShow = Math.round(serviceCardsWidth/serviceWidth);  

}
function main() {

    //Dragging
    let isDraggingRev = false, startX, startScrollLeft, timeOutId;
    // console.log(servicesToShow);

    if(servicesToShow < 2) {
        // console.log(servicesToShow);
        let sizeServiceMenu = serviceCards.scrollWidth - serviceCards.offsetWidth;

        console.log(sizeServiceMenu);
        let indexService = 'ear';
        const infiniteScroll=() => {
            if (serviceCards.scrollLeft === 0) {
                prevservices.classList.add("invisible");
                nextservices.classList.remove("invisible");
                indexService = 'ear';
                
            } else if(Math.ceil(serviceCards.scrollLeft) > sizeServiceMenu-10){
                nextservices.classList.add("invisible");      
                prevservices.classList.remove("invisible");
                indexService = 'nose';
                
            } else {
                nextservices.classList.remove("invisible");
                prevservices.classList.remove("invisible");
                indexService = 'throat';
            }

        };
        serviceCards.addEventListener("scroll",infiniteScroll);
        //endInfiniteScroll

        //buttonMovement
        prevservices.onclick = () => {
            if (indexService === 'nose') {
                serviceMenu('throat');
                serviceCards.classList.add("scroll-smooth");
                serviceCards.scrollLeft = sizeServiceMenu/2;
                serviceCards.classList.remove("scroll-smooth");
            }
            else if (indexService === 'throat') {
                serviceMenu('ear');
                serviceCards.classList.add("scroll-smooth");
                serviceCards.scrollLeft = 0;
                serviceCards.classList.remove("scroll-smooth");
            }
        };

        nextservices.onclick = () => {
            
            if (indexService === 'ear') {
                serviceMenu('throat');
                serviceCards.classList.add("scroll-smooth");
                serviceCards.scrollLeft = sizeServiceMenu/2;
                serviceCards.classList.remove("scroll-smooth");
                
            }
            else if (indexService === 'throat') {
                serviceMenu('nose');
                serviceCards.classList.add("scroll-smooth");
                serviceCards.scrollLeft = sizeServiceMenu;
                serviceCards.classList.remove("scroll-smooth");
            }
        };
        
        //endButtonMovement

    } else {}
}

main();

window.addEventListener("resize", function () {
    // Call your script whenever the window is resized
    inicializaVariables();
    main();
});

