/*
    10 10 10
    


let numeroHorasDia = prompt("Quantas horas voce trabalha?")
let valorDia = prompt("Quanto voce recebe por dia ?");
alert("Voce recebe $"+numeroHorasDia/valorDia + " por hora");
*/

//1//

let nome , idade  ; 
console.log(typeof (nome));
console.log(typeof(idade));
// imprime indefinido pois as variaveis não foram atribuido nenhum tipo de dado 

nome = prompt("Qual o nome?");
idade= prompt("Qual a Idade?");
console.log(typeof (nome));
console.log(typeof(idade));
// que ambas variaveis são do tipo string

console.log("ola "+nome+", voce tem "+idade+" anos")


// 2 //

let r1,r2,r3 ,p1,p2,p3;
p1= "Voce é hetero?";
p2="Voce é mulher?";
p3="Voce tem mais de 25 anos ?";
r1 = prompt(p1);
r2= prompt(p2);
r3=prompt(p3);
console.log(p1+r1);
console.log(p2+r2);
console.log(p3+r3);



// 3 //

let a ,b ,c ;
a=10;
b=25;
c=a;
a=b;
b=c;

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


/// desafio ///
let n1 , n2  , x ,y ; 
n1=Number( prompt("Digite o primeiro numero "));
n2=Number( prompt("Digite o segundo numero"));
x=n1+n2;
y=n1*n2;
console.log(x);
console.log(y);

