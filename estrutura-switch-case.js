
function acaoBotao(params) {
    var valor1, valor2, resultado, operacao, openome

    valor1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("Digite a oparacao: Ex + , - , / , + ")
    valor2 = prompt("Digite o segunto valor: ")

    switch (operacao){
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            openome = "Soma"
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            openome = "Subtração"
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            openome = "Divisão"
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            openome = "Multipolicação"
            break;
    }
    document.getElementById("paragrafo").innerText = "A " + openome + " é: " + parseInt(resultado)

}