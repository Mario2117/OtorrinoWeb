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
        let indexService = 'ear';
        const infiniteScroll=() => {
            if (serviceCards.scrollLeft === 0) {
                prevservices.classList.add("invisible");
                nextservices.classList.remove("invisible");
                indexService = 'ear';
                
            } else if(Math.ceil(serviceCards.scrollLeft) === sizeServiceMenu){
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
            serviceCards.classList.add("scroll-smooth");
            serviceCards.scrollLeft -= serviceWidth;
            serviceCards.classList.remove("scroll-smooth");
            if (indexService === 'nose') {
                serviceMenu('throat');
            }
            else if (indexService === 'throat') {
                serviceMenu('ear');
            }
            
        };

        nextservices.onclick = () => {
            serviceCards.classList.add("scroll-smooth");
            serviceCards.scrollLeft += serviceWidth;
            serviceCards.classList.remove("scroll-smooth");
            if (indexService === 'ear') {
                serviceMenu('throat');
            }
            else if (indexService === 'throat') {
                serviceMenu('nose');
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

