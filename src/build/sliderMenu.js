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
    console.log(servicesToShow);
    if(servicesToShow < 2) {
        console.log(servicesToShow);

        const infiniteScroll=() => {

            if (serviceCards.scrollLeft === 0) {
                // prevservices.classList.add("invisible");
                // nextservices.classList.remove("invisible");
                
            } else if(Math.ceil(serviceCards.scrollLeft) === serviceCards.scrollWidth - serviceCards.offsetWidth){
                // nextservices.classList.add("invisible");
                // prevservices.classList.remove("invisible");
            } 
            else if(Math.ceil(serviceCards.scrollLeft) === (serviceCards.scrollWidth - serviceCards.offsetWidth)/2){
                // nextservices.classList.remove("invisible");
                // prevservices.classList.remove("invisible");
            }

        };
        serviceCards.addEventListener("scroll",infiniteScroll);
        //endInfiniteScroll

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

        //endButtonMovement

    } else {}
}

main();

window.addEventListener("resize", function () {
    // Call your script whenever the window is resized
    inicializaVariables();
    main();
});