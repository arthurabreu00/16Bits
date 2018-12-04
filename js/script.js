var audio = new Audio("../audio/topgear.mp3");
var audioLigado = false;

document.querySelector('#music').addEventListener('click',()=>{

    $('#music').toggleClass('ativado');
    
    if(audioLigado){
        
        audio.pause();
        audioLigado = false;
    }else{
        audio.play();
        audioLigado = true;
    }
});