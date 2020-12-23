function calculo() {
    var m = Number(prompt('Digite uma distância em metros (m)'))
    var km = m/1000
    var hm = m/100
    var dam = m/10
    var dm = m/0.1
    var cm = m/0.01
    var mm = m/0.001

    var str = `A distância de ${m} metros, corresponde a...`
    var negrito = str.bold()
    var res = negrito.fontsize(6)
    document.getElementById("msg").innerHTML = res;

    msg.innerHTML += `
    <p>${km} quilómetros (Km)<p>
    <p>${hm} hectómetros (hm)<p>
    <p>${dam} decâmetros (dam)<p>
    <p>${dm} decímetros (dm)<p>
    <p>${cm} centímetros (cm)<p>
    <p>${mm} milímetros (mm)<p>`
}