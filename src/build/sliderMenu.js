let serviceCards = document.getElementById('service-cards');
let servicesliderS = document.getElementById('sliderS');
let serviceWidth = document.getElementById('service').offsetWidth;
let prevservices = document.getElementById('prevBs');
let nextservices = document.getElementById('nextBs');
let serviceCardsWidth = serviceCards.clientWidth;
let servicesToShow = Math.round(serviceCardsWidth/serviceWidth); 
// let indexService = '';
servicesliderSChildren = [...servicesliderS.children];
serviceCards.scrollLeft = 0;
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
    

    if(servicesToShow < 2) {
        // console.log(servicesToShow);
        let sizeServiceMenu = Math.ceil(serviceCards.scrollWidth - serviceCards.offsetWidth);
        // console.log(sizeServiceMenu);
        
        const infiniteScroll=() => {
            if (serviceCards.scrollLeft === 0) {
                prevservices.classList.add("invisible");
                nextservices.classList.remove("invisible");
                // indexService = 'ear';
                
            } else if (Math.ceil(serviceCards.scrollLeft) > Math.ceil((sizeServiceMenu/3)*2)){
                nextservices.classList.add("invisible");      
                prevservices.classList.remove("invisible");
                // indexService = 'nose';
                
            } else if(Math.ceil(serviceCards.scrollLeft) <= Math.ceil((sizeServiceMenu/3)*2) && Math.ceil(serviceCards.scrollLeft) >= Math.ceil(sizeServiceMenu/3)){
                nextservices.classList.remove("invisible");
                prevservices.classList.remove("invisible");
                // indexService = 'throat';
            }

        };
        serviceCards.addEventListener("scroll",infiniteScroll);
        //endInfiniteScroll

        //buttonMovement
        prevservices.onclick = () => {
            serviceCards.classList.add("scroll-smooth");
            if (Math.ceil(serviceCards.scrollLeft) > Math.ceil((sizeServiceMenu/3)*2)) {
                // console.log('En Nariz');
                serviceMenu('throat');
                serviceCards.scrollLeft = Math.ceil(sizeServiceMenu/2);
                serviceCards.classList.remove("scroll-smooth");
            }
            else if (Math.ceil(serviceCards.scrollLeft) <= Math.ceil((sizeServiceMenu/3)*2) && Math.ceil(serviceCards.scrollLeft) >= Math.ceil(sizeServiceMenu/3)) {
                // console.log('En Garganta');
                serviceMenu('ear');
                serviceCards.scrollLeft = 0;
                serviceCards.classList.remove("scroll-smooth");
            } 
            else if (Math.ceil(serviceCards.scrollLeft) < Math.ceil(sizeServiceMenu/3) && Math.ceil(serviceCards.scrollLeft) >= 0) {
                // console.log('En Oreja');
                serviceMenu('ear');
                serviceCards.scrollLeft = 0;
                serviceCards.classList.remove("scroll-smooth");
            }
            
        };

        nextservices.onclick = () => {
            serviceCards.classList.add("scroll-smooth");
            if (Math.ceil(serviceCards.scrollLeft) < Math.ceil(sizeServiceMenu/3) && Math.ceil(serviceCards.scrollLeft) >= 0) {
                // console.log('En Oreja');
                serviceMenu('throat');
                serviceCards.scrollLeft = Math.ceil(sizeServiceMenu/2);
                serviceCards.classList.remove("scroll-smooth");
            }
            else if (Math.ceil(serviceCards.scrollLeft) <= Math.ceil((sizeServiceMenu/3)*2) && Math.ceil(serviceCards.scrollLeft) >= Math.ceil(sizeServiceMenu/3)) {
                // console.log('En Garganta');
                serviceMenu('nose');
                serviceCards.scrollLeft = sizeServiceMenu;
                serviceCards.classList.remove("scroll-smooth");
            }
            else if (Math.ceil(serviceCards.scrollLeft) > Math.ceil((sizeServiceMenu/3)*2)) {
                // console.log('En Nariz');
                serviceMenu('nose');
                serviceCards.scrollLeft = sizeServiceMenu;
                serviceCards.classList.remove("scroll-smooth");
            }
            // serviceCards.classList.add("scroll-smooth");
            // serviceCards.scrollLeft += serviceWidth;
            // serviceCards.classList.remove("scroll-smooth");
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

