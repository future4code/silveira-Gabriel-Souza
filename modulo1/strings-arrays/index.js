/*
1
    a. undefined
    b. null
    c. 11
    d. 4
    e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 
    f. 9
2
    SUBI NUM ÔNIBUS EM MIRROCOS, 30

   */

// 1 // 
    const nome = prompt("Digite seu nome")
    const email = prompt("Digite seu email")
    console.log('O e-mail'+ email+ ' foi cadastrado com sucesso. Seja bem-vinda(o), '+nome+ ' !')

// 2 //
 
    let array = ['arroz', 'feijão','macarrao','ovo','bife']
    console.log(array);
    console.log(array[0] ,+'\n'+array[1],+'\n'+array[2],+'\n'+array[3],+'\n'+array[4],+'\n'+array[5])
    array[1] = prompt("Digite uma comida predileta ")
    console.log(array);

 // 3 // 
    
    let listaDeTarefas =[] ;
    listaDeTarefas[0] = prompt("Digite a tarefa 1  ");
    listaDeTarefas[1] = prompt("Digite a tarefa 2  ");
    listaDeTarefas[2] = prompt("Digite a tarefa 3  ");
    console.log(listaDeTarefas)
    let indice = prompt("Digite o indice ");
    listaDeTarefas.splice(indice-1,1)
    console.log(listaDeTarefas)
    


  
