ˋˋˋ

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let cont=0;
  for(let i=0 ; i < arrayDeNumeros.length;i++)
  {
    if(arrayDeNumeros[i]==numeroEscolhido)
      cont++
  }
  if(cont!=0)
  return `O número ${numeroEscolhido} aparece ${cont}x`

  return   "Número não encontrado"
}

ˋˋˋ
