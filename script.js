// Variavéis

var numAleatorio = Math.floor(Math.random()* 100) + 1
var palpites = document.querySelector(".guesses")
var ultimoResultado = document.querySelector(".lastResult")
var baixoOuAlto = document.querySelector(".lowOrHi")
var botaoReinicio = document.querySelector('.btn') 
    botaoReinicio.style.display = 'none'

var envioPalpite = document.querySelector(".guessSubmit")
var campoPalpite = document.querySelector(".guessField")

var contagemPalpite = 1
var botaoReinicio
envioPalpite.addEventListener('click', conferirPalpite)

// Conferir palpite

function conferirPalpite() {

    var palpiteUsuario = Number(campoPalpite.value)

    if (contagemPalpite === 1) {
         palpites.textContent = 'Palpites anteriores: '
        }

        palpites.textContent += palpiteUsuario + ' '

        // Se palpite for igual a número aleatório
   if (palpiteUsuario === numAleatorio) {
        ultimoResultado.textContent = `Parabéns! Você acertou, o número era ${numAleatorio}`

        ultimoResultado.style.backgroundColor = 'rgb(12, 109, 12)'

        baixoOuAlto.textContent= ''

     configFimDeJogo()

      // Se palpites chegar a 10 tentativas
    } else if (contagemPalpite === 10){

    ultimoResultado.textContent = `Fim de jogo! O número correto era ${numAleatorio}`

    ultimoResultado.style.backgroundColor ='rgb(161, 28, 5)'

    baixoOuAlto.textContent = " "

    configFimDeJogo()

     // Se palpite for menor ou maior que o  número aleatório
    } else {
        ultimoResultado.textContent = 'Errado'

        ultimoResultado.style.backgroundColor = 'rgb(161, 28, 5)'

        if (palpiteUsuario < numAleatorio) {

            baixoOuAlto.textContent= 'Muito baixo'

        } else if (palpiteUsuario > numAleatorio){

            baixoOuAlto.textContent = 'Muito alto'
        }
    }

    contagemPalpite++

    campoPalpite.value =''

    campoPalpite.focus()
 }
  
 // Fim do jogo 

 function configFimDeJogo(){

    campoPalpite.disabled = true

    envioPalpite.disabled = true

    botaoReinicio.style.display = 'block'

    botaoReinicio.addEventListener('click', reniciarJogo)
}

// Reiniciar o jogo

function reniciarJogo(){
    contagemPalpite = 1
    var reiniciarParas = document.querySelector('.resultParas p')

    for (var i = 0; i < reiniciarParas.length ; i++) {
        reiniciarParas[i].textContent =''
    }

    botaoReinicio.style.display = 'none' 

    campoPalpite.disabled = false

    envioPalpite.disabled = false

    campoPalpite.value = ''

    campoPalpite.focus()

    ultimoResultado.textContent = ''

    ultimoResultado.style.backgroundColor = ''

    palpites.textContent = ''

    numAleatorio = Math.floor(Math.random() * 100) +1
}
