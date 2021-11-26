var menuopen = false;

function sonar(objeto) {
   
   let mensaje=document.getElementById("contenedorPalabra");
   mensaje.style.display="flex";
   let mensaje2 = document.getElementById("variacionPalabra");
   mensaje2.innerHTML=objeto;
   let audio;
    switch(objeto) {
        case "sol":
            audio = new Audio("./audios/sol.wav");
            audio.load();
            audio.play();
        break;
        case "bicicleta":
            audio = new Audio("./audios/bicicleta.wav");
            audio.load();
            audio.play();
        break;
        case "campana":
            audio = new Audio("./audios/campana.wav");
            audio.load();
            audio.play();
        break;
        case "balde":
            audio = new Audio("./audios/balde.wav");
            audio.load();
            audio.play();
        break;
        case "camara":
            audio = new Audio("./audios/camara.wav");
            audio.load();
            audio.play();
         break;   
        case "dado":
            audio = new Audio("./audios/dado.wav");
            audio.load();
            audio.play();
        break;
        case "pelota":
            audio = new Audio("./audios/pelota.wav");
            audio.load();
            audio.play();
        break;   
        case "puerta":
           audio = new Audio("./audios/puerta.wav");
           audio.load();
           audio.play();
        break;
        case "nube":
           audio = new Audio("./audios/nube.wav");
           audio.load();
           audio.play();
        break;   
        case "caritafeliz":
           audio = new Audio("./audios/caritafeliz.wav");
           audio.load();
           audio.play();
        break;
        case "ojo":
           audio = new Audio("./audios/ojo.wav");
           audio.load();
           audio.play();
           break;   
        case "anteojos":
           audio = new Audio("./audios/anteojos.wav");
           audio.load();
           audio.play();
           break;
        case "diamante":
           audio = new Audio("./audios/diamante.wav");
           audio.load();
           audio.play();
           break;   
        case "regalo":
           audio = new Audio("./audios/regalo.wav");
           audio.load();
           audio.play();
           break;
        case "casa":
           audio = new Audio("./audios/casa.wav");
           audio.load();
           audio.play();
           break;   
        case "martillo":
           audio = new Audio("./audios/martillo.wav");
           audio.load();
           audio.play();
           break;
        case "reloj":
           audio = new Audio("./audios/reloj.wav");
           audio.load();
           audio.play();
           break;   
        case "corazon":
           audio = new Audio("./audios/corazon.wav");
           audio.load();
           audio.play();
           break;
        case "tormenta":
           audio = new Audio("./audios/tormenta.wav");
           audio.load();
           audio.play();
           break;   
        case "llave":
           audio = new Audio("./audios/llave.wav");
           audio.load();
           audio.play();
           break;
        case "rayo":
           audio = new Audio("./audios/rayo.wav");
           audio.load();
           audio.play();
           break;   
        case "luna":
           audio = new Audio("./audios/luna.wav");
           audio.load();
           audio.play();
           break;
        case "lapiz":
           audio = new Audio("./audios/lapiz.wav");
           audio.load();
           audio.play();
           break;
        case "tijeras":
           audio = new Audio("./audios/tijeras.wav");
           audio.load();
           audio.play();
           break;   
        case "destornillador":
           audio = new Audio("./audios/destornillador.wav");
           audio.load();
           audio.play();
                break;
        case "lupa":
            audio = new Audio("./audios/lupa.wav");
            audio.load();
            audio.play();
        break;
        case "estrellas":
            audio = new Audio("./audios/estrellas.wav");
            audio.load();
            audio.play();
            break;
         case "camion":
            audio = new Audio("./audios/camion.wav");
            audio.load();
            audio.play();
            break;   
         case "paraguas":
            audio = new Audio("./audios/paraguas.wav");
            audio.load();
            audio.play();
                 break;
         case "flor":
            audio = new Audio("./audios/flor.wav");
            audio.load();
            audio.play();
         break;   
         case "arbol":
            audio = new Audio("./audios/arbol.wav");
            audio.load();
            audio.play();
            break;   
         case "binoculares":
            audio = new Audio("./audios/binoculares.wav");
            audio.load();
            audio.play();
                 break;
         case "carrito":
            audio = new Audio("./audios/carrito.wav");
            audio.load();
            audio.play();
         break;  
         case "radio":
            audio = new Audio("./audios/radio.wav");
            audio.load();
            audio.play();
         break; 
         case "numeros":
            audio = new Audio("./audios/numeros.wav");
            audio.load();
            audio.play();
         break;                 
        }
       setTimeout(()=>{
          mensaje.style.display="none";

       }, 2300); 
   } 
   function MostrarMenu(){
      let botonmenu=document.getElementById("menuDesplegado");
      if(!menuopen){
         botonmenu.style.display="block";  
         menuopen = true  
      }
      else{
         botonmenu.style.display="none";    
         menuopen = false
      }        
          
}