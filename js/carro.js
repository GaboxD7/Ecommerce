//  import { limpiarHTML} from "./app.js";

let articulosCarro = JSON.parse( localStorage.getItem('carrito')) || [];
let contenedorCarrito = document.querySelector('#lista-carrito tbody');
let carrito = document.querySelector('#carro-in');
let carritoVacio = document.querySelector('#carro-vacio');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let contenedorCar = document.querySelector("#conteCarro");
let pagar = document.querySelector("#pagar");
let seguirComprando = document.querySelector("#seguir-comprando")
let seguirComprando2 = document.querySelector("#seguir-comprando2")



mostrarCarroHtml()

function mostrarCarroHtml()  {
 
     limpiarHTML()
   
   // Muestro en el html del carro
 
      contenedorCar.innerHTML = "";
   
     articulosCarro.forEach((prod) => {
     const {imagen, nombre, precio, cantidad, subtotal, id} = prod;
           const tr = document.createElement("tr"); 
 
        tr.innerHTML += ` 
      <tr class="p-4">
         <td><img src="${imagen}" class="img-carro"</td>
        <th scope="row">${cantidad}</th>
         <td>${nombre}</td>

         <td>${subtotal}</td>
         <td>
             <a href="#" class="borrar-producto text-center" data-id="${id}"> <img src="img/basura.png" class="img-trash  borrar-producto" > </a>
         </td>
      </tr>`;
 
   // add el html del carro en el tbody
        contenedorCar.appendChild(tr);
    
      });

    }


console.log(articulosCarro)

    cargarEventos()

    function cargarEventos () {
       // Eliminar Producto
        carrito.addEventListener('click', eliminarProducto);

        // Vaciar Carrito

        vaciarCarrito.addEventListener('click', () => {
    
        articulosCarro = []; // reseteamos el arreglo
        localStorage.removeItem('carrito');
        contenedorCar.innerHTML = '';
     limpiarHTML()
         
           });
           // pagar 
           pagar.addEventListener('click', pagado);

    }

    function pagado() {
      console.log("hola")
      Toastify({
        text: `GRACIAS POR TU COMPRA`,
        duration: 5000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        // close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            padding: "5rem",
          background: "black",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    }



seguirComprando.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5502/index.html#section-medio";
})
seguirComprando2.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5502/index.html#section-medio";
})
// function cambiarCantidad(e) {
//     let ctdd = e.target.value;
//     console.log(e.target.value)
//     if(isNaN(ctdd) || ctdd <= 0) {
//           ctdd = 1;
 
//     }
//      upDatePrecio()

    
// } 
// function upDatePrecio () {
//     let price = 
    
// }
    
    // Eliminar Producto de carrito
  
    function eliminarProducto (e) {
  
      if(e.target.classList.contains('borrar-producto')) {
    
          const productoId = e.target.parentElement.getAttribute('data-id');
 
              // Elimina del arreglo de articulosCarrito por el data-id
              articulosCarro = articulosCarro.filter(producto => producto.id !== productoId);
            //   JSON.stringify(localStorage.setItem("carrito", articulosCarro ))  
            localStorage.setItem("carrito", JSON.stringify(articulosCarro))
              mostrarCarroHtml()
        
      }
  
      
  }

  function limpiarHTML() {

    // limpiar nuestro HTML
    // console.log(articulosCarro.firstChild)
    // while (articulosCarro.firstChild) {
    //     articulosCarro.removeChild(articulosCarro);
    // }
     total.innerHTML = `Total : $${totalGeneral()}`;
}

function totalGeneral() {

    let productoTotal = articulosCarro.reduce((total, producto) => total + producto.subtotal, 0);

    return productoTotal;
}

if (articulosCarro.length == 0 ) 
{
  console.log("vacio  ")
 carritoVacio.classList.remove("d-none")
  carrito.classList.add("d-none")
} else {
  console.log("lleno")
  carrito.classList.remove("d-none")
  carritoVacio.classList.add("d-none")
  // carritoVacio.classList.add("d-block")
}