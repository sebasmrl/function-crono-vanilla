
const cronometroIni = ( minutos = 1, contentElement, reloj , accion=({contentElement, reloj, contador})=>{} ) => { 
    
    let contador = minutos*60;
    contentElement.appendChild(reloj);
    const idSetInterval = setInterval(()=>{
        accion({contentElement, reloj, contador}); //envio obj
        contador--;

        if(contador <= 0) {
            clearInterval(idSetInterval);
            //unmount - desmontar
            contentElement.removeChild(reloj);
        }
    }, 1000); //se activa cada segundo
}




const elementoContenedor = document.getElementById('relojes')

const createCrono = (time,elementoContenedor, idCronometro)=>{
    //createCronoeloj
    const reloj = document.createElement('h1');
    reloj.textContent = 'Usuario'+idCronometro;
    

    cronometroIni(time, elementoContenedor, reloj,  ({contador, reloj})=>{ //desestructuracion de obj mandado en la callback
        //defina la tranformacion del reloj
        reloj.textContent = reloj.textContent +' | '+contador 
    });

}

createCrono(1, elementoContenedor, 1);
createCrono(3, elementoContenedor, 2);
createCrono(2, elementoContenedor, 3);
createCrono(3, elementoContenedor, 4);


const btnCreateCrono =document.getElementById('crono');
btnCreateCrono.addEventListener('click', (e)=>{
createCrono(3000, elementoContenedor, 'FromClick');

})