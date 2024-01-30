const operatorKey = document.querySelectorAll('.key--operator')
const operatorEqual = document.querySelector('.key--equal')

operatorKey.forEach(operator => {
    operator.addEventListener('click', () => {
        exibeOperador(operator.innerHTML)
    })
})

function exibeOperador(operador) {
    elementoNumero.innerHTML += `
    ${operador}
    `
}

operatorEqual.addEventListener('click', () => {
    var resultado = calcula()
    exibirResltado(resultado)
})

function calcula() {
    return eval(elementoNumero.innerHTML)
}

function exibirResltado(resultado) {
    elementoNumero.innerHTML = `
    ${resultado}
    `
}