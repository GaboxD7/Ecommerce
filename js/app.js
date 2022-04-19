 import { stockProductos } from "./stock.js";


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
