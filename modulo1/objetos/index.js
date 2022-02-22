/*
1-- Matheus Nachtergaele
    Virginia Cavendish
    globo 14hrs

2-- Juca ,3SRD
    Juba 3,SRD
    Jubo 3,SRD
    espelhao objeto cachorro

3-- false
    undefined

    a funçãoi esta retornando se existe a ocorrencia da propriedade(atributo do objeto) backender 
    como altura não é um atributo retorna false 

//////////////////////////////////////
*/
// 1 
const pessoa = {
    nome: "Gabriel", 
    apelidos: ["JHEY", "Biel", "Gabi"]
}

function imprimeApelidos(pessoa)
{
console.log(`Eu sou ${pessoa.nome} e mas pode me chamar de : ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
imprimeApelidos(pessoa)

const novoUsuario = {
    ...pessoa , 
    apelidos:[`gabi` ,`biel`, `jhey` ]

}
imprimeApelidos(novoUsuario)


////// 2
const pessoa1 ={
    nome:"gabriel",
    idade: 25 ,
    profissao :"eletricista"

}

const pessoa2 ={
    nome:"leticia",
    idade: 25 ,
    profissao :"engenheira"

}

function lista(pessoa)
{
    const vetor = [pessoa.nome,pessoa.nome.length,pessoa.idade,pessoa.profissao,pessoa.profissao.length] ; 
   return   vetor
}


//// 3 ////

var carrinho = [] ;
const fruta ={
    Nome:"limao",
    disponibilidade : true , 

}
const fruta1 ={
    Nome:"laranja",
    disponibilidade : true , 

}
const fruta2 ={
    Nome:"uva",
    disponibilidade : true , 

}
function addCarrinho(fruta)
{
    carrinho.push(fruta)
}

addCarrinho(fruta)
addCarrinho(fruta1)
addCarrinho(fruta2)
console.log(carrinho)


// desafio 1 

function imprimeObj() {
    const objeto = {
        descri: prompt("nome"),
        ano: Number(prompt("idade")),
        profissao: prompt("Profissão"),
    }


    console.log(objeto)
}
imprimeObj()
/// desafio 2 
const filme1 ={
    nome:"aaaaaaa",
    ano :1980
}
const filme2={
    nome:"bbbbbbbb",
    ano :1980

}

function compara(filme1,filme2)
{
    console.log("O primeiro filme foi lançado antes do segundo?",filme1.ano<filme2.ano)

    console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.ano===filme2.ano )
}
compara(filme1,filme2)
// desafio 3 
function controle(fruta)
{
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}
controle(carrinho[0])
console.log(carrinho)

