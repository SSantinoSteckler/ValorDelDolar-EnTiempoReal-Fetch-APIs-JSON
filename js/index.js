const $buttonActualizarBlue = document.getElementById('ActualizarBlue');
const $buttonActualizarOficial = document.getElementById('ActualizarOficial');
const $divPrecio = document.getElementById('divPrecio');

const urlBaseBlue = 'https://dolarapi.com/v1/dolares/blue';

$buttonActualizarBlue.addEventListener('click', () => {
  fetch(`${urlBaseBlue}`)
    .then((response) => response.json())
    .then((data) => valorDolar(data));
});

function valorDolar(data) {
  const DolarPrecio = data.compra;
  const FechaActualizacion = new Date(data.fechaActualizacion);

  const $precio = document.createElement('h2');
  $precio.textContent = `Valor del dolar blue actualizado | 1USD = ${DolarPrecio}  Pesos Arg`;

  const $Actualizacion = document.createElement('p');
  $Actualizacion.textContent = `Ultima actualizacion ${FechaActualizacion}`;

  $divPrecio.innerText = '';
  $divPrecio.appendChild($precio);
  $divPrecio.appendChild($Actualizacion);
}

const urlBaseOficial = 'https://dolarapi.com/v1/dolares/oficial';

$buttonActualizarOficial.addEventListener('click', () => {
  fetch(`${urlBaseOficial}`)
    .then((response) => response.json())
    .then((data) => valorDolarOficial(data));
});

function valorDolarOficial(data) {
  const DolarPrecioOficial = data.compra;
  const FechaActualizacionOficial = new Date(data.fechaActualizacion);

  const $precioOficial = document.createElement('h2');
  $precioOficial.textContent = `Valor del dolar oficial actualizado | 1USD = ${DolarPrecioOficial} Pesos Arg`;

  const $ActualizacionOficial = document.createElement('p');
  $ActualizacionOficial.textContent = `Ultima actualizacion ${FechaActualizacionOficial}`;

  $divPrecio.innerText = '';
  $divPrecio.appendChild($precioOficial);
  $divPrecio.appendChild($ActualizacionOficial);
}
