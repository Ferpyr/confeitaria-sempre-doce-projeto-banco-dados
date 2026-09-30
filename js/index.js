//Declaração de variáveis
let indice = 0
let imagens = [
    "img/bolo1.png",
    "img/bolo2.png",
    "img/bolo3.png",
    "img/bolo4.png",
    "img/bolo5.png",
    "img/bolo6.png"
]
//função para trocar a imagem
function trocar() {
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

setInterval(function() {
    trocar()
    indice++
    if(indice >= imagens.length) {
        indice = 0 }
}, 1000)

//trocar()