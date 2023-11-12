let earService = document.getElementById("ear-services");
let throatService = document.getElementById("throat-services");
let noseService = document.getElementById("nose-services");

let earButton = document.getElementById("ear-button");
let throatButton = document.getElementById("throat-button");
let noseButton = document.getElementById("nose-button");

let earBox = document.getElementById("ear-box");
let throatBox = document.getElementById("throat-box");
let noseBox = document.getElementById("nose-box");

let earLine = document.getElementById("ear-line");
let throatLine = document.getElementById("throat-line");
let noseLine = document.getElementById("nose-line");

let bottomLine = document.getElementById("bottom-line");


function serviceMenu(service){
    if(service == "ear"){
        bottomLine.classList.remove("mt-5");
        earBox.classList.add("border-8");
        earBox.classList.add("border-[#303A2C]");
        noseBox.classList.remove("border-[#303A2C]");
        throatBox.classList.remove("border-[#303A2C]");
        noseBox.classList.remove("border-8");
        throatBox.classList.remove("border-8");

        earLine.classList.remove("hidden");
        noseLine.classList.add("hidden");
        throatLine.classList.add("hidden");
        bottomLine.classList.add("hidden");

        earService.classList.remove("hidden");
        throatService.classList.add("hidden");
        noseService.classList.add("hidden");
    }
    if(service == "throat"){
        bottomLine.classList.remove("mt-5");
        throatBox.classList.add("border-8");
        throatBox.classList.add("border-[#303A2C]");
        earBox.classList.remove("border-[#303A2C]");
        noseBox.classList.remove("border-[#303A2C]");
        earBox.classList.remove("border-8");
        noseBox.classList.remove("border-8");


        throatLine.classList.remove("hidden");
        noseLine.classList.add("hidden");
        earLine.classList.add("hidden");
        bottomLine.classList.add("hidden");

        throatService.classList.remove("hidden");
        noseService.classList.add("hidden");
        earService.classList.add("hidden");
    }
    if(service == "nose"){
        bottomLine.classList.remove("mt-5");
        noseBox.classList.add("border-8");
        noseBox.classList.add("border-[#303A2C]");
        earBox.classList.remove("border-[#303A2C]");
        throatBox.classList.remove("border-[#303A2C]");
        earBox.classList.remove("border-8");
        throatBox.classList.remove("border-8");

        noseLine.classList.remove("hidden");
        earLine.classList.add("hidden");
        throatLine.classList.add("hidden");
        bottomLine.classList.add("hidden");

        noseService.classList.remove("hidden");
        throatService.classList.add("hidden");
        earService.classList.add("hidden");
    }
        
}


function myServiceSelector(serviceNum){
    var openButton = document.getElementById(`open${serviceNum}`);
    var dialog = document.getElementById(`dialog${serviceNum}`);
    var closeButton = document.getElementById(`close${serviceNum}`);
    var overlay = document.getElementById('overlay');
    
    // show the overlay and the dialog
    openButton.addEventListener('click', function () {
        dialog.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
    
    // hide the overlay and the dialog
    closeButton.addEventListener('click', function () {
        dialog.classList.add('hidden');
        overlay.classList.add('hidden');
    });
    

}


// // Dialog (needs to optimize)
// var openButton = document.getElementById('open');
// var dialog = document.getElementById('dialog');
// var closeButton = document.getElementById('close');
// var overlay = document.getElementById('overlay');

// // show the overlay and the dialog
// openButton.addEventListener('click', function () {
//     dialog.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// });

// // hide the overlay and the dialog
// closeButton.addEventListener('click', function () {
//     dialog.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// var openButton2 = document.getElementById('open2');
// var dialog2 = document.getElementById('dialog2');
// var closeButton2 = document.getElementById('close2');
// var overlay2 = document.getElementById('overlay2');

// // show the overlay and the dialog
// openButton2.addEventListener('click', function () {
//     dialog2.classList.remove('hidden');
//     overlay2.classList.remove('hidden');
// });

// // hide the overlay and the dialog
// closeButton2.addEventListener('click', function () {
//     dialog2.classList.add('hidden');
//     overlay2.classList.add('hidden');
// });

