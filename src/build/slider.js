let sliderContainer = document.getElementById('review-cards');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');
let reviewWidth = document.getElementById('review').offsetWidth;
let botonPrev = document.getElementById('prevB');
let botonNext = document.getElementById('nextB');

let isDragging = false, startX, startScrollLeft;

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

sliderChildren = [...slider.children];

let elementsToShow = 3;
/*  
if (document.clientWidth > 768) {
    elementsToShow = 3;
} else {
    elementsToShow = 1;
}
*/

sliderChildren.slice(-elementsToShow).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin",card.outerHTML);
});

sliderChildren.slice(0, elementsToShow).forEach(card => {
    slider.insertAdjacentHTML("beforeend",card.outerHTML);
});

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

//slider.style.width = cards.length*cardWidth+'px';


//cardWidth = slider.getElementsByTagName('li').offsetWidth;

botonPrev.onclick = () => {
    sliderContainer.classList.add("scroll-smooth");
    sliderContainer.scrollLeft -= reviewWidth;
    sliderContainer.classList.remove("scroll-smooth");
};

botonNext.onclick = () => {
    sliderContainer.classList.add("scroll-smooth");
    sliderContainer.scrollLeft += reviewWidth;
    sliderContainer.classList.remove("scroll-smooth");
};
/*
for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';
    
}
*/
function next() {
    console.log(Math.round(+slider.style.marginLeft.slice(0,-2)));
    if(Math.round(+slider.style.marginLeft.slice(0,-2))!=-Math.round(cardWidth*(cards.length-elementsToShow)))
        slider.style.marginLeft = (((+slider.style.marginLeft.slice(0,-2))-cardWidth))+'px';
}

function prev() {
    console.log(Math.round(+slider.style.marginLeft.slice(0,-2)));
    if(Math.round(+slider.style.marginLeft.slice(0,-2))!= 0)
        slider.style.marginLeft = (((+slider.style.marginLeft.slice(0,-2))+cardWidth))+'px';
}


const infiniteScroll=() => {

    if (sliderContainer.scrollLeft === 0) {
        //sliderContainer.classList.remove("scroll-smooth");
        sliderContainer.scrollLeft = sliderContainer.scrollWidth - ( 2 * sliderContainer.offsetWidth);
        //sliderContainer.classList.add("scroll-smooth");
        
    } else if(Math.ceil(sliderContainer.scrollLeft) === sliderContainer.scrollWidth - sliderContainer.offsetWidth){
        
        //sliderContainer.classList.remove("scroll-smooth");
        sliderContainer.scrollLeft = sliderContainer.offsetWidth;
        //sliderContainer.classList.add("scroll-smooth");

    }
};
sliderContainer.addEventListener("scroll",infiniteScroll);