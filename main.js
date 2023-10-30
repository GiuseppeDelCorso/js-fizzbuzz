const lista = document.getElementById("lista")


for (let i = 0; i < 101; i++) {
    
    lista.innerHTML = lista.innerHTML + `<p>Numero: ${i}</p>`;
    
    if (i%3==0) {
       
        lista.innerHTML = lista.innerHTML + `<p>Numero: ${"fizz"}</p>`;
        
    } else if (i%5==0) {
       
        lista.innerHTML = lista.innerHTML + `<p>Numero: ${"buzz"}</p>`;
        
    }
    
}



