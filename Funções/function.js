// Criando funções


//Essa função vai receber 2 parêmetros e depois na hora de mostrar a função, passei o status dela e o preço
function compraStatus(status, total){

    console.log(`Transação ${status}, total de ${total}$ gastos`)
 
}
compraStatus('Aprovada', 30)


// Função que mostra 10% de desconto

function desconto10porcento(price) {
    return price - (price * 10/100)
    //função vai retornar o preço + 10% de desconto em cima desse preço

 }

let desconto = desconto10porcento(20) // passei que o preço era 20 para a função realizar o calculo
console.log(`Você teve um desconto de 10% e a compra total ficou por ${desconto} reais  `)