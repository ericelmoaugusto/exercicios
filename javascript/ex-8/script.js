function calculo () {
    var produto = prompt('Qual é o produto que estás a comprar?')
    var preco = Number(prompt(`Qual é o preço do(a) ${produto}?`))
    var desconto = 0.1 * preco
    var final = preco - desconto

    var pre1 = preco.toFixed(2).replace('.', ',')
    var des1 = desconto.toFixed(2).replace('.', ',')
    var fin1 = final.toFixed(2).replace('.', ',')

    var str = `Calculando o desconto de 10% para ${produto}`
    var res = str.bold().fontsize(5)
    document.getElementById('msg').innerHTML = res;
    
    msg.innerHTML += `
    <p>O preço original era R$ ${pre1}.<p>
    <p>Acabas de ganhar R$ ${des1} de desconto (-10%).<p>
    <p>No fim, vais pagar R$ ${fin1} no produto ${produto}.<p>`
}

