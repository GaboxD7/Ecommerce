// import { stockProductos } from "./stock.js";
// INICIO DE PRODUCTOS
const stockProductos = [
    {
        id: 1,
        nombre: "Polera Manga Larga",
        desc: "Polera con mangas largas, protecion al maximo.",
        genero: "Mujer",
        tipo: "Polera",
        img: "img/mujer/poleraM-1.jpg",
        precio: 15000,
        talla: "M"
    },
    {
        id: 2,
        nombre: "Polera sin Manga",
        desc: "Comodidad, frescura y siempre a la moda.",
        genero: "Mujer",
        tipo: "Polera",
        img: "img/mujer/poleraM-2.jpg",
        precio: 15000,
        talla: "M"
    },
    {
        id: 3,
        nombre: "Sosten deportivo",
        desc: "Sientete Segura en cada movimiento.",
        genero: "Mujer",
        tipo: "Polera",
        img: "img/mujer/poleraM-3.jpg",
        precio: 15000,
        talla: "M"
    },
    {
        id: 4,
        nombre: "Polerra sin Manga",
        desc: "Comodidad, frescura y siempre a la moda.",
        genero: "Mujer",
        tipo: "Polera",
        img: "img/mujer/poleraM-4.jpg",
        precio: 15000,
        talla: "M"
    },
    
    {
        id: 5,
        nombre: "Pantalon Lila",
        desc: "Comodida y estilo.",
        genero: "Mujer",
        tipo: "Pantalon",
        img: "img/mujer/PantalonM-1.jpg",
        precio: 20000,
        talla: "M"
    },
    {
        id: 6,
        nombre: "Pantalon Blanco",
        desc: "Comodida y estilo.",
        genero: "Mujer",
        tipo: "Pantalon",
        img: "img/mujer/PantalonM-2.jpg",
        precio: 20000,
        talla: "M"
    },
    {
        id: 7,
        nombre: "Pantalon Negro",
        desc: "Comodida y estilo.",
        genero: "Mujer",
        tipo: "Pantalon",
        img: "img/mujer/PantalonM-3.jpg",
        precio: 20000,
        talla: "M"
    },
    {
        id: 8,
        nombre: "Pantalon Gris",
        desc: "Comodida y estilo.",
        genero: "Mujer",
        tipo: "Pantalon",
        img: "img/mujer/PantalonM-4.jpg",
        precio: 20000,
        talla: "M"
    },
    {
        id: 9,
        nombre: "Polera sin Mangas",
        desc: "Frescura, comodidad y tendencia.",
        genero: "Hombre",
        tipo: "Polera",
        img: "img/hombre/poleraM-1.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 10,
        nombre: "Polera sin Mangas",
        desc: "Frescura, comodidad y tendencia.",
        genero: "Hombre",
        tipo: "Polera",
        img: "img/hombre/poleraM-2.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 11,
        nombre: "Polera Manga Larga",
        desc: "Proteccion, comodidad.",
        genero: "Hombre",
        tipo: "Polera",
        img: "img/hombre/poleraM-3.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 12,
        nombre: "Polera con Mangas",
        desc: "Frescura, comodidad y tendencia.",
        genero: "Hombre",
        tipo: "Polera",
        img: "img/hombre/poleraM-4.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 13,
        nombre: "Pantalon Negro",
        desc: "Comodida y estilo.",
        genero: "Hombre",
        tipo: "Pantalon",
        img: "img/hombre/pantalonM-1.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 14,
        nombre: "Pantalon veis",
        desc: "Comodida y estilo.",
        genero: "Hombre",
        tipo: "Pantalon",
        img: "img/hombre/pantalonM-2.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 15,
        nombre: "Pantalon corto",
        desc: "Comodida y estilo.",
        genero: "Hombre",
        tipo: "Pantalon",
        img: "img/hombre/pantalonM-3.jpg",
        precio: 12000,
        talla: "M"
    },
    {
        id: 16,
        nombre: "Pantalon slimfit",
        desc: "Comodida y estilo.",
        genero: "Hombre",
        tipo: "Pantalon",
        img: "img/hombre/pantalonM-4.jpg",
        precio: 12000,
        talla: "M"
    }
    ];

// FIN DE PRODUCTOS

let carro = [];
let producto = {};



class Carrito {

    constructor(id, nombre, genero, tipo, precio, talla, cantidad ) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.tipo = tipo;
        this.precio = precio;
        this.talla = talla;
        this.cantidad = cantidad;
    }
    aplicarIva(prod) {
        valor = prod.precio * this.cantidad
        subTotal.push(valor);
    }
}

const contenedor = document.querySelector("#contenedor");

function cards() {
    stockProductos.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "col-3 mb-3";
    
      
        div.innerHTML = `
                            <div class="card">
                                <img src= ${prod.img} class="card-img-top img-size" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title"><strong>${prod.nombre}</strong></h5>
                                    <p class="card-text">${prod.desc}.</p>
                                </div>
                                <ul class="list-group list-group-flush d.flex">
                                    <li class="list-group-item"><strong>Genero: </strong>${prod.genero}</li>
                                    <li class="list-group-item"><strong>Talla: </strong>${prod.talla}</li>
                                 <li class="list-group-item"><strong>Precio: </strong>$ ${prod.precio}</li>
                                 <li class="list-group-item"><strong>Cantidad:<strong>
                                 <select id="cantidad.${prod.id}">
                                    <option>1</option>
                                    <option value=2>2</option>
                                    <option value=3>3</option>
                                    <option value=4>4</option>
                                 </select> </li>
                                </ul>
                                <div class="text-center ">
                                    <button class="card-btnn" id="comprar${prod.id}" type="button">AGREGAR AL CARRITO</button>
                                </d>
                            </div>`;
        contenedor.appendChild(div);
 
        let cantidadProd = document.getElementById(`cantidad.${prod.id}`); 
        cantidadProd.addEventListener("mouseout", () => {
        console.log(cantidadProd.value)
        }) 
        const botonAnadir = document.getElementById(`comprar${prod.id}`);
        botonAnadir.addEventListener('click', () => {
        // console.log(prod)
         agregarProducto(prod.id, cantidadProd.value);
       
    })
 
    });
}

const agregarProducto = (prodid, cant) => {

     producto = stockProductos.find(item => item.id == prodid);
    carro.push(new Carrito(producto.id, producto.nombre, producto.genero, producto.tipo, producto.precio, producto.talla, cant))
    alert(`haz agregado al carrito ${cant} ${producto.nombre} de ${producto.genero}. Si quieres ver mas detalle ve a la consola`);

}


cards();
