enum ROLE {
    ADMIN="admin",
    USER="user",
    
  }
  type usuario = {
      name:string,
      email: string , 
      role:ROLE,

  }

const usuarios:usuario[] =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER,},
	{name: "Ademir", email: "ademir@email.com", role:ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER}, 
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role:ROLE.ADMIN}      
] 

  function ex5 ( usuarios:usuario[]) {

    
    const usuariosAdmin  = usuarios.filter(usuario => usuario.role==ROLE.ADMIN)

    const usuariosAd = usuariosAdmin.map((usuario)=>{
        return usuario.email
        
    })




    
    return usuariosAd
    
  }

  console.log(ex5(usuarios))
