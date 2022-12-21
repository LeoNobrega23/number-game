var numAleatorio = Math.floor(Math.random()* 100) + 1
var palpites = document.querySelector(".guesses")
var ultimoResultado = document.querySelector(".lastResult")
var baixoOuAlto = document.querySelector(".lowOrHi")


var envioPalpite = document.querySelector(".guessSubmit")
var campoPalpite = document.querySelector(".guessField")

var contagemPalpite = 1
var botaoReinicio
envioPalpite.addEventListener('click', conferirPalpite)

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)
    if (contagemPalpite === 1) {
         palpites.textContent = 'Palpites anteriores: '
        }

        palpites.textContent += palpiteUsuario + ' '
   if (palpiteUsuario === numAleatorio) {
        ultimoResultado.textContent = `Parabéns! Você acertou, o número era ${numAleatorio}`
        ultimoResultado.style.backgroundColor = 'rgb(12, 109, 12)'
        baixoOuAlto.textContent= ''
     configFimDeJogo()
    } else if (contagemPalpite === 10) {
    ultimoResultado.textContent = `Fim de jogo! O número correto era ${numAleatorio}`
    ultimoResultado.style.backgroundColor = 'rgb(161, 28, 5)'
    baixoOuAlto.textContent = " "
    configFimDeJogo()
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
  
 
 function configFimDeJogo(){
    campoPalpite.disabled = true
    envioPalpite.disabled = true
    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar novo jogo' 
    document.body.appendChild(botaoReinicio)
    botaoReinicio.style.backgroundColor = 'rgb(9, 34, 73)'
    botaoReinicio.style.border = 'none'
    botaoReinicio.style.padding = '6px'
    botaoReinicio.style.borderRadius = '15px'
    ultimoResultado.style.backgroundColor = 'rgb(12, 109, 12)'
    ultimoResultado.style.color = 'whitesmoke'
    botaoReinicio.addEventListener('click', reniciarJogo)
}

function reniciarJogo(){
    contagemPalpite = 1
    var reiniciarParas = document.querySelector('.resultParas p')
    for (var i = 0; i < reiniciarParas.length ; i++) {
        reiniciarParas[i].textContent =''
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio)
    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ''
    campoPalpite.focus()
    ultimoResultado.textContent = ''
    ultimoResultado.style.backgroundColor = ''
    palpites.textContent = ''

   
    numAleatorio = Math.floor(Math.random() * 100) +1
}
