let sliderContainer = document.getElementById('review-cards');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');
let reviewWidth = document.getElementById('review').offsetWidth;
let botonPrev = document.getElementById('prevB');
let botonNext = document.getElementById('nextB');

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

sliderChildren.slice(0,elementsToShow).reverse().forEach(card => {
    slider.insertAdjacentHTML("beforeend",card.outerHTML);
});

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

//slider.style.width = cards.length*cardWidth+'px';


//cardWidth = slider.getElementsByTagName('li').offsetWidth;

botonPrev.onclick = () => {
    console.log("left");
    console.log(reviewWidth);
    console.log(slider.scrollLeft);
    sliderContainer.scrollLeft -= reviewWidth;
};

botonNext.onclick = () => {
    console.log("right");
    console.log(reviewWidth);
    console.log(slider.scrollLeft);
    sliderContainer.scrollLeft += reviewWidth;
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
        console.log("izquierda");
    } else if(Math.ceil(sliderContainer.scrollLeft) === sliderContainer.scrollWidth - sliderContainer.offsetWidth){
        console.log("derecha");
    }
};
sliderContainer.addEventListener("scroll",infiniteScroll);