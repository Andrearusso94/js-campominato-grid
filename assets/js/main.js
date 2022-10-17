//Consegna
//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const buttonGenerator = document.getElementById("go");

buttonGenerator.addEventListener("click", function(){

// seleziono l'elemento dove inserire le caselle
let container = document.querySelector(".container")

// creo variabile con markup del quadrato 
let casella = '<div class="casella"></div>'
let numeroCaselle = 100;

//definisco la classe
let listaCaselle = document.getElementsByClassName("casella")




// creo ciclo for
for (let i = 0; i < numeroCaselle; i++){
    
    //aggiungo la casella al container
    
       container.insertAdjacentHTML("beforeend", `${i}`)
       container.innerHTML += casella
    
    
}

// creo click per giocare
for (let i = 0; i < listaCaselle.length; i++){
    let singolaCasella = listaCaselle[i]
    
    
 
    singolaCasella.addEventListener("click", function(){
        singolaCasella.classList.add("blue")
        console.log(singolaCasella, numeroCaselle)
    })
}


})
