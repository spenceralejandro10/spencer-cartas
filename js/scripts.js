// Este archivo podría incluirse para implementar funcionalidades dinámicas como galerías de productos, características, formularios de contacto y login, entre otros.

// Ejemplo de galería de productos dinámica
const productos = [
    { nombre: 'Producto 1', imagen: 'producto1.jpg' },
    { nombre: 'Producto 2', imagen: 'producto2.jpg' },
    { nombre: 'Producto 3', imagen: 'producto3.jpg' },
    { nombre: 'Producto 4', imagen: 'producto4.jpg' }
];

const gallery = document.querySelector('.gallery');

productos.forEach(producto => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}"><p>${producto.nombre}</p>`;
    gallery.appendChild(galleryItem);
});

// Ejemplo de características dinámicas
const caracteristicas = [
    { titulo: 'Calidad Garantizada', descripcion: 'Productos que cumplen con los estándares más exigentes.' },
    { titulo: 'Envíos Rápidos', descripcion: 'Entrega rápida y segura a cualquier parte del país.' },
    { titulo: 'Atención Personalizada', descripcion: 'Asesoramiento profesional y atención al cliente 24/7.' }
];

const features = document.querySelector('.features');

caracteristicas.forEach(caracteristica => {
    const featuresItem = document.createElement('div');
    featuresItem.classList.add('features-item');
    featuresItem.innerHTML = `<h3>${caracteristica.titulo}</h3><p>${caracteristica.descripcion}</p>`;
    features.appendChild(featuresItem);
});

// Ejemplo de formulario de contacto con validación
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de validación del formulario y envío de datos simulado
    alert('Formulario de contacto enviado correctamente');
});

// Ejemplo de formulario de login con validación
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de validación del formulario de login y gestión de sesión
    const username = loginForm.querySelector('#username').value;
    const password = loginForm.querySelector('#password').value;
    
    // Aquí se podría validar el usuario y contraseña (simulado)
    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Aquí se podría redirigir o gestionar la sesión del usuario
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
