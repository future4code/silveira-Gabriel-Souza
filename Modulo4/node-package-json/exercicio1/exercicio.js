// usando o process.argv[2] 


const mensagem1 = `Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.Em sete anos você terá ${Number(process.argv[3])+7}`

console.log(mensagem1)
