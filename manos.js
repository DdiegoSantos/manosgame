function ps4(){
    img = document.querySelector("#inPs4");
    img.style.transform = "scale(1.1)" 
    img.style.boxShadow = "0 0 2vw rgba(0,0,0,0.5)"
    img.style.transition = " all 1s"  
    img.style.position = "relative"     
 }

 function snos(){
     let fundo = document.querySelector("#Snos");
     let controle = document.querySelector("#controle");

     fundo.style.background = "#000";
     fundo.style.color = "#fff" ;
     fundo.style.transition = "0.8s";
     fundo.style.transitionDelay = "0.2s";

     controle.style.backgroundPosition = "50% 50%";
     controle.style.transition = "2s"
     controle.style.boxShadow = "0 0 2vw #e0f806"
 }

 function snosBranco(){
     let fundo = document.querySelector("#Snos");
     let controle = document.querySelector("#controle");

     fundo.style.background = "#fff";
     fundo.style.transitionDelay = "0.5s"
     fundo.style.color = "#000";

     controle.style.backgroundPosition = "90% 50%";
     controle.style.transition = "2s"
     controle.style.boxShadow = "none"
 }
