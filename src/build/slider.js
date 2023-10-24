let sliderContainer = document.getElementById('review-cards');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

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

slider.style.width = cards.length*cardWidth+'px';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWidth+'px';
    
}

function prev() {
    console.log(cardWidth);
    slider.style.marginLeft = (((+slider.style.marginLeft.slice(0,-2))+cardWidth))+'px';
}

function next() {
    console.log(cardWidth);
    slider.style.marginLeft = (((+slider.style.marginLeft.slice(0,-2))-cardWidth))+'px';
}


const infiniteScroll=() => {
    if (slider.scrollLeft === 0) {
        console.log("izquierda");
    } else if(Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth){
        console.log("derecha");
    }
};
slider.addEventListener("scroll",infiniteScroll);