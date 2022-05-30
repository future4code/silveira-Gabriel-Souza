enum SETOR {
    MARKETING="marketing",
    VENDAS="vendas",
    FINACEIRO="financeiro",
   
  }
  type pessoa = {
      nome:string,
      salário: number , 
      setor:SETOR , 
      presencial : boolean

  }

const pessoas:pessoa[] = [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINACEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINACEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]


  function ex4 ( pessoas:pessoa[]):pessoa[] {

    
    const pessoasMarketing  = pessoas.filter(pessoa=> pessoa.setor==SETOR.MARKETING)

    
    return pessoasMarketing
    
  }

  console.log(ex4(pessoas))
