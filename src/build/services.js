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

let sliderS = document.getElementById("sliderS");


function serviceMenu(service){
    if(service == "ear" && !earBox.classList.contains("border-[#303A2C]")){
        earBox.classList.add("border-8");
        earBox.classList.add("border-[#303A2C]");
        noseBox.classList.remove("border-[#303A2C]");
        throatBox.classList.remove("border-[#303A2C]");
        noseBox.classList.remove("border-8");
        throatBox.classList.remove("border-8");

        earLine.classList.remove("hidden");
        noseLine.classList.add("hidden");
        throatLine.classList.add("hidden");

        earService.classList.remove("hidden");
        throatService.classList.add("hidden");
        noseService.classList.add("hidden");

        sliderS.classList.remove("mb-5");

    } else if(service == "ear" && earBox.classList.contains("border-[#303A2C]")){
        earService.classList.add("hidden");
        earBox.classList.remove("border-[#303A2C]");
        earBox.classList.remove("border-8");
        earLine.classList.add("hidden");
        sliderS.classList.add("mb-5");
    }

    if(service == "throat" && !throatBox.classList.contains("border-[#303A2C]")){
        throatBox.classList.add("border-8");
        throatBox.classList.add("border-[#303A2C]");
        earBox.classList.remove("border-[#303A2C]");
        noseBox.classList.remove("border-[#303A2C]");
        earBox.classList.remove("border-8");
        noseBox.classList.remove("border-8");


        throatLine.classList.remove("hidden");
        noseLine.classList.add("hidden");
        earLine.classList.add("hidden");

        throatService.classList.remove("hidden");
        noseService.classList.add("hidden");
        earService.classList.add("hidden");

        sliderS.classList.remove("mb-5");
        
    }else if(service == "throat" && throatBox.classList.contains("border-[#303A2C]")){
        throatService.classList.add("hidden");
        throatBox.classList.remove("border-[#303A2C]");
        throatBox.classList.remove("border-8");
        throatLine.classList.add("hidden");
        sliderS.classList.add("mb-5");
    }

    if(service == "nose" && !noseBox.classList.contains("border-[#303A2C]")){
        noseBox.classList.add("border-8");
        noseBox.classList.add("border-[#303A2C]");
        earBox.classList.remove("border-[#303A2C]");
        throatBox.classList.remove("border-[#303A2C]");
        earBox.classList.remove("border-8");
        throatBox.classList.remove("border-8");

        noseLine.classList.remove("hidden");
        earLine.classList.add("hidden");
        throatLine.classList.add("hidden");

        noseService.classList.remove("hidden");
        throatService.classList.add("hidden");
        earService.classList.add("hidden");

        sliderS.classList.remove("mb-5");

    }else if(service == "nose" && noseBox.classList.contains("border-[#303A2C]")){
        noseService.classList.add("hidden");
        noseBox.classList.remove("border-[#303A2C]");
        noseBox.classList.remove("border-8");
        noseLine.classList.add("hidden");
        sliderS.classList.add("mb-5");
    }
        
}


// function myServiceSelectorOld(serviceId, operation){
    
//     var dialog = document.getElementById(`dialog-${serviceId}`);
//     // var closeButton = document.getElementById(`close-${serviceId}`);
//     var overlay = document.getElementById('overlay');
//     var serviceWithMultiple = document.getElementById('dialog-nose-3');

//     // show the overlay and the dialog
//     if (operation == 'open'){
//         dialog.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     }
//     else if (operation == 'close'){
//         dialog.classList.add('hidden');
//         overlay.classList.add('hidden');
//     }
//     else if (operation == 'open-comp'){
//         serviceWithMultiple.classList.add('hidden');
//         dialog.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     }
//     else if (operation == 'close-comp'){
//         dialog.classList.add('hidden');
//         serviceWithMultiple.classList.remove('hidden');
//     }
// }

function myServiceSelector(serviceId, operation){
    var dialog = document.getElementById('dialog-service');
    var overlay = document.getElementById('overlay');
    var title = document.getElementById("dialog-title");
    var title2 = document.getElementById("dialog-title2");
    var compTitle = document.getElementById("comp-title");
    var desc = document.getElementById("dialog-desc");
    var desc2 = document.getElementById("dialog-desc2");
    
    var additionalOps = document.getElementById('additional-ops');
    
    
    
    switch(serviceId){
        // EAR SERVICES
        case 'ear-1':
            title.innerHTML = 'Otoscopia'.toUpperCase();
            title2.innerHTML = 'Limpieza de  Oidos'.toUpperCase();
            desc.innerHTML = 'La exploración instrumental de los oídos puede ser respaldada mediante endoscopia o microscopio.';
            desc2.innerHTML = 'La limpieza cuidadosa de los oídos se lleva a cabo, en caso de ser necesaria, como parte de la consulta médica.';
            break;
        
        case 'ear-2':
            title.innerHTML = 'Timpanometría'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Este estudio ayuda a determinar la movilidad de la membrana del tímpano, así como los procesos inflamatorios en el oído medio.';
            desc2.innerHTML = 'Es útil para evaluar la necesidad de cirugía en algunos casos y, por lo general, se lleva a cabo durante la consulta médica.';
            break;
        
        case 'ear-3':
            title.innerHTML = 'Otoplastia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'La cirugía se realiza con el propósito de mejorar la posición y estética de las orejas.';
            desc2.innerHTML = 'Este procedimiento se lleva a cabo en quirófano, con anestesia local y sedación en adultos, o bajo anestesia general en niños.';
            break;
        
        case 'ear-4':
            title.innerHTML = 'Queloides'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Son cicatrices anormales que se forman en las orejas después de perforaciones y pueden ser eliminadas en consulta bajo anestesia local o en quirófano si es necesario.';
            desc2.innerHTML = 'El manejo se realiza en colaboración con dermatología.';
            break;
        
        case 'ear-5':
            title.innerHTML = 'Timpanoplastia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'La timpanoplastia es la reconstrucción quirúrgica de la membrana del tímpano y puede llevarse a cabo en conjunto con otras cirugías, como la mastoidectomía.';
            desc2.innerHTML = '';
            break;
        
        case 'ear-6':
            title.innerHTML = 'Mastoidectomía'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Es la cirugía para la eliminación de infecciones o colesteatomas en el hueso del oído.';
            desc2.innerHTML = '';
            break;
        
        case 'ear-7':
            title.innerHTML = 'Otitis'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        case 'ear-8':
            title.innerHTML = 'Tapones de cerilla'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        case 'ear-9':
            title.innerHTML = 'Vertigo'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        case 'ear-10':
            title.innerHTML = 'Zumbidos de oídos (Acufeno/Tinnitus)'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        case 'ear-11':
            title.innerHTML = 'Cuerpos extraños'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        case 'ear-12':
            title.innerHTML = 'Otitis Externa'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        // THROAT SERVICES
        case 'throat-1':
            title.innerHTML = 'Faringoscopia- Laringoscopia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Procedimiento realizado en consulta médica que puede llevarse a cabo con diversas técnicas, adaptándose a cada caso.';
            desc2.innerHTML = 'Esto puede incluir exploración mediante endoscopia rígida o nasofaringoscopia, así como laringoscopia flexible para evaluar las cuerdas vocales y su movilidad.';
            break;
        
        case 'throat-2':
            title.innerHTML = 'Amigdalitis (anginas)'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Ofrecemos el tratamiento médico de los procesos de infección aguda y crónica de las amígdalas o adenoides.';
            desc2.innerHTML = 'Además, se contempla el tratamiento quirúrgico mediante amigdalectomía y adenoidectomía.';
            break;
        
        case 'throat-3':
            title.innerHTML = 'Cuerpos extraños en Orofaringe'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        
        case 'throat-4':
            title.innerHTML = 'Lesiones del  cuello'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Se ofrecen servicios como el diagnóstico y tratamiento de problemas en el cuello, así como biopsias y cirugías relacionadas con ganglios, quistes, entre otros.';
            desc2.innerHTML = '';
            break;
        
        case 'throat-5':
            title.innerHTML = 'Cirugía de  glándulas'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Se realizan intervenciones quirúrgicas en glándulas salivales, incluyendo la parótida y la submaxilar, así como cirugía en la glándula tiroides.';
            desc2.innerHTML = '';
            break;
        
        case 'throat-6':
            title.innerHTML = 'Faringitis'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;
        

        // NOSE SERVICES
        case 'nose-1':
            title.innerHTML = 'Rinoscopia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'La rinoscopia es la exploración de la nariz se realiza en consulta y puede llevarse a cabo en dos pasos, con el uso de un vasoconstrictor.';
            desc2.innerHTML = 'La endoscopia nasal se lleva a cabo en consulta y puede realizarse con un endoscopio rígido o flexible.';
            break;

        case 'nose-2':
            title.innerHTML = 'Septumplastia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Es la alineación del tabique nasal, tiene como objetivo mejorar la respiración; además, ayuda en el manejo de la sinusitis o la alergia nasal.';
            desc2.innerHTML = '';
            break;

        case 'nose-3':
            title.innerHTML = 'Rinoplastia'.toUpperCase();
            title2.innerHTML = 'CIRUGÍAS COMPLEMENTARIAS <br> PARA EL PERFILADO FACIAL'.toUpperCase();
            // compTitle.innerHTML = 'CIRUGÍAS COMPLEMENTARIAS <br> PARA EL PERFILADO FACIAL'.toUpperCase();
            desc.innerHTML = 'Es la cirugía destinada a mejorar la estética nasal, y es común combinarla con la septumplastia, denominándose entonces Rinoseptoplastia.<br>El objetivo es integrar la mejor estética y función de la nariz.';
            desc2.innerHTML = 'Para lograrlo, se dispone de varios abordajes, ya sea cerrada o abierta, así como diferentes técnicas, como la estructural o de preservación. <br>La elección de cada opción se decide según las necesidades individuales de cada paciente.';
            additionalOps.classList.remove('hidden');
            break;

        case 'nose-4':
            title.innerHTML = 'Turbinoplastia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Cirugía para reducir el tamaño de los cornetes nasales. Existen diversas técnicas, como el uso de electrocauterio, radiofrecuencia o microdebridador.';
            desc2.innerHTML = 'La técnica a usar se determina según las necesidades individuales de cada paciente.';
            break;

        case 'nose-5':
            title.innerHTML = 'Sangrado  Nasal (Epistaxis)'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Según el caso, el sangrado puede resolverse en el consultorio o en quirófano.';
            desc2.innerHTML = 'Se emplean diversos tratamientos como cauterización local, colocación de agentes hemostáticos, taponamientos nasales, entre otros, de acuerdo con las necesidades individuales de cada paciente.';
            break;

        case 'nose-6':
            title.innerHTML = 'Sinusitis'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Es el tratamiento médico para mejorar la sinusitis o, en casos especiales, la resolución mediante cirugía de la inflamación de los senos paranasales.';
            desc2.innerHTML = 'Esta inflamación puede deberse a diversas causas, como alergias, infecciones, entre otros.';
            break;

        case 'nose-7':
            title.innerHTML = 'Rinitis alérgica'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Tratamiento médico de la enfermedad alérgica nasal, ya sea estacional o persistente.';
            desc2.innerHTML = 'Además, puede llevarse a cabo en conjunto con el servicio de alergología.';
            break;

        case 'nose-8':
            title.innerHTML = 'Cuerpos extraños'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = '';
            desc2.innerHTML = '';
            break;

        case 'nose-comp-1':
            title.innerHTML = 'Blefaroplastia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Cirugía diseñada para reposicionar el exceso de piel de los párpados y eliminar o reubicar las bolsas de grasa en dicha área.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            break;

        case 'nose-comp-2':
            title.innerHTML = 'Liposucción del cuello'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Procedimiento destinado a contribuir al perfilado facial.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            break;

        case 'nose-comp-3':
            title.innerHTML = 'Mentoplastia'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Cirugía que implica la colocación de un implante en la barbilla con el fin de lograr una mejor proyección del mentón.';
            desc2.innerHTML = 'Este procedimiento se lleva a cabo en quirófano mediante un abordaje intraoral o externo, por debajo del mentón.';
            additionalOps.classList.add('hidden');
            break;

        case 'nose-comp-4':
            title.innerHTML = 'Bichatectomia (Bichectomia)'.toUpperCase();
            title2.innerHTML = ''.toUpperCase();
            desc.innerHTML = 'Procedimiento quirúrgico que implica la extirpación de las bolsas de grasa de Bichat con el propósito de dar forma y perfilar el área de las mejillas.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            break;
        
    }
    
    if (operation == 'open'){
        dialog.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else if (operation == 'close'){
        dialog.classList.add('hidden');
        overlay.classList.add('hidden');
        additionalOps.classList.add('hidden');
        compTitle.innerHTML = '';
    }
   
}

