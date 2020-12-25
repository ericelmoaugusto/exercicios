function calculo () {
    let cel = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let kel = (cel + 273.15).toLocaleString("pt-BR")
    let far = ((cel * 1.8) + 32).toLocaleString("pt-BR")
    
    //converter para formato de °C (Celsius)
    let cel1 = cel.toLocaleString("pt-BR")

    var str = `A temperatura de ${cel1}°C, corresponde a...`
    var res = str.bold().fontsize(5)
    document.getElementById("msg").innerHTML = res;

    msg.innerHTML += `
    <p>${kel}°K (Kelvin)<p>
    <p>${far}°F (Fahrenheit)<p>`
}