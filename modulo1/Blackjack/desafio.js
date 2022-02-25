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
   function campeao(a,b)
   {
      if(a>b && a<=21)
         return "Usuario foi campeâo"
       else
         if(b>a && b<=21)
         return "Computador foi campeão"
         else

         return   "Empate"  
   }

    function blackJack()
 {
     let aux ,aux2 ; 
      let confirm = window.confirm("Quer iniciar uma nova rodada?")
      if (confirm === true)
      { 
         var usuario = [];
         var computador = [];
         usuario.push(comprarCarta())
         aux=usuario[usuario.length-1].texto
        usuario.push(comprarCarta())
        aux=usuario[usuario.length-1].texto
        computador.push(comprarCarta())
        aux2=usuario[usuario.length-1].texto
         computador.push(comprarCarta())
         aux2=usuario[usuario.length-1].texto
         let pontosUsuario = usuario[0].valor+usuario[1].valor;
         let pontosComputador = computador[0].valor+computador[1].valor;
      
        if(computador[0].texto.includes("A") && computador[1].texto.includes("A"))
        {
           do{
              computador=[];
              computador.push(comprarCarta())
              computador.push(comprarCarta())
               }while(computador[0].texto.include("A")&&computador[1].texto.include("A"))
        }
        if(usuario[0].texto.includes("A")&&usuario[1].texto.includes("A"))
        {
         
           do{
            usuario=[];
            usuario.push(comprarCarta())
            usuario.push(comprarCarta())
               }while(usuario[0].texto.include("A")&&usuario[1].texto.include("A"))
        }
        confirm = window.confirm(`Suas cartas sao ${usuario[0].texto} ,${usuario[1].texto} .
                              ${"\n"} A carta revelada do computador é ${computador[0].texto}.
                              ${'\n'}  Deseja comprar mais uma carta ? `)
      
         while(confirm==true && pontosUsuario<=21)
         {  pontosUsuario=0 ;
            aux=''
            usuario.push(comprarCarta())
            for(user of usuario )
            {
               pontosUsuario+= Number( user.valor)
               aux+=user.texto+" ";
               

            }

            confirm = window.confirm(`Suas cartas sao ${aux}  pontuação total ${pontosUsuario}.
            ${"\n"} A carta revelada do computador é ${computador[0].texto} ${computador[1].texto}.  
            Deseja comprar mais uma carta ? `)
      

         }
         if(pontosComputador>=pontosUsuario)
            {    do
               
                  {  pontosComputador=0 ;
                     aux2="";
                     
                     computador.push(comprarCarta())
                     for(user of computador )
                     {
                        pontosComputador+= Number( user.valor)
                        aux2=user.texto+" ";

                     }

                  } while(pontosComputador>=pontosUsuario)
            }

         alert(`Suas cartas são ${aux} . Sua pontuação é ${pontosUsuario}."\n"As cartas do computador são ${computador[0].texto} ${computador[1].texto}. A pontuação do computador é ${pontosComputador}."\n" 
           `+campeao(Number(pontosUsuario),Number(pontosComputador)))
      }
 }
 blackJack()