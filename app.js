let carta1 = {
    nome: "Tanjiro Kamado",
    atributos: {
        ataque: 8,
        defesa: 10,
        magia: 10,
     },
     imagem:"https://i.imgur.com/pHGa9Y0.png"
}


let carta2 = {
    nome: "Zenitsu Agatsuma",
    atributos: {
        ataque: 8,
        defesa: 6,
        magia: 8,
     },
     imagem:"https://i.imgur.com/T2Vh4lt.png"
}

let carta3 = {
    nome: "Inosuke Hashibira",
    atributos: {
        ataque: 10,
        defesa: 5,
        magia: 5,
     },
     imagem:"https://i.imgur.com/UMx82Nh.png"
}

let carta4 = {
    nome: "Nezuko Kamado",
    atributos: {
        ataque: 8,
        defesa: 7,
        magia: 9,
     },
     imagem:"https://i.imgur.com/F44AZfb.png"
}


let carta5 = {
    nome: "Kyōjurō Rengoku",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 8,
     },
     imagem:"https://i.imgur.com/YFh0t1p.png"
}

let carta6 = {
    nome: "Muzan Kibutsuji",
    atributos: {
        ataque: 10,
        defesa: 10,
        magia: 11,
     },
     imagem:"https://i.imgur.com/zTLAxTI.png"
}


var cartas = [carta1, carta2, carta3, carta4, carta5, carta6]
var elementoResultado = document.getElementById("resultado")
var cartaMaquina;
var cartaJogador;

function sortearCarta() { 

    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)

    cartaMaquina = cartas[numeroCartaMaquina]

    

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    while (numeroCartaJogador == numeroCartaMaquina) { 
        numeroCartaJogador = parseInt(Math.random() * cartas.length)
    }   
        cartaJogador = cartas[numeroCartaJogador]

        console.log(cartaJogador)
    
        document.getElementById("btnSortear").disabled = true
        document.getElementById("btnJogar").disabled = false

        exibirOpcoes()

        elementoResultado.innerHTML = ""
        
}

function exibirOpcoes() { 
    let opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) { 
        opcoesTexto += "<input class= 'checkmark' type='radio' checked='true' name='atributo' value="+atributo+">" +  atributo + " <br> <br> " 
    }

    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() { 
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtributos.length; i++) { 
        if (radioAtributos[i].checked == true) { 
            return radioAtributos[i].value

        }
    }




}

function jogar() { 
    var atributoSelecionado = obtemAtributoSelecionado()
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if (valorCartaJogador > valorCartaMaquina) { 
        elementoResultado.innerHTML = "Você <strong>venceu</strong> o seu valor de <strong>"+ atributoSelecionado +"</strong> é de <strong>"+ valorCartaJogador +"</strong> e o <strong>"+ cartaMaquina.nome + "</strong> é de <strong>" + valorCartaMaquina+ "</strong><br><br>"
        elementoResultado.innerHTML += "<img class='imgRes' src="+cartaJogador.imagem+">"
        elementoResultado.innerHTML += "<img class='imgVs' src='https://imagensemoldes.com.br/wp-content/uploads/2021/03/VS-PNG-1280x720.png'>"
        elementoResultado.innerHTML += "<img class='imgRes' src="+cartaMaquina.imagem+">"
    } else if (valorCartaMaquina > valorCartaJogador) { 
        elementoResultado.innerHTML = "Você <strong>perdeu</strong>, seu valor de <strong>"+ atributoSelecionado +"</strong> é de <strong>"+ valorCartaJogador +"</strong> e <strong>"+ cartaMaquina.nome + "</strong> é de <strong>" +  valorCartaMaquina+ "</strong><br><br>"
        elementoResultado.innerHTML += "<img class='imgRes' src="+cartaJogador.imagem+">"
        elementoResultado.innerHTML += "<img class='imgVs' src='https://imagensemoldes.com.br/wp-content/uploads/2021/03/VS-PNG-1280x720.png'>"
        elementoResultado.innerHTML += "<img class='imgRes' src="+cartaMaquina.imagem+">"

    } else { 
        elementoResultado.innerHTML = "<strong>Empatou!</strong> O seu valor de <strong>"+ atributoSelecionado +"</strong> é de <strong>"+ valorCartaJogador +"</strong> e <strong>"+ cartaMaquina.nome + "</strong> é de <strong>" +  valorCartaMaquina+ "</strong><br><br>"
        elementoResultado.innerHTML += "<img class='imgRes' src="+cartaJogador.imagem+">"
        elementoResultado.innerHTML += "<img class='imgVs' src='https://imagensemoldes.com.br/wp-content/uploads/2021/03/VS-PNG-1280x720.png'>"
        elementoResultado.innerHTML += "<img class='imgRes' src="+cartaMaquina.imagem+">"
    }

    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnSortear").disabled = false
    

    console.log(cartaMaquina.imagem)
}