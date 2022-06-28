//..desafio uno
var btn = document.getElementById("btn");
let borde = document.getElementById("borde");
    
function cambio() {
    console.log(getComputedStyle(borde).borderColor.toString());
    if(getComputedStyle(borde).borderColor == 'rgb(255, 0, 0)')
    {
        console.log('entra al if');
        borde.style.borderColor = '#FFFF';
    }
    else 
    {
        console.log('entra al else');
        borde.style.borderColor = ' #FF0000';
    }
}

// btn.addEventListener('click', cambio);

//..cierre desafio uno



//..desafio dos
var botton = document.getElementById("sumar");


function sumar() {
   let github = document.querySelector('#github');
   let slack = document.querySelector('#slack');
   let git = document.querySelector('#git');

   console.log(git);

   let resultado = (parseInt(github.value) + parseInt(slack.value) + parseInt(git.value));

   console.log(resultado);

   if (resultado <= 10) {
    document.querySelector("#verificar").innerHTML = resultado;
   } else {
    document.querySelector("#verificar").innerHTML = "Llevas demasiados stickers";
   }
};


// botton.addEventListener('click', sumar);

//.. cierre desafio dos


//..desafio tres
function login() {
    let value1 = document.querySelector('#select1').value;
    let value2 = document.querySelector('#select2').value; 
    let value3 = document.querySelector('#select3').value;
    let par = document.querySelector('#password');

    let password = parseInt(value1 + value2 + value3);

    if(password === 911) {
        par.innerHTML = 'Password 1 correcto';
    } else if(password === 714) {
        par.innerHTML = 'Password 2 correcto';
    } else {
        par.innerHTML = 'Password incorrecto';
    }
}; 