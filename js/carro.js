// import { stockProductos } from "./app.js";

const karro = JSON.parse( localStorage.getItem('carrito'));
 console.log(karro)
//  console.log(carro)
// contenedorTable = document.querySelector("#carro-in")
const contenedorCar = document.querySelector("#conteCarro");
const car = document.querySelector(".Car");
console.log(contenedorCar)
console.log(car)
const mostrarCarroHtml = () => {
    console.log("hola mundo")
    // limpiarHTML()
   
   // Muestro en el html del carro
 
      contenedorCar.innerHTML = "";
   
     karro.forEach((prod) => {
     const {imagen, nombre, precio, cantidad, subtotal, id} = prod;
           const tr = document.createElement("tr"); 
 
        tr.innerHTML += ` 
      <tr class="p-4">
         <td><img src="${imagen}" height=65px class="w-100"</td>
         <th scope="row" class="text-center">${cantidad}</th>
         <td>${nombre}</td>
         <td>${precio}</td>
         <td>${subtotal}</td>
         <td>
             <a href="#" class="borrar-producto text-center" data-id="${id}"> <img src="img/basura.png" class="img-trash  borrar-producto" > </a>
         </td>
      </tr>`;
   // add el html del carro en el tbody
        contenedorCar.appendChild(tr);
      });
 
     // Agregar el carrito de compras al storage
 
  
     
     //  mostrarNumeroCarrito()
    }
