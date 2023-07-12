let productos;
console.table(productos)
productosJson()
//Arreglo carrito de compras
const carro = JSON.parse(localStorage.getItem("carro")) || [];
const articulosGuardados = JSON.parse(localStorage.getItem("carro"))


//Completar tabla de productos con el carrito almacenado en el Local Storage
if(articulosGuardados){
    console.table(articulosGuardados);
    let tablaBody = document.getElementById('tablabody');
    for(producto of articulosGuardados){
        tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$ ${producto.precio}</td>
        </tr>
    `;
    let resultado = document.getElementById("total");
    let totalFinal = carro.reduce((acumulador, item) => acumulador + item.precio, 0)
    resultado.innerText = `Total a pagar $: ${totalFinal}`;
    }
}


//Generacion Cartas Productos
let articulos = document.getElementById("cartasTodas");

function renderizarProd(listaProds){
    articulos.innerHTML='';
    for (const producto of listaProds){
    let carta = document.createElement("div");
    carta.className = "col-md-3";
    carta.style.margin = "2% 3% 3% 5%"
    carta.innerHTML = `
    <div class="card carta" style="width: 18rem;">
    <img src=${producto.foto} class="card-img-top" alt="...">
        <div class="card-body light">
            <h5 class="card-title">${producto.nombre}</h5>
            <h6 class="card-title">$ ${producto.precio}</h6>
            <p class="card-text">${producto.descripcion}</p>
            <button id=${producto.id} class="btn btn-primary comprar">COMPRAR</button>
        </div>
    </div>
    `;
    articulos.appendChild(carta);
    }
    let botonComprar = document.getElementsByClassName("comprar");
    agregarCarritoBtn(botonComprar);
}

//Funcion con evento agregar a Carrito
function agregarCarritoBtn(elemento){
    for(const boton of elemento)
    {
        boton.addEventListener('click',()=>{
            const prodACarro = productos.find((prod) => prod.id == boton.id);
            console.log(prodACarro);
            agregarACarrito(prodACarro);
            Swal.fire({
                title: 'Felicidades!',
                text: `Agregaste ${prodACarro.nombre} al carrito`,
                imageUrl: prodACarro.foto,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        })
    }
}

function guardarStorage(){
    localStorage.setItem("carro", JSON.stringify(carro));
}

//Completar tabla de productos
let tablaBody = document.getElementById('tablabody');
function agregarACarrito(producto){
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>$ ${producto.precio}</td>
        </tr>
    `;
    let resultado = document.getElementById("total");
    let totalFinal = carro.reduce((acumulador, item) => acumulador + item.precio, 0)
    resultado.innerText = `Total a pagar $: ${totalFinal}`;
    //Guardar carrito en el Storage
    guardarStorage();
}

//Funcion vaciar carrito de compras y Storage
function vaciarCarrito(){
    carro.length = 0;
    tablaBody.innerHTML = ``;
    let resultado = document.getElementById("total");
    resultado.innerText = ``;
    localStorage.removeItem("carro")
}


//Evento boton vaciar carrito de compra
let botonVacio = document.getElementById("vacio");
botonVacio.addEventListener('click',()=>{ 
    vaciarCarrito();
});

//Evento boton "Light" y "Dark" mode
let boton = document.getElementById('mode');
let contenedor = document.getElementById('principal');
boton.onclick =()=>{
    if(localStorage.getItem('mode')=='light'){
        contenedor.classList.replace('light','dark');
        document.body.className='dark';
        boton.innerText='Light Mode';
        localStorage.setItem('mode','dark');
    }else{
        contenedor.classList.replace('dark','light');
        document.body.className='light';
        boton.innerText='Dark Mode';
        localStorage.setItem('mode','light');
    }
}

//Funcion ocultar y mostrar elementos del DOM
let ocultoPrecio = document.getElementById("cartasPrecio")
let ocultoAlfabeto = document.getElementById("cartasAlfabeto")

function ocultos(arreglo){
    arreglo.style.display ="none";
}

function mostrar(arreglo){
    arreglo.style.display="";
}

ocultos(ocultoPrecio);
ocultos(ocultoAlfabeto);

//Funcion habilitar elementos con eventos de Botón
function habilitar(boton, elemento1,elemento2){
    if(boton.onclick=()=>{}){
        console.log("hola");
        elemento1.className="btn btn-outline-primary disabled";
        elemento2.className="btn btn-outline-primary"
    }
}

//Botón de ordenado por precio de artículos
let ordenPrecio = document.getElementById("ordenPrecio");
ordenPrecio.onclick =()=>{
    cartasPrecio.innerHTML='';
    cajaDolar.innerHTML='';
    let precioOrdenado = productos.sort((a,b)=> a.precio - b.precio);
    generarCartas(precioOrdenado, cartasPrecio);
    mostrar(ocultoPrecio);
    ocultos(ocultoAlfabeto);
};

//Botón de ordenado por alfabeto de artículos
let ordenAlfabeto = document.getElementById("ordenAlfabeto");
ordenAlfabeto.addEventListener("click", ()=>{
    ocultoAlfabeto.innerHTML='';
    cajaDolar.innerHTML='';
    let ordenado1 = productos.sort((a,b)=> a.nombre.localeCompare(b.nombre));
    generarCartas(ordenado1, cartasAlfabeto);
    mostrar(ocultoAlfabeto);
    ocultos(ocultoPrecio);
});

//Funcion generadora de cartas de productos
let barra =document.getElementById("barra")
function generarCartas(objeto, padreID){
    for(const producto of objeto)
    {
    let carta1 = document.createElement("div");
    carta1.className = "col-md-3";
    carta1.style.margin = "2% 3% 3% 5%"
    carta1.innerHTML = `
    <div class="card carta prueba" style="width: 18rem;">
    <img src=${producto.foto} class="card-img-top" alt="...">
        <div class="card-body light">
            <h5 class="card-title">${producto.nombre}</h5>
            <h6 class="card-title">$ ${producto.precio}</h6>
            <p class="card-text">${producto.descripcion}</p>
            <button id=${producto.id} class="btn btn-primary comprar">COMPRAR</button>
        </div>
    </div>
    `;
    padreID.appendChild(carta1);
    articulos.style.display ="none";
    }
    let botonComprar = document.getElementsByClassName("comprar");
    agregarCarritoBtn(botonComprar);
}

//Botón "Finalizar Compra"
let finalizarBtn = document.getElementById("finalizar");
finalizarBtn.onclick=()=>{
    Swal.fire({
        title: 'Atención',
        text: "¿Desea comprar los artículos del carrito?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su compra se ha procesado con exito',
                showConfirmButton: false,
                timer: 3000
              }) 
              Toastify({
                text:"Gracias por su compra. Nos pondremos en contacto para coordinar la entrega.",
                duration: 7000,
                gravity:"top",
                position: "right",
                close: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                  },
            }).showToast()
        }      
      })
      vaciarCarrito();
}

//Función convertir precios a dolares
async function productosJson(){
    const URLJSON = 'productos.json';
    const respuesta = await fetch(URLJSON);
    const datos = await respuesta.json();
    console.log(datos);
    productos = datos;
    renderizarProd(productos);
}

let cajaDolar = document.getElementById("cartasDolar")
let botonDolar = document.getElementById("botonDolar");
botonDolar.addEventListener('click',()=>{
    cartasPrecio.innerHTML='';
    cartasAlfabeto.innerHTML='';
    convertirMoneda()
})

function convertirMoneda()
{
    const URLMONEDA = 'https://api.bluelytics.com.ar/v2/latest';
    fetch(URLMONEDA)
        .then((respuesta)=>respuesta.json())
        .then((data)=>{
            const cotizacionBlue = data.blue;
            const ventaDolar = cotizacionBlue.value_sell;
            cajaDolar.innerHTML='';
            cartasTodas.innerHTML='';;
            for (const producto of productos){
                let precioEnDolares = producto.precio / ventaDolar;
                let carta = document.createElement("div");
                carta.className = "col-md-3";
                carta.style.margin = "2% 3% 3% 5%"
                carta.innerHTML = `
                <div class="card carta" style="width: 18rem;">
                <img src=${producto.foto} class="card-img-top" alt="...">
                    <div class="card-body light">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <h6 class="card-title">U$D ${precioEnDolares.toFixed(2)}</h6>
                        <p class="card-text">${producto.descripcion}</p>
                        <button id=${producto.id} class="btn btn-primary comprar">COMPRAR</button>
                    </div>
                </div>
                `;
                cajaDolar.appendChild(carta);
            }
            let botonComprar = document.getElementsByClassName("comprar");
            agregarCarritoBtn(botonComprar);
        })
}