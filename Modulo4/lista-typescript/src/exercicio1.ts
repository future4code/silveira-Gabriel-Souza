

function ex1(nome:string , data:string):string {

  const aux:string[] = data.split("/")

    return `"Olá me chamo ${nome}, nasci no dia ${aux[0]} do mês de ${aux[1]} do ano de ${aux[2]}" `
  }
  console.log(ex1("gabriel" , "07/08/1996"))
