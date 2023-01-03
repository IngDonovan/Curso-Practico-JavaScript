const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


function btnOnclick(){
    // console.log('Escuchando el evento de click')
    //console.log(input1.value + input2.value);
    //console.log(+input1.value + +input2.value);//vara volverlos strings
    const sumaInputs = +input1.value + +input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}