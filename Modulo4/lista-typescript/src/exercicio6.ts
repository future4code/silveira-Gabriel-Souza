
  type cliente = {
      cliente:string,
      saldoTotal:number , 
      debitos:number[] , 

  }

const clientes:cliente[] = // entrada
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


  function ex6 ( clientes:cliente[]):cliente[] {

    
    const clientesSaldo = clientes.filter(usuario =>{
      let valor:number=0;

      usuario.debitos.forEach(element => {
        valor+=element
          
        });
       
        usuario.saldoTotal=usuario.saldoTotal-valor

        usuario.debitos=[]
        
        return usuario
   
        
    })  
       

    const negativados  = clientesSaldo.filter(usuario => usuario.saldoTotal<=0)
    
    return negativados
  }

  console.log(ex6(clientes))
