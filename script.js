// script.js

// Obtenemos todas las imágenes del carrusel
const imagenes = document.querySelectorAll('.carrusel-img');
let indiceActual = 0;
let intervalo;

// Función para mostrar una imagen según su índice
function mostrarImagen(indice) {
    imagenes.forEach((img, i) => {
        img.classList.remove('activa');
        if (i === indice) {
            img.classList.add('activa');
        }
    });
}

// Función para avanzar a la siguiente imagen
function avanzarCarrusel() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
}

// Función para retroceder a la imagen anterior
function retrocederCarrusel() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
}

// Función para iniciar el carrusel automático
function iniciarCarrusel() {
    intervalo = setInterval(avanzarCarrusel, 3000); // cada 3 segundos
}

// Función para detener el carrusel automático
function detenerCarrusel() {
    clearInterval(intervalo);
}

// Iniciamos el carrusel cuando carga la página
window.onload = function() {
    mostrarImagen(indiceActual); // Mostrar la primera imagen
    iniciarCarrusel(); // Empezar a avanzar automáticamente
};
// Función para mostrar la sucursal
function mostrarSucursal() {
    document.getElementById('contenido-opcion').innerHTML = `
        <img src="imagenes/sucursal.jpg" alt="Sucursal" class="imagen-opcion">
        <p><a href="https://maps.app.goo.gl/xsTcrSntkcFDigAP7?g_st=aw" target="_blank">Ver ubicación en Google Maps</a></p>
    `;
}

// Función para mostrar el catálogo (contenido base por ahora)
function mostrarCatalogo() {
    document.getElementById('contenido-opcion').innerHTML = `
        <div class="carrusel-contenedor">
            <div id="producto-carrusel" class="producto">
                <img src="imagenes/producto1.jpg" alt="Producto 1" class="imagen-producto">
                <div class="info-producto">
                    <h3>Nombre del producto</h3>
                    <p><strong>Modo de uso:</strong> Aplicar en el área deseada con movimientos suaves.</p>
                    <p><strong>Recomendaciones:</strong> Evitar contacto con los ojos. Mantener en un lugar fresco.</p>
                    <p><strong>Detalles:</strong> Producto artesanal, hecho con ingredientes naturales.</p>
                </div>
            </div>
            <button class="flecha izquierda" onclick="cambiarProducto(-1)">&#10094;</button>
            <button class="flecha derecha" onclick="cambiarProducto(1)">&#10095;</button>
        </div>
    `;

    // Inicia el carrusel en el primer producto
    productoActual = 0;
    mostrarProducto(productoActual);
}

// Función para mostrar los cursos disponibles
function mostrarCursos() {
    document.getElementById('contenido-opcion').innerHTML = `
        <h3>Cursos Disponibles</h3>
        <div id="contenedor-cursos">
            <ul id="lista-cursos">
                <li onclick="mostrarInfoCurso('barberia')">Barbería – (clic para más info)</li>
                <li onclick="mostrarInfoCurso('pestanas')">Pestañas – (clic para más info)</li>
                <li onclick="mostrarInfoCurso('microblading')">Microblading – (clic para más info)</li>
                <li onclick="mostrarInfoCurso('tatuaje')">Tatuaje – (clic para más info)</li>
            </ul>
            <div id="info-curso">
                <p>Selecciona un curso para ver más información.</p>
            </div>
        </div>
    `;
}

function mostrarInfoCurso(curso) {
    const contacto = "+52 1 618 159 4450";
    const costo = "Inscripción $1000 MXN, $300 MXN por semana.";
    let contenido = "";

    switch (curso) {
        case 'barberia':
            contenido = `
                <h4>Curso de Barbería</h4>
                <p><strong>Duración:</strong> 24 semanas</p>
                <p><strong>Contacto:</strong> ${contacto}</p>
                <p><strong>Costo:</strong> ${costo}</p>
                <p>Aprende técnicas modernas y clásicas de corte, perfilado de barba, uso de herramientas profesionales y trato al cliente. Ideal para quienes quieren iniciar en el mundo de la barbería o perfeccionar su técnica.</p>
            `;
            break;
        case 'pestanas':
            contenido = `
                <h4>Curso de Pestañas</h4>
                <p><strong>Duración:</strong> Según la maestra</p>
                <p><strong>Contacto:</strong> ${contacto}</p>
                <p><strong>Costo:</strong> ${costo}</p>
                <p>Conoce las técnicas más utilizadas para aplicación de extensiones de pestañas, tipos de volumen, cuidado e higiene. Ideal para quienes buscan especializarse en estética femenina.</p>
            `;
            break;
        case 'microblading':
            contenido = `
                <h4>Curso de Microblading</h4>
                <p><strong>Duración:</strong> 1 semana</p>
                <p><strong>Contacto:</strong> ${contacto}</p>
                <p><strong>Costo:</strong> ${costo}</p>
                <p>Aprende la técnica de diseño de cejas pelo a pelo con acabado natural. Ideal para personas que buscan ofrecer servicios estéticos de alta demanda y precisión.</p>
            `;
            break;
        case 'tatuaje':
            contenido = `
                <h4>Curso de Tatuaje</h4>
                <p><strong>Duración:</strong> 24 semanas</p>
                <p><strong>Contacto:</strong> ${contacto}</p>
                <p><strong>Costo:</strong> ${costo}</p>
                <p>Aprende desde cero sobre higiene, diseño, manejo de máquina, técnica de sombreado y líneas. Este curso es para quienes desean convertirse en tatuadores profesionales.</p>
            `;
            break;
    }

    document.getElementById('info-curso').innerHTML = contenido;
}

const productos = [
    {
        imagen: "imagenes/producto1.jpg",
        nombre: "Bálsamo Natural",
        uso: "Aplicar en el área deseada con movimientos suaves.",
        recomendaciones: "Evitar contacto con los ojos. Mantener en un lugar fresco.",
        detalles: "Producto artesanal, hecho con ingredientes naturales."
    },
    {
        imagen: "imagenes/producto2.jpg",
        nombre: "Jabón de Lavanda",
        uso: "Usar durante el baño para limpiar suavemente la piel.",
        recomendaciones: "No exponer al sol directo.",
        detalles: "Ideal para piel sensible. Aroma relajante."
    },
    {
        imagen: "imagenes/producto3.jpg",
        nombre: "Aceite para Barba",
        uso: "Aplicar unas gotas en la barba y masajear.",
        recomendaciones: "Usar diariamente para mejores resultados.",
        detalles: "Mezcla de aceites esenciales para suavidad y brillo."
    }
];

let productoActual = 0;

function mostrarProducto(index) {
    const prod = productos[index];
    document.getElementById('producto-carrusel').innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" class="imagen-producto">
        <div class="info-producto">
            <h3>${prod.nombre}</h3>
            <p><strong>Modo de uso:</strong> ${prod.uso}</p>
            <p><strong>Recomendaciones:</strong> ${prod.recomendaciones}</p>
            <p><strong>Detalles:</strong> ${prod.detalles}</p>
        </div>
    `;
}

function cambiarProducto(direccion) {
    productoActual += direccion;
    if (productoActual < 0) productoActual = productos.length - 1;
    if (productoActual >= productos.length) productoActual = 0;
    mostrarProducto(productoActual);
}
