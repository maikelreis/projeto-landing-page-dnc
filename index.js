var Leornado = window.document.getElementById("card-Leonardo")
var Samantha = window.document.getElementById("card-Samanta")
var Bruna = window.document.getElementById("card-Bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarParaDireita(){
    Leornado.style = "display:none"
    Samantha.style = "display:flex"
    setaDireita.style = "display:none;margin-top:55px"
    setaEsquerda.style = "display:flex;margin-top:55px"
}

function rolarParaEsquerda(){
    Leornado.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style = "display:flex;margin-top:55px"
    setaEsquerda.style = "display:none;margin-top:55px" 
    
}
