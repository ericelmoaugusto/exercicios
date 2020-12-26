var cambio = Number(prompt('Antes de mais nada. Quanto está a cotação dólar/real?'))

function calculo() {
    let real = Number(prompt('Quantos R$ tens na carteira?'))
    let dolar = (real / cambio).toFixed(2)
    document.getElementById('msg').innerHTML = `Com ${real} R$ consegues comprar ${dolar} US$.`
}