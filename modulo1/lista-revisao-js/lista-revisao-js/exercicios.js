// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length  
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let aux = []
    for(let a=array.length-1 , i = 0 ; i<array.length ; i++ , a -- )
    {
        aux[i]=array[a]
    }
    return aux ; 
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
   array.sort((a,b)=>a-b)
   return array
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let aux=[];
    for (let index = 0; index < array.length; index++) {
        if(array[index]%2==0)
            aux.push(array[index])
    }
    return aux 
  
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let aux=retornaNumerosPares(array);
  for (let index = 0; index < aux.length; index++) 
        aux[index]=Math.pow(aux[index],2)    


     
   return aux     
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior=0 ;
    for (let index = 0; index < array.length; index++) {
        if(array[index]>maior)
          maior=array[index]
    }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let a= {maiorNumero:0, maiorDivisivelPorMenor:true,diferenca:0}
 if(num1>num2)
   {
        a.maiorNumero=num1
        if(num1%num2==0)
            a.maiorDivisivelPorMenor=true
        else
            a.maiorDivisivelPorMenor=false

         a.diferenca=num1-num2;   
   }
   else  
   {
        a.maiorNumero=num2
        if(num2%num1==0)
            a.maiorDivisivelPorMenor=true
            else
            a.maiorDivisivelPorMenor=false
    
    a.diferenca=num2-num1
   }
    return a ; 
    
}

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
   let aux8=[];
    for (let index = 0; aux8.length < n; index++) 
        if(index%2===0)
           aux8.push(index)
  
    return aux8
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA+ ladoC) && ladoC < (ladoA + ladoB)) {

        if (ladoA == ladoB && ladoB == ladoC) {
          return 'Equilátero'
        }
        else if (ladoA == ladoB || ladoA== ladoC || ladoC == ladoB) {
          return 'Isósceles'
        }
        else {
          return 'Escaleno'
        }
      }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior=[0,0]
    let menor=[999,999]
    for (let index = 0; index < array.length; index++) 
        {
            if(array[index]>maior[0])
               {
                    maior[1]=maior[0]
                    maior[0]=array[index]
               }
             else
                if(array[index]>maior[1])
                    maior[1]=array[index]
            if(array[index]<menor[0])
                    {
                         menor[1]=menor[0]
                         menor[0]=array[index]
                    }
                  else
                     if(array[index]<menor[1])
                         menor[1]=array[index]
                         
        }
        maior[0]=maior[1]
        maior[1]=menor[1]
        return  maior
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {...pessoa}
  novaPessoa.nome="ANÔNIMO"
  return novaPessoa
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(item=>(item.altura>1.5 && item.idade>14 && item.idade<60))
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 return pessoas.filter(item=>!(item.altura>1.5 && item.idade>14 && item.idade<60))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (const conta in contas) {
        let valor=0;
        if(conta.compras.length()!=0)
        {
            for(let i= conta.compras.length(); i>0 ; )
            {
                valor=valor+conta.compras.push()
            }
        }
        conta.saldoTotal=conta.saldoTotal-valor;
        }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   
    consultas.sort(function (a, b) {
	
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
     
    });
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
	
        return (a.dataDaConsulta < b.dataDaConsulta) ? 1 : ((b.dataDaConsulta < a.dataDaConsulta) ? -1 : 0);
     
    });
    return consultas
}