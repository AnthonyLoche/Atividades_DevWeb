function confirmar() {
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')

    const mensagem = document.getElementById('confirmar').innerHTML = "<h4>" + "Sua expressão é " + a.value + "x² + " + b.value + "x + " + c.value + " = 0" + "<br>" + "Confirma?" + "</h4>";

    document.getElementById('confirmar').style.display = "block"
    document.getElementById("conferir").style.display = "none"
    document.getElementById("sla").style.display = "block"
}

function sim() {

    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let res = document.getElementById('res')
    let a1 = Number(a.value)
    let b1 = Number(b.value)
    let c1 = Number(c.value)
    res.style.display = 'block'
    let delta = (b1 ** 2) - (4 * a1 * c1)
    if (delta < 0) {
        res.innerHTML = "<h4>" + `Não existe raiz real, pois o delta é ${delta}, que é negativo!` + "</h4>" + "<br>"
    } else {
        let x1 = (-b1 + Math.sqrt(delta)) / (2 * a1)
        let x2 = (-b1 - Math.sqrt(delta)) / (2 * a1)
        res.innerHTML = "<h4>" + `O valor de x1 é ${x1.toFixed(2).replace(".", ",")} e o valor de x2 é ${x2.toFixed(2).replace(".", ",")}` + "</h4>"
    }

}

function nao() {
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let res = document.getElementById('res')

    document.getElementById("conferir").style.display = "block"
    res.style.display = 'none'
    document.getElementById('confirmar').style.display = "none"
    document.getElementById("sla").style.display = "none"
    a.value = ''
    b.value = ''
    c.value = ''
    alert("Ok, vamos recomeçar!");
}

function limpar() {
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
    let res = document.getElementById('res')

    document.getElementById("conferir").style.display = "block"
    res.style.display = 'none'
    document.getElementById('confirmar').style.display = "none"
    document.getElementById("sla").style.display = "none"
    a.value = ''
    b.value = ''
    c.value = ''
}

