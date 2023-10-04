function tabuada() {
    const valor = document.getElementById("tabuada-input").value;
    if (valor === "") {
        document.getElementById("valor").style.animation = "opacityInverse 2s";
        document.getElementById("valor").style.display = "none";
    }
    else {
        let valores = [];

        for (let i = 1; i < 11; i++) {
            valores.push(`${valor} x ${i} = ` + (valor * i));
        }
        document.getElementById("valor").style.display = "block";
        document.getElementById("valor").style.animation = "opacity 2s";
        document.getElementById("valor").innerHTML = valores.join("<br>");
    }
}

function filtro() {
    const filtro = document.getElementById("filtro-input").value.toLowerCase();
    const lista = document.getElementsByTagName("li");

    for (const i of lista) {
        if (filtro == "") {
            i.style.fontWeight = "normal";
            i.style.display = "list-item";
        } 
        else if (i.innerText.toLowerCase().includes(filtro)) {
            i.style.display = "list-item";
            i.style.fontWeight = "bold";
        }
        else {
            i.style.display = "none";
            i.style.fontWeight = "normal";
        }
    }
}