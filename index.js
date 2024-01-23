

function sortear(){
    const min = document.getElementById("minimo").value
    const max = document.getElementById("maximo").value

    const sorteio = Math.floor(Math.random() * (max - min + 1) + min)

    //document.getElementById("resultado").innerHTML= sorteio
    alert(sorteio)
}
