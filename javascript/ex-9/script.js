function calculo () {
    var nome = prompt('Como se chama o colaborador?')
    var sal = Number(prompt(`Quanto é o salário de ${nome}?`))
    var myObj = {style: "currency", currency: "BRL"}
    var sal1 = sal.toLocaleString('pt-BR', myObj)

    var reaj = Number(prompt(`Quanto será em percentagem o aumento do salário de ${nome}?`))
    var prec = reaj / 100
    var aum = sal * prec
    var aum1 = aum.toLocaleString('pt-BR', myObj)
    var salfin = (sal + aum).toLocaleString('pt-BR', myObj)

    var str = `${nome} recebeu um aumento salarial!`
    var res = str.bold().fontsize(5)
    document.getElementById("msg").innerHTML = res;

    msg.innerHTML += `
    <p>O salário era ${sal1} .<p>
    <p>Com um aumento de ${reaj}%, o salário vai aumentar ${aum1} no próximo mês.<p>
    <p>E a partir daí, ${nome} vai passar a ganhar ${salfin} .<p>`
}