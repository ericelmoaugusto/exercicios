function calculo() {
    produto = prompt('Que produto estás a comprar?')
    preco = Number(prompt(`Quanto custa o(a) ${produto} que estás a comprar?`))
    pag = Number(prompt(`Quanto dinheiro entregaste para pagar o(a) ${produto}?`))
    troco1 = pag - preco
    falta = -(pag - preco)
    
    if (pag >= preco) {
        alert(`Compraste um(a) ${produto} que custou €${preco}.\nDeste €${pag} em dinheiro e vais receber €${troco1} de troco.\nObrigado e até já!`)
    } else {
        alert(`O/A ${produto} custa €${preco} e tu entregaste €${pag}.\nFalta €${falta} para concluir a tua compra.\nObrigado.`)
    }
}
