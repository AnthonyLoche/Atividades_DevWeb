let peso = 0;
let altura = 0;
let imc = 0;

function registrarPeso() {
    const inputElement = document.getElementById('peso');
    peso += (inputElement.value).replace(",",".");
    console.log(peso)
}

function registrarAltura() {
    const inputElement = document.getElementById('altura');
    altura += (inputElement.value).replace(",",".");
    console.log(altura)
}

function calc(){
    imc += (peso / (altura ** 2))
    console.log((imc).toFixed(1).replace(".",","))
}