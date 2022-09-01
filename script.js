const h1 = document.querySelector("h1");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular')
const pResultado = document.querySelector('#resultado');
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', btnOnClick); 

function btnOnClick(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResultado.innerText  = "Resultado: " + sumaInputs;
}
