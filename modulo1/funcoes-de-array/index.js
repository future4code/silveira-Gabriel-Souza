/*
    1)a-o obejto depois array de obejto 
    2)a-retorna um array só com os nomes
    3)0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
         {nome: 'Laís Petra', apelido: 'Laura'}

*/
///1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},]
// a 
    const nomePets = pets.map((pet,index,array)=>{
        return pet.nome
    })
// b 
    const Salsicha = pets.filter((pet,index,pets)=>{
        return pet.raca==="Salsicha"
    })
// c 
const Pooodles = pets.filter((pet,index,pets)=>{
    return pet.raca==="Poodle"
})
const mensagemPooodles = Pooodles.map((pet,index,Pooodles)=>{
    return  `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
 


// 2 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
// a 
const nomeProduto = produtos.map((produto,index,array)=>{
    return produto.nome
})
console.log(nomeProduto)

// b   /////////////////////
const descontoProduto = produtos.map((produto,index,array)=>{
    produto.preco =produto.preco*0.95;
    console.log(produto.nome , produto.preco)

})
console.log(descontoProduto)

// c 
const Bebidas = produtos.filter((produto,index,produtos)=>{
    return produto.categoria==="Bebidas"
})

console.log(Bebidas)


/// d 
const Ypes = produtos.filter((produto,index,produtos)=>{
    return produto.nome.includes("Ypê")
})
console.log(Ypes)
//// e 
const mensagemCompra = produtos.map((produto,index,Ypes)=>{
    return  `Compre ${produto.nome} por ${produto.preco}!`
})
console.log(mensagemCompra)


///// desafio 
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
 //a 
 const nomePokemon = pokemons.map((pokemon,index,pokemons)=>{
    return pokemon.nome
})

nomePokemon.sort()
console.log(nomePokemon)
//b 
const tiposPokemons = pokemons.map((pokemon,index,pokemons)=>{
    return pokemon.tipo
})
const tipoPokemon =tiposPokemons.filter((pokemon,index,tiposPokemons)=>{
    return tiposPokemons.indexOf(pokemon)==index
})  

console.log(tipoPokemon)

