Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

______________________________________________________________________

Creo un ciclo for che stampi i numeri da 1 a 100, definisco dentro il ciclo la        variabile num
    creo un if statement all'interno con le condizioni:
        if (num%3===0) {console.log("Fizz")}
            else if(num%5===0) {console.log("Buzz")}
            else if(num%3===0 && num%5===0){console.log{"FizzBuzz"}}
                else {console.log(num)}

    inverto la logica condizionale in questo modo poiché il codice esclude automaticamente il terzo else if avendo già visto se il numero non è divisibile per 3 o per 5

        creo un if statement all'interno con le condizioni:
        if (num%3===0 && num%5===0){console.log("FizzBuzz")}

            else if(num%5===0) {console.log("Buzz")}

            else if(num%3===0) {console.log("Fizz")}

            else {console.log(num)}

