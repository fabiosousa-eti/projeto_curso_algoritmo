
function acaoBotao(params) {
    var valor1, valor2, resultado, operacao, openome

    valor1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a oparacao: Ex + , - , / , + ")
    valor2 = prompt("Digite o segunto valor: ")

    if (operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
        openome = "Soma"
    }else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
        openome = "Subtração"
    }else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
        openome = "Divisão"
    }else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
        openome = "Multipolicação"
    }
    document.getElementById("paragrafo").innerText = "A " + openome + " é: " + parseInt(resultado)

}