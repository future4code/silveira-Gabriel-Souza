
  enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
  }

  function ex3 (nome:string , ano:number , genero:GENERO , pontuacao?:number| string  ):string {



    if(typeof(pontuacao)=="number")
      return `nome : ${nome} , ano de Lancamento ${ano} genero ${genero} pontuacao ${pontuacao}`

      return `nome : ${nome} , ano de Lancamento ${ano} genero ${genero}`  
  }
  

  console.log(ex3("gabriel" , 1996 , GENERO.ACAO,"99" ))

