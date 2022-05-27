// O tipo 'number' não pode ser atribuído ao tipo 'string'.


// colocando o "|" meuNumero:number | string= "11"+1



let minhaString:string ="asda"
let meuNumero:number | string= "11"+1
enum corFavorita {
    VERMELHA="vermelho",
    LARANJA="laranja",
    AMARELA="amarela",
    VERDE="verde",
    AZUL="azul",
    VIOLETA="violeta"


  
}
type pessoa = {
    nome:string,
    idade:number,
    corFavorita:corFavorita ,
}

let pessoa1 :pessoa={
  nome:"gabriel",
  idade:25,
  corFavorita: corFavorita.VERDE ,
}

let pessoa2 : pessoa
let pessoa3 : pessoa 


console.log(pessoa1)
