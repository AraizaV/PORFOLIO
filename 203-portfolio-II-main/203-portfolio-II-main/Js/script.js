const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}

//Funcion escape//

function presionar_tecla(){
    
    tecla_esc = event.keyCode;

    if (tecla_esc == 27){
    
        return closeImg();
    }
}
window.onkeydown = presionar_tecla;