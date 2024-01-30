const elementoNumero = document.querySelector('.display');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start()

recognition.addeventListener('result', onSpeak)

function onSpeak(e) {
    numero = e.results[0][0].transcript
    exibeNumero(numero)
}

function exibeNumero(numero) {
    elementoNumero.innerHTML += `
    ${numero}
    `
}

recognition.addeventListener('end', () => recognition.start())
