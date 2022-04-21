import { stockProductos } from "./stock.js";

// FIN DE PRODUCTOS

let carro = [];
let producto = {};

console.log(stockProductos)

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
const tableBody = document.querySelector("#tr")

function cards() {
    stockProductos.forEach((prod) => {
        const div = document.createElement("div");
        div.className = "col-3 mb-3";
    
      
        div.innerHTML = `
                             <div class="card " >
                             
                                <a href=#! id="enlaceModal${prod.id}"><img src= ${prod.img} class="card-img-top img-size  "   alt="..."></a>

                                <div id="miModal${prod.id}" class="modal">

                                    <!-- Modal content -->
                                    <div class="modal-content">
                                        <span id="close${prod.id}" class="close">&times;</span>
                                      
                                        <h5 class="card-title"><strong>${prod.nombre}</strong></h5>
                                        
                                        <img src="${prod.img}">
                                        
                                    </div>

                                    </div>


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
                                </div>
                            </div>`;
        contenedor.appendChild(div);
 
        let cantidadProd = document.getElementById(`cantidad.${prod.id}`); 
        cantidadProd.addEventListener("mouseout", () => {
        console.log(cantidadProd.value)
        }) 
        const botonAnadir = document.getElementById(`comprar${prod.id}`);
        botonAnadir.addEventListener('click', () => {
        // console.log(prod)
        let cantNumero = parseInt(cantidadProd.value)
         agregarProducto(prod, cantNumero);
       
    })
    
 // Obtenemos el modal
let modal = document.querySelector(`#miModal${prod.id}`);
// Obtenemos el enlace para abrir modal
let enlaceModal = document.querySelector(`#enlaceModal${prod.id}`);
// Obtenemos el Contenido del modal
let span = document.querySelector(`#close${prod.id}`);
// console.log(modal);
// console.log(enlaceModal);
// console.log(span);
// Para abrir el modal
enlaceModal.onclick = function() {
    modal.style.display = "block";
  }
  
// Cuando el usuario haga click en (x) span

span.onclick = function()  {
    modal.style.display = "none";
}  
// Cuando el usuario haga click en cualquier lugar
window.onclick = function(e) {
     if(e.target == modal) {
        modal.style.display = "none";
 
     }
}
// cuando el usuario Pulse la tecla escape

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        modal.style.display = "none";
    }
})
    });
}


// 


const agregarProducto = (prod, cant) => {

        if(carro.some(item => item.id == prod.id)) {
            let miProducto = carro.find(elem => elem.id == prod.id);
            miProducto.cantidad += cant ;
        } else {
            let nuevoProducto = (new Carrito(prod.id, prod.nombre, prod.genero, prod.tipo, prod.precio, prod.talla, cant)) ;
            carro.push(nuevoProducto)
        }

        console.log(carro)

    //  producto = stockProductos.find(item => item.id == prodid);
    // carro.push(new Carrito(producto.id, producto.nombre, producto.genero, producto.tipo, producto.precio, producto.talla, cant))
   
    localStorage.setItem("cart", JSON.stringify(carro));
    // alert(`haz agregado al carrito ${cant} ${producto.nombre} de ${producto.genero}. Si quieres ver mas detalle ve a la consola`);
  // incremento cantidades en el badge
     let bageContar = document.querySelector("#badgeCount")
     bageContar.className = "balge"
     bageContar.innerHTML = carro.length;
   mostrarCompra();
}
const mostrarCompra = () => {

    // Me traigo la data del local storage y la parseo
      carro = JSON.parse(localStorage.getItem("cart"));
  console.log(carro)
   // Muestro en el html del carro
    tableBody.innerHTML = "";
  
    carro.forEach((prod) => {
      const tr = document.createElement("tr"); // 
    //   table.className =;
      tr.innerHTML = ` 
    <tr>
      <th scope="row">${prod.cantidad}</th>
      <td>${prod.nombre}</td>
      <td>${prod.precio}</td>
      <td>${prod.precio*prod.cantidad}</td>
    </tr>
 




              
          `;
      tableBody.appendChild(tr);
    });
  };

cards();
