const detalles = {
  producto1: {
    id: 'producto1',
    nombre: 'Sticker con QR personalizado',
    precio: 10.00,
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Ideal para pegar en tus pertenencias. Personaliza con tus datos médicos.',
    comentarios: ['Muy práctico', 'Fácil de leer con el celular'],
  },
  producto2: {
    id: 'producto2',
    nombre: 'Case para celulares con QR',
    precio: 25.00,
    colores: ['Azul', 'Negro', 'Transparente'],
    descripcion: 'Protege tu celular e incluye tu código QR de emergencia.',
    comentarios: ['Me encantó', 'Buen material'],
  },
  producto3: {
    id: 'producto3',
    nombre: 'Collar grabado con QR',
    precio: 35.00,
    colores: ['Plateado', 'Dorado'],
    descripcion: 'Collar de acero inoxidable con grabado láser del QR.',
    comentarios: ['Muy bonito', 'Lo uso siempre'],
  },
};

let productoSeleccionado = null;

function mostrarDetalle(productoId) {
  const prod = detalles[productoId];
  productoSeleccionado = prod; // Guardamos el producto para usarlo al agregar al carrito

  const detalle = document.getElementById("detalle-contenido");

  detalle.innerHTML = `
    <h2 style="color:#AA443F;">${prod.nombre}</h2>
    <p><strong>Precio:</strong> S/ ${prod.precio.toFixed(2)}</p>
    <p><strong>Colores disponibles:</strong> 
      <select id="color">
        ${prod.colores.map(c => `<option value="${c}">${c}</option>`).join('')}
      </select>
    </p>
    <p>${prod.descripcion}</p>
    <label for="cantidad">Cantidad:</label>
    <input type="number" id="cantidad" min="1" value="1" style="margin: 0 10px 20px 10px;">

    <p style="font-size:0.9em; color:#284667;">* Costo del delivery se agregará al finalizar la compra.</p>

    <button class="btn" onclick="agregarAlCarrito()">Agregar al carrito</button>

    <h3 style="margin-top:30px;">Comentarios:</h3>
    <ul>
      ${prod.comentarios.map(c => `<li>🗨️ ${c}</li>`).join('')}
    </ul>
  `;

  document.getElementById("detalle-producto").classList.remove("hidden");
}

function cerrarDetalle() {
  document.getElementById("detalle-producto").classList.add("hidden");
  productoSeleccionado = null;
}

function agregarAlCarrito() {
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const color = document.getElementById('color').value;

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const item = {
    id: productoSeleccionado.id,
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    cantidad: cantidad,
    color: color
  };

  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  alert('✅ Producto agregado al carrito.');
  cerrarDetalle();
}

function agregarDesdeCuadricula(productoId) {
  const prod = detalles[productoId];

  const item = {
    id: prod.id,
    nombre: prod.nombre,
    precio: prod.precio,
    cantidad: 1,
    color: prod.colores[0]  // por defecto, el primer color
  };

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  alert(`🛒 ${prod.nombre} agregado al carrito`);
}
function agregarDesdeDetalle() {
  const id = document.getElementById('detalle-id').value;
  const color = document.getElementById('detalle-color').value;
  const cantidad = parseInt(document.getElementById('detalle-cantidad').value);
  const producto = detalles[id];

  const item = {
    id,
    nombre: producto.nombre,
    precio: producto.precio,
    color,
    cantidad
  };

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));

  alert('Producto agregado al carrito.');
  cerrarDetalle();
}
