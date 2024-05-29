const sobreMi = document.querySelector(".sobreMi");
sobreMi.addEventListener("click",()=>{
    console.log("hola1");
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const diplomas = document.querySelector(".diplomas");
diplomas.addEventListener("click", ()=>{
    console.log("hola2");
    window.scrollTo({
        top: 740,
        behavior: 'smooth'
    });
})
const proyectos = document.querySelector(".proyectos");
proyectos.addEventListener("click", ()=>{
    if(window.innerHeight<=800){
        window.scrollTo({
            top: 4900,
            behavior: 'smooth'
        });
    }else{
        window.scrollTo({
            top: 2720,
            behavior: 'smooth'
        });
    }
})
const contacto = document.querySelector(".contacto");
contacto.addEventListener("click", ()=>{
    console.log("hola4");
    window.scrollTo({
        top: 8000,
        behavior: 'smooth'
    });
})



const btnDesc = document.getElementById("btnCurri");
btnDesc.addEventListener("click", abrirCurriculum);
function abrirCurriculum (){
    window.open("./imagenees/HV Front end Developer.pdf")
}

const btnYoutube = document.querySelector(".iconoYoutube");
btnYoutube.addEventListener("click", abrirYouTube);
function abrirYouTube(){
    window.open("https://www.youtube.com/watch?v=f6Ynda2Jpao&t")
}

const whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click", abrirWhatsApp);
function abrirWhatsApp(){
    window.open("https://wa.link/koyc47")
}

const github = document.querySelector(".github");
github.addEventListener("click", abrirgithub);
function abrirgithub(){
    window.open("https://github.com/fabian-marthin")
}

const linkedin = document.querySelector(".linkedin");
linkedin.addEventListener("click", abrirlinkedin);
function abrirlinkedin(){
    window.open("https://www.linkedin.com/in/fabian-david-martinez-martin-80a455224/?trk=opento_sprofile_details")
}


