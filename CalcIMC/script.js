function calc() {
    let imc = 0;
    const bob = document.getElementById("bob");

    const peso = (document.getElementById("peso").value).replace(",", ".");
    const altura = (document.getElementById("altura").value).replace(",", ".");

    imc += (peso / (altura ** 2));

    const calculo = document.getElementById('resultado').innerHTML = (imc.toFixed(1).replace(".", ","));
    bob.style.display = "block";

    let coisaAi = `${imc < 17 ? "Muito Abaixo do Peso" : (imc  < 18.50) ? "Abaixo do Peso" : (imc < 24.99) ? "Peso Normal" : (imc < 29.99) ? "Acima do Peso" : (imc < 34.99) ? "Obesidade 1" : (imc < 39.99) ? "Obesidade 2" : (imc > 40) ? "Obesidade 3" : "Invalido"}`;

    const paia = document.getElementById("aviso");
    paia.style.display = "block"
      const alerta = document.getElementById("aviso").innerHTML = coisaAi;

}

function limpar() {
    const bob = document.getElementById("bob");
    bob.style.display = "none";

    const peso = document.getElementById("peso").value = "";
    const altura = document.getElementById("altura").value = "";
}
