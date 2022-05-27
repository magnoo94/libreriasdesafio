class Producto {
    constructor(nombre, marca, precio, cantidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("Botines", "Nike", 500, 300)
const producto2 = new Producto("Medias", "Adidas", 50, 500)
const producto3 = new Producto("Espinilleras", "New Balance", 25, 100)
const producto4 = new Producto("Jersey De Entrenamiento", "Joma", 400, 600)

const productos = [producto1, producto2, producto3, producto4]


let divProductos = document.querySelector('#divProductos')

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Marca: ${producto.marca}</p>
                <p class="card-text">Stock: ${producto.cantidad}</p>
                <p class="card-text">$${producto.precio}</p>
                <button class="btn btn-dark" id="boton${indice}">Agrega al carrito</button>
            </div>
        </div>
    `
})

productos.forEach((producto, indice) => {
    document.querySelector(`#boton${indice}`).addEventListener('click', () => {
        Toastify({
            text: `Producto ${producto.nombre} agregado al carrito`,
            duration: 3000,
            newWindow: false,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #9811ad, #ece932)",
            },
        }).showToast();
    })
})




