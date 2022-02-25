/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

function blackJack() {
   console.log("Boas vindas ao jogo de Blackjack!")
   let confirm = window.confirm("Quer iniciar uma nova rodada?")
   if (confirm === true)
   { 
      var usuario = [];
      var computador = [];
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      computador.push(comprarCarta())
      computador.push(comprarCarta())
      let pontosUsuario = usuario[0].valor+usuario[1].valor;
      let pontosComputador = computador[0].valor+computador[1].valor;
      console.log(`Usuário - cartas : ${usuario[0].texto},${usuario[1].texto} - ${pontosUsuario}`)
      console.log(`Computador - cartas : ${computador[0].texto},${computador[1].texto} -${pontosComputador} `)
      if(pontosComputador>pontosUsuario)
      {
         console.log("o Computador ganhou")
      }
      else
         if(pontosComputador<pontosUsuario)
         {
            console.log("O usuário ganhou!")
         }
         else
         console.log("Empatado")

   }
   else {
   console.log("O jogo acabou");
   }

}
blackJack()