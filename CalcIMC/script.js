let imc = 0;

function calc(){
 const peso = (document.getElementById("peso").value).replace(",",".");
 const altura = (document.getElementById("altura").value).replace(",",".");

 console.log(peso)
 console.log(altura)

 imc += (peso / (altura ** 2));
console.log(imc)

}
