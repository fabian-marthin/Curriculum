console.log("hola")

const btn = document.getElementById("btnCurri");
btn.addEventListener("click", abrirCurriculum);

function abrirCurriculum (){
    const link =document.createElement("a");
    link.href = "./imagenees/HV Front end Developer.pdf";
    link.click;

    window.open("./imagenees/HV Front end Developer.pdf")
}
