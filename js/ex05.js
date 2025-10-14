var carrinho=[]; /*Array que irá armazenar os produtos como objetos*/

    ///*Função para adicionar um produto ao carrinho*///
    function addProduto(){
    var nome=prompt("Qual produto que deseja adicionar ao carrinho? ")
    
    if (nome === null || nome === "") /*Encerra se cancelar ou digitar vazio*/
        return false;

    var valor=parseFloat(prompt("Qual o valor do produto em reais? "))
    
    if (valor === null || valor === "")
        return false;

    ///*Adiciona objeto com nome e preço ao carrinho*///
    carrinho.push({ nome: nome, valor: valor });
    return true;
}

do {
    var continuar = addProduto();
    if (!continuar) break; /*Sai do loop se addProduto retornar false. Se continuar for false (o usuário cancelou ou errou),!continuar será true, então o break é executado e o loop para.*/
} while (true);

///*Função que calcula subtotal, imposto (10%) e total com imposto*///
function calcularTotal(carrinho){

    var subtotal = 0;
    for (var i = 0; i < carrinho.length; i++) {
    subtotal += carrinho[i].valor;
    }

    var imposto = subtotal * 0.10
    var total = subtotal + imposto

    return {subtotal, imposto, total}
}

///* Função que exibe todos os dados na tela*///
function exibirCarrinho(carrinho) {
    document.write("<h1>🛒 Meu Carrinho Virtual</h1>");


if (carrinho.length === 0) {
        document.write("<h2>Carrinho vazio.</h2>");
        return;
    }

document.write("<h4>Itens do Carrinho:</h4>");
    for (let i = 0; i < carrinho.length; i++) {
        document.write("<h5><ul><li>"+carrinho[i].nome+" - R$"+carrinho[i].valor+"</li></ul></h5>");
    }
document.write("<hr>")

var totais = calcularTotal(carrinho);

    document.write("<h2>Subtotal: R$"+totais.subtotal+"</h2>");
    document.write("<h2>Imposto (10%): R$"+totais.imposto+"</h2>");
    document.write("<h3>Total com Imposto: R$"+totais.total+"</h3>");

}
exibirCarrinho(carrinho);
