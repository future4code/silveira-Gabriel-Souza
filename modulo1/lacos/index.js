/*  
    1)A cada laço o valor de i que comeca de 0 é incrementado em 0 e termina  em 4 , esse valor é utilizado
    em uma somatoria do mesmo , guardado na variavel valor 
    10
    
    2) 
        A)10 ,11 ,12 ,15 
        B)Naõ
     
     3)     *
            **
            ***
            ****  

*/
//1
function pets(){
    let qtd=Number(prompt("Quantidade de animais"))
    if(qtd==0)
        console.log("Que pena! Você pode adotar um pet!")
    else{
        let animais =[]
        for(let i=0 ;i<qtd;i++)
         animais[i]=prompt("digite o nome do "+i+"º animal")
        
         for(let animal of animais)
            console.log(animal)

        }    

}
//2

let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function imprime(arrayOriginal) {
    for (let numero of arrayOriginal)
        console.log(numero)
}
function imprimeDvidido10(arrayOriginal) {
    for (let numero of arrayOriginal)
        console.log(numero / 10)
}

function imprimePares(arrayOriginal) {
    let pares = []
    for (let numero of arrayOriginal)
        if (numero % 2 == 0)
            pares.push(numero)
    imprime(pares)
}
function criaString(arrayOriginal) {
    let strings = []
    for (let i = 0; i < arrayOriginal.length; i++) {
        strings.push("O elemento do Index " + i + "" + " é:" + arrayOriginal[i])
    }
    imprime(strings)
}

function maiorMenor(arrayOriginal) {
    let maior = 0, menor = 999;
    for (let numero of arrayOriginal)

        if (numero < menor)
            menor = numero
        else

            if (numero > maior)
                maior = numero


    console.log(maior, menor)

}
