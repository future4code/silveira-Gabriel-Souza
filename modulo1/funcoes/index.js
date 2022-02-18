/*
    1   
        10
        50
        da erro pois a função tem que retornar algo 
     
    2   
        a - Ela retorna se a palavra cenoura esta na frase 
        b - true
            true
            true




 
   // 1 //


  //a  
function minhaFuncao() {
    console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.");

}

 //b

function minhaFuncao(nome , idade , cidade , profissao) {
	return "Eu sou"+nome+", tenho "+idade+" ,moro em  "+cidade+" e sou "+profissao
}

*/

// 2 // 
//a//

function soma(numero1 , numero2 ) {
	return numero1+numero2
}
console.log(soma(1,2,))


//b//
function primeiroMaiorSegundo(numero1 , numero2 ) {
	return numero1>numero2
}

// c //
function par(numero1  ) {
	return numero1%2==0
}


 
function retornaTamnho(frase ) {
   
    let tam = frase.length ; 
    frase=frase.toUpperCase() ; 


    console.log(tam+" "+frase)
}

// 3 //

function soma(n1 ,  n2  ) {
    
    console.log("soma : ", n1+n2)
}
function diferenca(n1 ,  n2 ) {
   
    console.log("diferença : ", n1-n2)

}
function multiplicacao(n1 ,  n2 ) {
   
    console.log("Multiplicação: ", n1*n2)

}

function divisao(n1 ,  n2 ) {
   
    console.log("divisao: ", n1/n2)

}
function calculadora()
{
    let n1  =Number( prompt("digite o primeiro numero "))
    let n2  =Number( prompt("digite o segundo numero "))
    console.log( 'Números inseridos : '+n1 +" e "+n2)
    soma(n1,n2)
    diferenca(n1,n2)
    multiplicacao(n1,n2)
    divisao(n1,n2)
}
calculadora()

