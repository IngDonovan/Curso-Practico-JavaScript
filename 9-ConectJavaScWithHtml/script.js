const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid')
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// h1.innerHTML = 'Patito <br> Feo'; es peligroso

h1.innerText =  'Patito Feo';
//para dar una clase
//h1.getAttribute('class'); //nos ayuda a leer algunos de los atributos
//en un console log bota el atributo que seria platzi
//h1.setAttribute('class', 'rojo');//modifica el atributo

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde')

input.value = '456';

const img = document.createElement('img');//crea una etiqueta de imagen en el html
img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";//borramos todo el codigo del pid
pid.appendChild(img);//insentar un elemento cualquiera de los dos comandos sirve.. append o child