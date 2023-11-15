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
    if(service == "ear" && !earBox.classList.contains("border-[#303A2C]")){
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

    } else if(service == "ear" && earBox.classList.contains("border-[#303A2C]")){
        earService.classList.add("hidden");
        earBox.classList.remove("border-[#303A2C]");
        earBox.classList.remove("border-8");
        earLine.classList.add("hidden");
        bottomLine.classList.remove("hidden");
        bottomLine.classList.add("mt-5");
    }

    if(service == "throat" && !throatBox.classList.contains("border-[#303A2C]")){
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
        
    }else if(service == "throat" && throatBox.classList.contains("border-[#303A2C]")){
        throatService.classList.add("hidden");
        throatBox.classList.remove("border-[#303A2C]");
        throatBox.classList.remove("border-8");
        throatLine.classList.add("hidden");
        bottomLine.classList.remove("hidden");
        bottomLine.classList.add("mt-5");
    }

    if(service == "nose" && !noseBox.classList.contains("border-[#303A2C]")){
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

    }else if(service == "nose" && noseBox.classList.contains("border-[#303A2C]")){
        noseService.classList.add("hidden");
        noseBox.classList.remove("border-[#303A2C]");
        noseBox.classList.remove("border-8");
        noseLine.classList.add("hidden");
        bottomLine.classList.remove("hidden");
        bottomLine.classList.add("mt-5");
    }
        
}


function myServiceSelector(serviceId, operation){
    var openButton = document.getElementById(`open-${serviceId}`);
    var dialog = document.getElementById(`dialog-${serviceId}`);
    var closeButton = document.getElementById(`close-${serviceId}`);
    var overlay = document.getElementById('overlay');
    
    // show the overlay and the dialog
    if (operation == 'open'){
        dialog.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else if (operation == 'close'){
        dialog.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    
    

}


