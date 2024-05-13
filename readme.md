Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

______________________________________________________________________

Creo un ciclo for che stampi i numeri da 1 a 100, utilizzo l'indice all'interno
    creo un if statement all'interno con le condizioni:
        se il numero è divisibile per 3
            scrivo fizz
        se il numero è divisibile per 5
            scrivo buzz
        se il numero è divisibile per 3 e per 5
            scrivo fizzbuzz

    inverto la logica condizionale in questo modo poiché il codice esclude automaticamente il terzo else if avendo già visto se il numero non è divisibile per 3 o per 5

        se il numero è divisibile per 3 e per 5
            scrivo fizzbuzz
        se il numero è divisibile per 3
            scrivo fizz
        se il numero è divisibile per 5
            scrivo buzz
    

