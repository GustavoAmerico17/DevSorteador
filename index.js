

function sortear(){
    const min = document.getElementById("minimo").value
    const max = document.getElementById("maximo").value

    
    const button = document.querySelector(".button-main")
if(min >= max){
        alert("O valor minimo tem que ser MENOR que o valor maximo!")

    }
else{
        const sorteio = Math.floor(Math.random() * (max - min + 1) + min)
        
        alert( sorteio)
    }

    //document.getElementById("resultado").innerHTML= sorteio
    
}
