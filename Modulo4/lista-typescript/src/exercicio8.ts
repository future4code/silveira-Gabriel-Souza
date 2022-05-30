



function ex8( dataNascimento:string , dataEmissão:string) {

  const atual = Date.now ;
  const date1 = new Date(dataNascimento);
  const date2 = new Date(dataEmissão);
  const diferenca = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diferenca / (1000 * 3600 * 24)); 

   

}

  console.log(ex8("24/04/1996","24/04/2022"))