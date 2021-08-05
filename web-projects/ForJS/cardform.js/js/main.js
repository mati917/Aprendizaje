const   tarjeta = document.querySelector('#tarjeta'),
        btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
        formulario = document.querySelector('#formulario-tarjeta'),
        numeroTarjeta = document.querySelector("#tarjeta .numero"),
        nombreTarjeta = document.querySelector("#tarjeta .nombre"),
        logoMarca = document.querySelector('#logo-marca'),
        firma = document.querySelector("#tarjeta .firma p"),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        ccv = document.querySelector('#tarjeta .ccv');

// Volteamos la tarjeta segun el input
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
    }
};

// Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
// Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// Select del mes generado dinamicamente
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);

}

// Select del año generado dinamicamente
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// Input num de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //Eliminamos espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
    .replace(/\D/g, '')
    //Ponemos espaciado cada 4 nums
    .replace(/([0-9]{4})/g, '$1 ')
    // Elimina el ultimo espaciado
    .trim();

    numeroTarjeta.textContent = valorInput;

    // Resetea el numero de la tarjeta
    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
    }


    if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../img/logos/visa.png';
        logoMarca.appendChild(imagen);
    }else if(valorInput[0] == 5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }
    // Volteamos la tarjeta segun el input
    mostrarFrente();
});


// Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput
    .replace(/[0-9]/g, '');
    // Imprimiendo inputs en la tarjeta
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'John Doe';
    }

    mostrarFrente();
});

// Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// Select year
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// CVV
formulario.inputCCV.addEventListener('keyup', (e) => {
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    // Elimina los espacios del input
    .replace(/\s/g, '')
    // Elimina las letras del input
    .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});