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

function myServiceSelector(serviceId, operation){
    var dialog = document.getElementById('dialog-service');
    var overlay = document.getElementById('overlay');
    var title = document.getElementById("dialog-title");
    var title2 = document.getElementById("dialog-title2");
    var compTitle = document.getElementById("comp-title");
    var closeButton = document.getElementById ("close-dialog-button");
    var closeCompButton = document.getElementById ("close-comp-button");
    var desc = document.getElementById("dialog-desc");
    var desc2 = document.getElementById("dialog-desc2");
    var img1 = document.getElementById("dialog-img1");
    var img2 = document.getElementById("dialog-img2");
    var img3 = document.getElementById("dialog-img3");
    var img4 = document.getElementById("dialog-img4");
    var img5 = document.getElementById("dialog-img5");
    var img6 = document.getElementById("dialog-img6");
    var img7 = document.getElementById("dialog-img7");
    var img8 = document.getElementById("dialog-img8");
    var hideableText = [title2, desc2, compTitle];
    var upperCaseText = [title, title2, compTitle];
    // var quoteText = [desc, desc2];
    var galleryTitle = document.getElementById("gallery-title");
    var galleryPhotos = document.getElementById("gallery-photos");
    var galleryLine = document.getElementById("gallery-line");

    var additionalOps = document.getElementById('additional-ops');
    if (operation == 'open' && serviceId.indexOf('nose-comp-') > -1){
        closeButton.classList.add('hidden');
        closeCompButton.classList.remove('hidden');
        compTitle.innerHTML = '';
    }
    
    switch(serviceId){
        // EAR SERVICES
        case 'ear-1':
            title.innerHTML = 'Otoscopia';
            title2.innerHTML = 'Limpieza de  Oidos';
            desc.innerHTML = 'La exploración instrumental de los oídos puede ser respaldada mediante endoscopia o microscopio.';
            desc2.innerHTML = 'La limpieza cuidadosa de los oídos se lleva a cabo, en caso de ser necesaria, como parte de la consulta médica.';
            
            break;
        
        case 'ear-2':
            title.innerHTML = 'Timpanometría';
            title2.innerHTML = '';
            desc.innerHTML = 'Este estudio ayuda a determinar la movilidad de la membrana del tímpano, \
                                así como los procesos inflamatorios en el oído medio. Es útil para evaluar \
                                la necesidad de cirugía en algunos casos y, por lo general, se lleva a cabo durante \
                                la consulta médica.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-3':
            title.innerHTML = 'Otoplastia';
            title2.innerHTML = '';
            desc.innerHTML = 'La cirugía se realiza con el propósito de mejorar la posición y estética de las orejas. \
                                Este procedimiento se lleva a cabo en quirófano, con anestesia local y sedación en adultos, \
                                o bajo anestesia general en niños.';
            desc2.innerHTML = '';
            galleryTitle.classList.remove('hidden');
            galleryPhotos.classList.remove('hidden');
            img1.src = "Otoplastia-A-antes.jpg";
            img1.alt = "Fotografía de perfil de la paciente 1 antes de la operacion de otoplastia";
            img2.src = "Otoplastia-A-despues.jpg";
            img2.alt = "Fotografía de perfil de la paciente 1 después de la operacion de otoplastia";
            
            break;
        
        case 'ear-4':
            title.innerHTML = 'Queloides';
            title2.innerHTML = '';
            desc.innerHTML = 'Son cicatrices anormales que se forman en las orejas después de perforaciones y pueden ser \
                                eliminadas en consulta bajo anestesia local o en quirófano si es necesario. \
                                El manejo se realiza en colaboración con dermatología.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-5':
            title.innerHTML = 'Timpanoplastia';
            title2.innerHTML = '';
            desc.innerHTML = 'La timpanoplastia es la reconstrucción quirúrgica de la membrana del tímpano y puede \
                                llevarse a cabo en conjunto con otras cirugías, como la mastoidectomía.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-6':
            title.innerHTML = 'Mastoidectomía';
            title2.innerHTML = '';
            desc.innerHTML = 'Es la cirugía para la eliminación de infecciones o colesteatomas en el hueso del oído.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-7':
            title.innerHTML = 'Otitis';
            title2.innerHTML = '';
            desc.innerHTML = 'Es la inflamación del oído, al afectar el oído medio, constituye la infección más \
                                frecuente en pediatría. Puede manifestarse de forma aguda o crónica, con presencia \
                                de derrame purulento o seroso. Se hace necesaria la evaluación y exploración para obtener \
                                un diagnóstico preciso y aplicar un tratamiento adecuado.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-8':
            title.innerHTML = 'Tapones de <br>cerilla';
            title2.innerHTML = '';
            desc.innerHTML = 'En la mayoría de los casos, se producen debido a la manipulación con cotonetes, \
                                uso de audífonos, entre otros. Pueden extraerse mediante limpieza bajo visión \
                                directa, el tradicional lavado de oído o por aspiración, siendo la elección del \
                                método determinada de acuerdo a las necesidades de cada paciente.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-9':
            title.innerHTML = 'Vertigo';
            title2.innerHTML = '';
            desc.innerHTML = 'Se trata de un padecimiento angustiante, ya que afecta seriamente la capacidad de \
                                movimiento; el mareo suele representar un desafío para un diagnóstico preciso. \
                                Se llevan a cabo pruebas y valoraciones en consulta, y en algunos casos, se recurre \
                                a estudios neurofuncionales o de imagen para obtener un diagnóstico más completo.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-10':
            title.innerHTML = 'Zumbidos de <br>oídos';
            title2.innerHTML = '';
            desc.innerHTML = 'El zumbido en los oídos (Acufeno/Tinnitus) puede tener diversas causas, que van desde orígenes fácilmente \
            identificables, como tapones de cerumen, hasta problemas más serios, como neoplasias \
            o tumores en el oído.';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-11':
            title.innerHTML = 'Cuerpos <br>extraños';
            title2.innerHTML = '';
            desc.innerHTML = 'Objetos que se pueden encontrar en oídos, como  insectos o cuentas de plástico en los \
                                niños,  en la nariz como  piezas de plástico  y de manera importante, baterías  los \
                                cual constituye una urgencia por que puede  perforar el  tabique nasal y  producir \
                                alteraciones en el desarrollo  de la  nariz, o en la garganta,  como espinas de pescado \
                                durante la época de cuaresma';
            desc2.innerHTML = '';
            
            break;
        
        case 'ear-12':
            title.innerHTML = 'Otitis <br>Externa';
            title2.innerHTML = '';
            desc.innerHTML = 'También conocida coloquialmente como la otitis de los nadadores, se produce debido a la \
                                manipulación del oído mediante el uso de artefactos de limpieza como cotonetes y \
                                pasadores. Puede tener un origen infeccioso, causado tanto por bacterias como por hongos.';
            desc2.innerHTML = '';
            
            break;
        
        // THROAT SERVICES
        case 'throat-1':
            title.innerHTML = 'Faringoscopia';
            title2.innerHTML = '';
            desc.innerHTML = 'Procedimiento realizado en consulta médica que puede llevarse a cabo con diversas técnicas, \
                                adaptándose a cada caso. Esto puede incluir exploración mediante endoscopia rígida o \
                                nasofaringoscopia, así como laringoscopia flexible para evaluar las cuerdas vocales y su \
                                movilidad.';
            desc2.innerHTML = '';
            
            break;
        
        case 'throat-2':
            title.innerHTML = 'Amigdalitis <br>(anginas)';
            title2.innerHTML = '';
            desc.innerHTML = 'Ofrecemos el tratamiento médico de los procesos de infección aguda y crónica de las amígdalas \
                                o adenoides. Además, se contempla el tratamiento quirúrgico mediante amigdalectomía y adenoidectomía.';
            desc2.innerHTML = '';
            
            break;
        
        case 'throat-3':
            title.innerHTML = 'Cuerpos <br>extraños';
            title2.innerHTML = '';
            desc.innerHTML = 'Objetos que se pueden encontrar en oídos, como  insectos o cuentas de plástico en los \
                                niños,  en la nariz como  piezas de plástico  y de manera importante, baterías  los \
                                cual constituye una urgencia por que puede  perforar el  tabique nasal y  producir \
                                alteraciones en el desarrollo  de la  nariz, o en la garganta,  como espinas de pescado \
                                durante la época de cuaresma';
            desc2.innerHTML = '';
            
            break;
        
        case 'throat-4':
            title.innerHTML = 'Lesiones del <br>cuello';
            title2.innerHTML = '';
            desc.innerHTML = 'Se ofrecen servicios como el diagnóstico y tratamiento de problemas en el cuello, así como \
                                biopsias y cirugías relacionadas con ganglios, quistes, entre otros.';
            desc2.innerHTML = '';
            
            break;
        
        case 'throat-5':
            title.innerHTML = 'Cirugía de <br>glándulas';
            title2.innerHTML = '';
            desc.innerHTML = 'Se realizan intervenciones quirúrgicas en glándulas salivales, incluyendo la parótida \
                                y la submaxilar, así como cirugía en la glándula tiroides.';
            desc2.innerHTML = '';
            
            break;
        
        case 'throat-6':
            title.innerHTML = 'Faringitis';
            title2.innerHTML = '';
            desc.innerHTML = 'Se refiere al proceso inflamatorio en la garganta puede tener diversas causas, ya sea \
                                infeccioso, irritativo, entre otras. Se requiere evaluar cada caso para un diagnóstico \
                                preciso con un tratamiento adecuado.';
            desc2.innerHTML = '';
            
            break;
        

        // NOSE SERVICES
        case 'nose-1':
            title.innerHTML = 'Rinoscopia';
            title2.innerHTML = '';
            desc.innerHTML = 'La rinoscopia es la exploración de la nariz se realiza en consulta y puede llevarse a cabo en dos pasos, con el uso de un vasoconstrictor.';
            desc2.innerHTML = '<br>La endoscopia nasal se lleva a cabo en consulta y puede realizarse con un endoscopio rígido o flexible.';
            
            break;

        case 'nose-2':
            title.innerHTML = 'Septumplastia';
            title2.innerHTML = '';
            desc.innerHTML = 'Es la alineación del tabique nasal, tiene como objetivo mejorar la respiración; \
                                además, ayuda en el manejo de la sinusitis o la alergia nasal.';
            desc2.innerHTML = '';
            
            break;

        case 'nose-3':
            title.innerHTML = 'Rinoplastia';
            title2.innerHTML = '';
            title2.classList.add('hidden');
            compTitle.innerHTML = 'CIRUGÍAS COMPLEMENTARIAS <br> PARA EL PERFILADO FACIAL';
            desc.innerHTML = 'Es la cirugía destinada a mejorar la estética nasal, y es común combinarla con la \
                                septumplastia, denominándose entonces Rinoseptoplastia.<br>El objetivo es integrar \
                                la mejor estética y función de la nariz.';
            desc2.innerHTML = 'Para lograrlo, se dispone de varios abordajes, ya sea cerrada o abierta, así como \
                                diferentes técnicas, como la estructural o de preservación. <br>La elección de cada \
                                opción se decide según las necesidades individuales de cada paciente.';
            additionalOps.classList.remove('hidden');
            closeButton.classList.remove('hidden');
            closeCompButton.classList.add('hidden');
            galleryTitle.classList.remove('hidden');
            galleryPhotos.classList.remove('hidden');
            img1.src = "Rino-pac-A-antes-perfil.jpg";
            img1.alt = "Fotografía de perfil de la paciente 1 antes de la operacion de rinoplastía";
            img2.src = "Rino-pac-A-despues-perfil.jpg";
            img2.alt = "Fotografía de perfil de la paciente 1 después de la operacion de rinoplastía";
            img3.src = "Rino-pac-A-antes-frente.jpg";
            img3.alt = "Fotografía de frente de la paciente 1 antes de la operacion de rinoplastía";
            img4.src = "Rino-pac-A-despues-frente.jpg";
            img4.alt = "Fotografía de frente de la paciente 1 después de la operacion de rinoplastía";
            img5.src = "Rino-pac-B-antes-perfil.jpg";
            img5.alt = "Fotografía de frente de la paciente 2 antes de una operacion de rinoplastía";
            img6.src = "Rino-pac-B-despues-perfil.jpg";
            img6.alt = "Fotografía de perfil de la paciente 2 después de la operacion de rinoplastía";
            img7.src = "Rino-pac-B-antes-frente.jpg";
            img7.alt = "Fotografía de frente de la paciente 2 antes de la operacion de rinoplastía";
            img8.src = "Rino-pac-B-despues-frente.jpg"; 
            img8.alt = "Fotografía de frente de la paciente 2 después de la operacion de rinoplastía";
            break;

        case 'nose-4':
            title.innerHTML = 'Turbinoplastia';
            title2.innerHTML = '';
            desc.innerHTML = 'Cirugía para reducir el tamaño de los cornetes nasales. Existen diversas técnicas, \
                                como el uso de electrocauterio, radiofrecuencia o microdebridador. La técnica a \
                                usar se determina según las necesidades individuales de cada paciente.';
            desc2.innerHTML = '';
            
            break;

        case 'nose-5':
            title.innerHTML = 'Sangrado Nasal <br>(Epistaxis)';
            title2.innerHTML = '';
            desc.innerHTML = 'Según el caso, el sangrado puede resolverse en el consultorio o en quirófano. \
                                Se emplean diversos tratamientos como cauterización local, colocación de agentes \
                                hemostáticos, taponamientos nasales, entre otros, de acuerdo con las necesidades \
                                individuales de cada paciente.';
            desc2.innerHTML = '';
            
            break;

        case 'nose-6':
            title.innerHTML = 'Sinusitis';
            title2.innerHTML = '';
            desc.innerHTML = 'Es el tratamiento médico para mejorar la sinusitis o, en casos especiales, la resolución \
                                mediante cirugía de la inflamación de los senos paranasales. Esta inflamación puede \
                                deberse a diversas causas, como alergias, infecciones, entre otros.';
            desc2.innerHTML = '';
            
            break;

        case 'nose-7':
            title.innerHTML = 'Rinitis <br>alérgica';
            title2.innerHTML = '';
            desc.innerHTML = 'Tratamiento médico de la enfermedad alérgica nasal, ya sea estacional o persistente. \
                                Además, puede llevarse a cabo en conjunto con el servicio de alergología.';
            desc2.innerHTML = '';
            
            break;

        case 'nose-8':
            title.innerHTML = 'Cuerpos <br>extraños';
            title2.innerHTML = '';
            desc.innerHTML = 'Objetos que se pueden encontrar en oídos, como  insectos o cuentas de plástico en los \
                                niños,  en la nariz como  piezas de plástico  y de manera importante, baterías  los \
                                cual constituye una urgencia por que puede  perforar el  tabique nasal y  producir \
                                alteraciones en el desarrollo  de la  nariz, o en la garganta,  como espinas de pescado \
                                durante la época de cuaresma';
            desc2.innerHTML = '';
            
            break;

        case 'nose-comp-1':
            title.innerHTML = 'Blefaroplastia';
            title2.innerHTML = '';
            desc.innerHTML = 'Cirugía diseñada para reposicionar el exceso de piel de los párpados y eliminar o reubicar \
                                las bolsas de grasa en dicha área.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            
            break;

        case 'nose-comp-2':
            title.innerHTML = 'Liposucción <br>del cuello';
            title2.innerHTML = '';
            desc.innerHTML = 'Procedimiento destinado a contribuir al perfilado facial.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            
            break;

        case 'nose-comp-3':
            title.innerHTML = 'Mentoplastia';
            title2.innerHTML = '';
            desc.innerHTML = 'Cirugía que implica la colocación de un implante en la barbilla con el fin de lograr una \
                                mejor proyección del mentón. Este procedimiento se lleva a cabo en quirófano mediante \
                                un abordaje intraoral o externo, por debajo del mentón.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            
            break;

        case 'nose-comp-4':
            title.innerHTML = 'Bichatectomia <br>(Bichectomia)';
            title2.innerHTML = '';
            desc.innerHTML = 'Procedimiento quirúrgico que implica la extirpación de las bolsas de grasa de Bichat \
                                con el propósito de dar forma y perfilar el área de las mejillas.';
            desc2.innerHTML = '';
            additionalOps.classList.add('hidden');
            
            break;
            
            
    }


    
    // CLEAN UP AND FIXES
    let positionComp = serviceId.search("nose-comp");
    if (positionComp != -1){
        galleryTitle.classList.add('hidden');
        galleryPhotos.classList.add('hidden');
        galleryLine.classList.remove('hidden');
    }
    // HIDE UNUSED VARIABLES
    for (var i = 0; i < hideableText.length; i++) {
        // Get the variable name
        var variableName = hideableText[i];

        // Check if the content is empty and hide the corresponding element
        if (variableName.innerHTML == '') {
            variableName.classList.add('hidden');
        }
        else{
            variableName.classList.remove('hidden');
        }

    }

    // UPPERCASE TITLES
    for (var i = 0; i < upperCaseText.length; i++) {
        // Get the variable name
        var variableName = upperCaseText[i];
        // Check if the content is empty and hide the corresponding element
        variableName.innerHTML = variableName.innerHTML.toUpperCase();
    }

    // ADD QUOTES
    // for (var i = 0; i < quoteText.length; i++) {
    //     // Get the variable name
    //     var variableName = quoteText[i];
    //     // Check if the content is empty and hide the corresponding element
    //     variableName.innerHTML = variableName.innerHTML;
    // }
    
    if (operation == 'open'){
        dialog.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    else if (operation == 'close'){
        dialog.classList.add('hidden');
        overlay.classList.add('hidden');
        additionalOps.classList.add('hidden');
        compTitle.innerHTML = '';
        galleryTitle.classList.add('hidden');
        galleryPhotos.classList.add('hidden');
        galleryLine.classList.remove('hidden');
        img1.src = "";
        img1.alt = "";
        img2.src = "";
        img2.alt = "";
        img3.src = "";
        img3.alt = "";
        img4.src = "";
        img4.alt = "";
        img5.src = "";
        img5.alt = "";
        img6.src = "";
        img6.alt = "";
        img7.src = "";
        img7.alt = "";
        img8.src = "";
        img8.alt = "";
    }
    
    
}

