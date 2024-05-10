//Seleziono globalmente il div container poiché mi servirà all'interno dei condizionali

const containerEl = document.getElementById('container');

//Creo un ciclo for
for (i=1; i<=100; i++){
    // Definisco le condizioni
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
        
        //Aggiorno il DOM creando un nuovo elemento
        const newEl = document.createElement("div")
        newEl.classList.add("element")
        newEl.innerHTML = "FizzBuzz"

        //Aggiungo l'elemento al div #container
        containerEl.appendChild(newEl);
    }
    
    else if(i%5===0){
        console.log("Buzz");
    } 
    
    else if (i%3===0){
        console.log("Fizz");
    } 
    
    else{
        console.log(i);
    }
}

