const lista = document.getElementById("lista")


for (let i = 1; i < 101; i++) {
    
    
    if (i%15==0) {
        
        lista.innerHTML = lista.innerHTML + `<p>Numero: ${"fizzBuzz"}</p>`;
        
    } else if (i%5==0) {
        
        lista.innerHTML = lista.innerHTML + `<p>Numero: ${"buzz"}</p>`;
        
    } else if (i%3==0) {
        
        lista.innerHTML = lista.innerHTML + `<p>Numero: ${"Fizz"}</p>`;
        
    } 
    else {
        
        lista.innerHTML = lista.innerHTML + `<p>Numero: ${i}</p>`;

    }
    
}



