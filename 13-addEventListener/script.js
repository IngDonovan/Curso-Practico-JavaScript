const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//btn.addEventListener('click',btnOnclick);
// form.addEventListener('submit',sumarImputValues);

// function sumarImputValues(event){
//     // console.log({event});
//     event.preventDefault();
//     // console.log('Escuchando el evento de click')
//     //console.log(input1.value + input2.value);
//     //console.log(+input1.value + +input2.value);//vara volverlos strings
//     const sumaInputs = +input1.value + +input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

//otra forma

btn.addEventListener('click',sumarImputValues);

function sumarImputValues(event){
    // console.log({event});
    //event.preventDefault();
    
    const sumaInputs = +input1.value + +input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }
