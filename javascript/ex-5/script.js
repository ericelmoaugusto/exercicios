function calculo() {
    var m = Number(prompt('Digite uma distância em metros (m)'))
    var km = (m/1000).toLocaleString('pt-BR')
    var hm = (m/100).toLocaleString('pt-BR')
    var dam = (m/10).toLocaleString('pt-BR')
    var dm = (m/0.1).toLocaleString('pt-BR')
    var cm = (m/0.01).toLocaleString('pt-BR')
    var mm = (m/0.001).toLocaleString('pt-BR')

    //converter formato de metros (m)
    let m1 = m.toLocaleString("pt-PT")

    var str = `A distância de ${m1} metros, corresponde a...`
    var res = str.bold().fontsize(5)
    document.getElementById("msg").innerHTML = res;

    msg.innerHTML += `
    <p>${km} quilómetros (Km)<p>
    <p>${hm} hectómetros (Hm)<p>
    <p>${dam} decâmetros (Dam)<p>
    <p>${dm} decímetros (dm)<p>
    <p>${cm} centímetros (cm)<p>
    <p>${mm} milímetros (mm)<p>`
}
