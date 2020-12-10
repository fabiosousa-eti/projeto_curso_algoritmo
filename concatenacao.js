/*    
    nome: caractere
    numero: real

   escreval("Digite o nome:")
   leia(nome)
   escreval("Digite o numero:")
   leia(numero)
   
   escreval(nome, " : ", numero)
   */

   var nome, numero

   nome = prompt("Digite o nome:")
   numero = prompt("Digite o numero:")

   document.getElementById("paragrafo").innerText = nome + " : " + numero