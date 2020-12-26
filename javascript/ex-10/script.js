function calculo() {
    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c = Number(prompt('Qual é o valor de c?'))
    var abc = (b**2) - 4 * a * c

    var str = 'Resolvendo Bhaskara'
    var res = str.bold().fontsize(5)
    document.getElementById("msg").innerHTML = res;

    msg.innerHTML += `
    <p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong><p>
    <p>O cálculo realizado será <strong>&#8710; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong><p>
    <p>O valor calculado foi <mark><strong>&#8710; = ${abc}</strong></mark><p>`
}