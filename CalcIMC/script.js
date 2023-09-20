function calc() {
    let imc = 0;
    const bob = document.getElementById("bob");
    let tabelas = document.getElementById("tabelas")
    let parabens = document.getElementById("parabens");
    let baixo = document.getElementById("tabelaBaixo");
    let alta = document.getElementById("tabelaAlta");

    const peso = (document.getElementById("peso").value).replace(",", ".");
    const altura = (document.getElementById("altura").value).replace(",", ".");

    if (peso == "" || peso < 0 || altura < 0 || altura == "" || peso > 300 || altura > 3) {
        alert(`Insira valores válidos please!`)
    }
    else {
        imc += (peso / (altura ** 2));

        const calculo = document.getElementById('resultado').innerHTML = (imc.toFixed(1).replace(".", ","));
        bob.style.display = "block";

        let coisaAi = `${imc < 17 ? "Muito Abaixo do Peso" : (imc < 18.50) ? "Abaixo do Peso" : (imc < 24.99) ? "Peso Normal" : (imc < 29.99) ? "Acima do Peso" : (imc < 34.99) ? "Obesidade 1" : (imc < 39.99) ? "Obesidade 2" : (imc > 40) ? "Obesidade 3" : "Invalido"}`;

        document.getElementById("aviso").style.color = `${imc < 17 ? "red" : (imc < 18.50) ? "crimson" : (imc < 24.99) ? "green" : (imc < 29.99) ? "crimson" : (imc < 34.99) ? "orange" : (imc < 39.99) ?
            "red" : (imc > 40) ? "black" : "Invalido"}`;

        document.getElementById("aviso").style.backgroundColor = "white";
        document.getElementById("aviso").style.borderRadius = "10px"

        tabelas.style.display = "block";

        if(imc < 18.50){
            baixo.style.display = "block"
        }
        else if(imc < 24.99 && imc > 18.50 ){
            parabens.style.display = "block"
        }
        else if( imc > 24.99 ){
            alta.style.display = "block";
        }

        const paia = document.getElementById("aviso");
        paia.style.display = "block"
        document.getElementById("aviso").innerHTML = coisaAi;
    }
}

function limpar() {
    const bob = document.getElementById("bob");
    bob.style.display = "none";

    const peso = document.getElementById("peso").value = "";
    const altura = document.getElementById("altura").value = "";
}
