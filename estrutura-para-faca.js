function acaoBotao(params) {
    var numero, fatorial, contador

    numero = prompt("Digite o numero apra calcular o fatorial.")

    fatorial = 1;

    for (contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador;
        
    }

    document.getElementById("paragrafo").innerText = "O fatorial de  " + numero + " é: " + fatorial
}