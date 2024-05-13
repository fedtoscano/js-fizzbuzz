//Seleziono globalmente il div container poiché mi servirà all'interno dei condizionali

const containerEl = document.getElementById('container');

//Creo un ciclo for
for (i=1; i<=100; i++){
    const newEl = document.createElement("div")
    const newELText = document.createElement("div")
    
    // Definisco le condizioni
    if(i%3===0 && i%5===0){        
        newEl.classList.add("element", "fizzbuzz")
        newELText.innerHTML = "FizzBuzz!"
    }else if(i%5===0){
        newEl.classList.add("element", "buzz")
        newELText.innerHTML = "Buzz!"
    }else if (i%3===0){
        newEl.classList.add("element", "fizz")
        newELText.innerHTML = "Fizz!"
    }else{
        newEl.classList.add("element", "number")
        newELText.innerHTML = i
    }

    //Aggiorno il DOM creando un nuovo elemento
        containerEl.appendChild(newEl);
        newEl.appendChild(newELText)
        newELText.classList.add("element-text")
}

