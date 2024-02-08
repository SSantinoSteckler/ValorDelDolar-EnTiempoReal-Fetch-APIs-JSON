//PRIMER CODIGO ORIGINAL BOCETO
/*
const $buttonActualizarBlue = document.getElementById('ActualizarBlue');
const $buttonActualizarOficial = document.getElementById('ActualizarOficial');
const $divPrecio = document.getElementById('divPrecio');
const $titleDolar = document.getElementById('titleDolar');

const $cambioPesos = document.getElementById('inputCalcularDolares');
const $buttonCambioBlue = document.getElementById('calcularCambioBlue');
const $buttonCambioOficial = document.getElementById('calcularCambioOficial');
const $divCambio = document.getElementById('divCambio');

const urlBaseBlue = 'https://dolarapi.com/v1/dolares/blue';
const urlBaseOficial = 'https://dolarapi.com/v1/dolares/oficial';

$buttonActualizarBlue.addEventListener('click', () => {
  fetch(`${urlBaseBlue}`)
    .then((response) => response.json())
    .then((data) => valorDolar(data));
});

function valorDolar(data) {
  $titleDolar.style.display = 'none';
  const DolarPrecio = data.compra;
  const FechaActualizacion = new Date(data.fechaActualizacion);

  const $precio = document.createElement('h2');
  $precio.textContent = `Valor del dolar blue | $ 1USD = $ ${DolarPrecio}  Pesos Arg`;

  const $Actualizacion = document.createElement('p');
  $Actualizacion.textContent = `Ultima actualizacion🕜 ${FechaActualizacion}`;

  $divPrecio.innerText = '';
  $divPrecio.appendChild($precio);
  $divPrecio.appendChild($Actualizacion);
}

$buttonActualizarOficial.addEventListener('click', () => {
  fetch(`${urlBaseOficial}`)
    .then((response) => response.json())
    .then((data) => valorDolarOficial(data));
});

function valorDolarOficial(data) {
  $titleDolar.style.display = 'none';
  const DolarPrecioOficial = data.compra;
  const FechaActualizacionOficial = new Date(data.fechaActualizacion);

  const $precioOficial = document.createElement('h2');
  $precioOficial.textContent = `Valor del dolar oficial | $ 1USD = $ ${DolarPrecioOficial} Pesos Arg`;

  const $ActualizacionOficial = document.createElement('p');
  $ActualizacionOficial.textContent = `Ultima actualizacion🕜 ${FechaActualizacionOficial}`;

  $divPrecio.innerText = '';
  $divPrecio.appendChild($precioOficial);
  $divPrecio.appendChild($ActualizacionOficial);
}

// CALCULAR CAMBIO DE PESOS A DOLARES INPUT

$buttonCambioBlue.addEventListener('click', () => {
  fetch(`${urlBaseBlue}`)
    .then((response) => response.json())
    .then((data) => cambioDolarBlue(data))
    .catch(() => {
      $divCambio.innerHTML = `<p>Actualmente no hay cotizacion disponible</p>`;
    });
  function cambioDolarBlue(data) {
    let valorDolarBlue = data.compra;

    let resultado = $cambioPesos.value / valorDolarBlue;
    if ($cambioPesos.value < 0) {
      $divCambio.innerHTML = '<p>NO SE PUEDEN CALCULAR VALORES NEGATIVOS</p>';
    } else if ($cambioPesos.value < 50) {
      $divCambio.innerHTML = `<p> <span>$${$cambioPesos.value}</span> PESOS <span> = $${resultado.toFixed(4)}  </span> DOLARES BLUE</p>`; // prettier-ignore
    } else {
      $divCambio.innerHTML = `<p> <span>$${$cambioPesos.value}</span> PESOS <span> = $${resultado.toFixed(2)}</span> DOLARES BLUE</p>`; //prettier-ignore
    }
  }
});

$buttonCambioOficial.addEventListener('click', () => {
  fetch(`${urlBaseOficial}`)
    .then((response) => response.json())
    .then((data) => cambioDolarOficial(data))
    .catch(() => {
      $divCambio.innerHTML = `<p>Actualmente no hay cotizacion disponible</p>`;
    });
  function cambioDolarOficial(data) {
    let valorDolarOficial = data.compra;

    let resultado = $cambioPesos.value / valorDolarOficial;
    if ($cambioPesos.value < 0) {
      $divCambio.innerHTML = '<p>NO SE PUEDEN CALCULAR VALORES NEGATIVOS</p>';
    } else if ($cambioPesos.value < 50) {
      $divCambio.innerHTML = `<p> <span>$${$cambioPesos.value}</span> PESOS <span> = $${resultado.toFixed(4)}  </span> DOLARES OFICIAL</p>`; //prettier-ignore
    } else {
      $divCambio.innerHTML = `<p> <span>$${$cambioPesos.value}</span> PESOS <span> = $${resultado.toFixed(2)}</span> DOLARES OFICIAL</p>`; // prettier-ignore
    }
  }
});

*/
// CODIGO OPTIMIZADO , MAYOR REUTILIZACION Y ORDEN

const $buttonActualizarBlue = document.getElementById('ActualizarBlue');
const $buttonActualizarOficial = document.getElementById('ActualizarOficial');
const $divPrecio = document.getElementById('divPrecio');
const $titleDolar = document.getElementById('titleDolar');
const $cambioPesos = document.getElementById('inputCalcularDolares');
const $buttonCambioBlue = document.getElementById('calcularCambioBlue');
const $buttonCambioOficial = document.getElementById('calcularCambioOficial');
const $divCambio = document.getElementById('divCambio');

const urlBaseBlue = 'https://dolarapi.com/v1/dolares/blue';
const urlBaseOficial = 'https://dolarapi.com/v1/dolares/oficial';

function obtenerDatosDolar(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(() => {
      throw new Error('Error al obtener datos de la API');
    });
}

$buttonActualizarBlue.addEventListener('click', () => {
  obtenerDatosDolar(urlBaseBlue)
    .then((data) => mostrarValores(data, 'blue'))
    .catch(() => mostrarError());
});

$buttonActualizarOficial.addEventListener('click', () => {
  obtenerDatosDolar(urlBaseOficial)
    .then((data) => mostrarValores(data, 'oficial'))
    .catch(() => mostrarError());
});

$buttonCambioBlue.addEventListener('click', () => {
  obtenerDatosDolar(urlBaseBlue)
    .then((data) => calcularCambio(data, 'BLUE'))
    .catch(() => mostrarError());
});

$buttonCambioOficial.addEventListener('click', () => {
  obtenerDatosDolar(urlBaseOficial)
    .then((data) => calcularCambio(data, 'OFICIAL'))
    .catch(() => mostrarError());
});

function mostrarError() {
  $divCambio.innerHTML = `<p>Actualmente no hay cotizacion disponible</p>`;
}

function mostrarValores(data, tipo) {
  $titleDolar.style.display = 'none';

  const DolarPrecio = data.compra;
  const FechaActualizacion = new Date(data.fechaActualizacion);

  const $precio = document.createElement('h2');
  $precio.textContent = `Valor del dólar ${tipo} | $ 1USD = $ ${DolarPrecio}  Pesos Arg`;

  const $Actualizacion = document.createElement('p');
  $Actualizacion.textContent = `Ultima actualizacion🕜 ${FechaActualizacion}`;

  $divPrecio.innerText = '';
  $divPrecio.appendChild($precio);
  $divPrecio.appendChild($Actualizacion);
}

function calcularCambio(data, tipo) {
  let valorDolar = data.compra;
  let resultado = $cambioPesos.value / valorDolar;

  if ($cambioPesos.value < 0) {
    $divCambio.innerHTML = '<p>NO SE PUEDEN CALCULAR VALORES NEGATIVOS</p>';
  } else if ($cambioPesos.value < 50) {
    $divCambio.innerHTML = `<p> <span>$${
      $cambioPesos.value
    }</span> PESOS <span> = $${resultado.toFixed(
      4
    )}  </span> DOLARES ${tipo}</p>`;
  } else {
    $divCambio.innerHTML = `<p> <span>$${
      $cambioPesos.value
    }</span> PESOS <span> = $${resultado.toFixed(
      2
    )}</span> DOLARES ${tipo}</p>`;
  }
}
