/**
 * This JavaScript function always returns a random 
 * number between min and max (both included)
 * 
 * @url https://www.w3schools.com/js/js_random.asp
 * 
 * @param min Number min  random 
 * @param max Number max random
 * @returns int Random Number
 */


	






function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.getElementById('botonRojo').onclick=function(){
	document.getElementById('botonRojo').style.opacity='1';
	document.getElementById('audioBotonRojo').play();
	setTimeout(function(){
		document.getElementById('botonRojo').style.opacity='0.2';
	},700);
	
}

document.getElementById('botonVerde').onclick=function(){
	document.getElementById('botonVerde').style.opacity='1';
	document.getElementById('audioBotonVerde').play();
	setTimeout(function(){
		document.getElementById('botonVerde').style.opacity='0.2';
	},700);
	
}

document.getElementById('botonAzul').onclick=function(){
	document.getElementById('botonAzul').style.opacity='1';
	document.getElementById('audioBotonAzul').play();
	setTimeout(function(){
		document.getElementById('botonAzul').style.opacity='0.2';
	},700);
	

}
document.getElementById('botonAmarillo').onclick=function(){
	document.getElementById('botonAmarillo').style.opacity='1';
	document.getElementById('audioBotonAmarillo').play();
	setTimeout(function(){
		document.getElementById('botonAmarillo').style.opacity='0.2';
	},700);
	
}


//Se programa que cuando se cliqueé el botón "EMPEZAR" comienze la partida...
document.getElementById('start').onclick=comienzo;


/**
 * Funcion que recorre el array y reproduce la secuencia de sonidos
 * @returns 
 */
var nivel = 0;          // indica el nivel actual
var secuencia;          // array con los colores a repetir
var indSec;             // índice de la secuencia de colores



function comienzo()      //funcion que comienza el programa resetea, añade colores. y los reproduce
{
	reseteaAparato();
	aniadeColorSecuencia();
	reproduceSecuencia();
}	

	
function reseteaAparato()  //funcion que resetea la secuencia y el indice, hace rest de las escuchas del event 
{
		secuencia = [];
		indSec = 0;
		 document.getElementById('botonRojo').removeEventListener('click', compruebaPulsacion);  //reinicializa el escuchador de eventos
         document.getElementById('botonVerde').removeEventListener('click', compruebaPulsacion);
         document.getElementById('botonAzul').removeEventListener('click', compruebaPulsacion);
         document.getElementById('botonAmarillo').removeEventListener('click', compruebaPulsacion);
}
	
	
function aniadeColorSecuencia()   // añade un color utilizando la funcion getRndInteger
{
	var colores = ['botonVerde', 'botonRojo', 'botonAmarillo', 'botonAzul'];   
    secuencia.push( colores[getRndInteger(0,3)] );   // se añade un color aleatorio al final del array
    return;											// finaliza la ejecución de la función
}

function reproduceSecuencia()      // reproduce la secuencia de la maquina
{
		
		console.log ("vvvvvvla longitud de la secuencia es "+ secuencia.length);
		console.log ("vvvvvindice secuencia es "+ indSec);
		if(indSec < secuencia.length){      // Si quedan colores por encender en la reproducción de la secuencia...
        
			enciendeColor();
		}
		else{                               // Secuencia reproducida, ahora le toca al jugador repetirla
        
			indSec = 0;
			console.log ("segunda pulsacion");
			document.getElementById('botonRojo').addEventListener('click', compruebaPulsacion); //recoge el event con el ecuchador
			console.log("rojo");
			
			document.getElementById('botonVerde').addEventListener('click', compruebaPulsacion);
			console.log("verde");
			document.getElementById('botonAzul').addEventListener('click', compruebaPulsacion);
			console.log("azul");
			document.getElementById('botonAmarillo').addEventListener('click', compruebaPulsacion);
			console.log("amarillo");
			console.log("parado");
		}
	}
    

    
		function enciendeColor()      // la maquina enciende color
		{
			
			switch(secuencia[indSec])
			{
	
				case 'botonVerde':
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonVerde').click();
				console.log ("se enciende botonVerde");
				indSec++;
					break;
				case 'botonRojo':
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonRojo').click();
				console.log ("se enciende botonRojo");
				indSec++;
					break;
				case 'botonAmarillo':
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonAmarillo').click();
				console.log ("se enciende botonAmarillo");
				indSec++;
					break;
				case 'botonAzul':
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonAzul').click();
				console.log ("se enciende botonAzul");
				indSec++;
					break;
			}	

			console.log ("despues de encender el boton pulsado el indice de secuencia es  " + indSec);
			
			setTimeout(reproduceSecuencia, 750);
		}	
		
        function compruebaPulsacion(event)  //recoge el evento en escucha y lo asigna a una variable
		{
        	
   	       	
        		var pulsador = event.target;
        		console.log (pulsador.id + secuencia[indSec]);
        		
                if(pulsador.id == secuencia[indSec]){       //compara y Si se pulsa el pulsador correcto...
                    enciendePulsador();
                    return;
                }
                else{                                       // ERROR
                	alert("!!!!! HAS PERDIDO ¡¡¡¡¡" +"\r\n" +"Tu nivel alcanzado  es:  " +nivel);
                    document.getElementById('nivel').nivel;
                	alert(document.getElementById("error").innerHTML);
					return false;
                }
            
        }
		
        function enciendePulsador() // enciende la jugada de humano
		{
        	
			 document.getElementById('botonRojo').removeEventListener('click', compruebaPulsacion); //reinicializa el escuchador de eventos 
             document.getElementById('botonVerde').removeEventListener('click', compruebaPulsacion);
             document.getElementById('botonAzul').removeEventListener('click', compruebaPulsacion);
             document.getElementById('botonAmarillo').removeEventListener('click', compruebaPulsacion);
 
    		switch(secuencia[indSec]){    	
			 
            	case 'botonVerde':
    				// Se utiliza el metodo click para llamar al evento onclick
    				document.getElementById('botonVerde').click();
    				break;
    			case 'botonRojo':
    				// Se utiliza el metodo click para llamar al evento onclick
    				document.getElementById('botonRojo').click();
    				break;
    			case 'botonAmarillo':
    				// Se utiliza el metodo click para llamar al evento onclick
    				document.getElementById('botonAmarillo').click();
    				break;
    			case 'botonAzul':
    				// Se utiliza el metodo click para llamar al evento onclick
    				document.getElementById('botonAzul').click();
    				break;
    				
            }
    		
    		console.log("enciende pulsador");
    		 		
            indSec++;                                   // aumenta en 1 indSec
		

            if (indSec == secuencia.length) {             // Si ya no queda secuencia, Nivel superado
                                                
            	nivel++;                                // se pasa al siguiente nivel
               
                indSec = 0;   

                document.getElementById('botonRojo').removeEventListener('click', compruebaPulsacion);
                document.getElementById('botonVerde').removeEventListener('click', compruebaPulsacion);
                document.getElementById('botonAzul').removeEventListener('click', compruebaPulsacion);
                document.getElementById('botonAmarillo').removeEventListener('click', compruebaPulsacion);
               
                aniadeColorSecuencia();                 // se añade un nuevo color al final de la secuencia
                
                                         				
                
                setTimeout(reproduceSecuencia, 1200);   // y se programa que tras 1200 mseg se reproduzca la secuencia, repitiéndose así el proceso
                
            }
			else {
				document.getElementById('botonRojo').addEventListener('click', compruebaPulsacion);  //recoge el event con el ecuchador
                document.getElementById('botonVerde').addEventListener('click', compruebaPulsacion);
                document.getElementById('botonAzul').addEventListener('click', compruebaPulsacion);
                document.getElementById('botonAmarillo').addEventListener('click', compruebaPulsacion);
			}
        
       } 
   







     
