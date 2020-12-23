function calculo() {
    produto = window.prompt('Que produto estás a comprar?')
    preco = window.prompt(`Quanto custa o(a) ${produto} que estás a comprar?`)
    pag = window.prompt(`Quanto dinheiro entregaste para pagar o(a) ${produto}?`)
    troco1 = pag - preco
    falta = -(pag - preco)
    
    if (pag >= preco) {
        window.prompt(`Compraste um(a) ${produto} que custou €${preco}.\nDeste €${pag} em dinheiro e vais receber €${troco1} de troco.\nObrigado e até já!`)
    }
    else {
        window.alert(`O/A ${produto} custa €${preco} e tu entregaste €${pag}.\nFalta €${falta} para concluir a tua compra.\nObrigado.`)
    }
}