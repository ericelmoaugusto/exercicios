var cambio = Number(prompt('Antes de mais nada. Quanto está a cotação dólar/real?'))

function calculo() {
    let real = Number(prompt('Quantos R$ tens na carteira?'))
    let dolar = (real / cambio)
    let rea1 = real.toFixed(2).replace('.', ',')
    let dol1 = dolar.toFixed(2).replace('.', ',')

    document.getElementById('msg').innerHTML = `Com R$ ${rea1} consegues comprar USD ${dol1} .`
}
