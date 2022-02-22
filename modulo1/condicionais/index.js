/*
    1   
        a)Se o numero é par 
        b)Pares
        c)Impares
    2
        a)Para exibir pro usuario o valor da fruta 
        b) o preço da fruta maça é 2.25
        c)  o proco da fruta Pêra é 5.5
    3
        a)recenbendo um numero do usuario e convertendo o mesmo para number     
        b)Esse numero passou no teste . essa messagem é secreta
          ERRO  pois a variavel mensagem esta no escopo local do if 
        c)caso o numero for negativo pois a mensagem foi definida localemte no if      
*/
function verificaHabilitação()
{
    let idade = Number(prompt("Idade"))
    if(idade>=18)
        console.log("voce pode dirigir");
    else    
        console.log("voce não pode dirigir")
            
}
function verificaTurno()
{
    let turno = prompt("turno")
    if(turno=='M')
        console.log("Bom dia!");
    else
        if(turno=="V")
            console.log("Boa tarde")
        else
            console.log("Boa Noite")    
}

function verificaTurnoSwitch()
{
    let turno = prompt("turno")
    switch(turno){
        case "M":
            console.log("bom dia")
            break;
        case "V":
            console.log("Boa tarde")    
            break;
        default :
        console.log("Boa noite")    
        }

}
function verificaFilme(){

    let estilo = prompt("Digite o genero do filme")
    if(estilo=="fantasia")
        {
            let valor = Number(prompt("Digite o valor"))
            if(valor<15)
                console.log("BOM filme")

        }
    else
    console.log("Escolha outro filme") 
}
