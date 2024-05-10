//Seleziono globalmente il div container poiché mi servirà all'interno dei condizionali

const containerEl = document.getElementById('container');

//Creo un ciclo for
for (i=1; i<=100; i++){
    // Definisco le condizioni
    if(i%3===0 && i%5===0){        
        //Aggiorno il DOM creando un nuovo elemento
        const newEl = document.createElement("div")
        newEl.classList.add("element", "fizzbuzz")

        //Creo l'elemento che contiene il testo all'interno di newEl
        const newELText = document.createElement("div")
        newELText.classList.add("element-text")

        //Aggiungo newELText a newEl
        newELText.innerHTML = "FizzBuzz!"
        newEl.appendChild(newELText)

        //Aggiungo l'elemento al div #container
        containerEl.appendChild(newEl);
    }
    
    else if(i%5===0){
        const newEl = document.createElement("div")
        const newELText = document.createElement("div")

        newELText.classList.add("element-text")
        newEl.classList.add("element", "buzz")

        newEl.appendChild(newELText)
        newELText.innerHTML = "Buzz!"

        containerEl.appendChild(newEl);
    } 
    
    else if (i%3===0){
        const newEl = document.createElement("div")
        const newELText = document.createElement("div")

        newELText.classList.add("element-text")
        newEl.classList.add("element", "fizz")

        newEl.appendChild(newELText)
        newELText.innerHTML = "Fizz!"

        containerEl.appendChild(newEl);
    } 
    
    else{
        const newEl = document.createElement("div")
        const newELText = document.createElement("div")

        newELText.classList.add("element-text")
        newEl.classList.add("element", "number")

        newEl.appendChild(newELText)
        newELText.innerHTML = i
        
        containerEl.appendChild(newEl);
    }
}

