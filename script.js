// Carrusel de imágenes
let imagenes = ["imagenes/1.jpg", "imagenes/2.jpg", "imagenes/3.jpg"];
let index = 0;

function cambiarImagen(direccion) {
    index = (index + direccion + imagenes.length) % imagenes.length;
    document.getElementById("imagen-carrusel").src = imagenes[index];
}

// Mostrar productos
let productos = [
    { id: 1, nombre: "Producto 1", precio: 100, img: "imagenes/1.jpg" },
    { id: 2, nombre: "Producto 2", precio: 200, img: "imagenes/2.jpg" },
];

function mostrarCatalogo() {
    let catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";
    productos.forEach(p => {
        catalogo.innerHTML += `
            <div>
                <img src="${p.img}" width="100">
                <h3>${p.nombre}</h3>
                <p>$${p.precio}</p>
                <button onclick="agregarAlCarrito(${p.id})">Añadir</button>
            </div>`;
    });
}

// Carrito de compras
let carrito = [];

function agregarAlCarrito(id) {
    let producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";
    carrito.forEach(p => {
        lista.innerHTML += `<p>${p.nombre} - $${p.precio}</p>`;
    });
}

function comprar() {
    alert("Compra realizada");
}

mostrarCatalogo();
