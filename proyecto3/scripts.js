var numerosRandoms = []; 

window.onload = empezarJuego;

function empezarJuego() {

    for(let i=0; i< 18; i++){
        var randomAux = Math.floor(Math.random()*(19-1))+1
        if(!numerosRandoms.includes(randomAux)){
            numerosRandoms.push(randomAux);
        }
        else{        
            
            if (numerosRandoms.length < 18) {
                do{
                    randomAux = Math.floor(Math.random()*(19-1))+1
                    
                }while(numerosRandoms.includes(randomAux))
                numerosRandoms.push(randomAux);
            }
            
        }
    }
    
    generarFichas();
}


function generarFichas() {
    let contenedorFichas = document.getElementById("contenedor");

    for (let i = 0; i < numerosRandoms.length; i++) {
        let ficha = document.createElement("div");
        ficha.id = numerosRandoms[i];
        contenedorFichas.appendChild(ficha);
    }

}