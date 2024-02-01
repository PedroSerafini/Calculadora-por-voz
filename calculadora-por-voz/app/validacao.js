function validacao (numero) {

    if(chuteInvalido(numero)) {
        alert("Número Inválido")
    }
}

function chuteInvalido(num) {
    return Number.isNaN(num)
}
