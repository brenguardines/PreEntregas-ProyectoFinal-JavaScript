class Alfajor{
    constructor(id,nombre,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

const alfajorDDLchocolate       = new Alfajor(1,"Alfajor de Chocolate",        120,"img/ddlChocoNegro.png");
const alfajorDDLchocolateBlanco = new Alfajor(2,"Alfajor de Chocolate blanco", 130,"img/ddlChocoBlanco.png");
const alfajorChocoAmargo        = new Alfajor(3,"Alfajor de Chocolate Amargo", 230,"img/chocoAmargo.png");
const alfajorFruta              = new Alfajor(4,"Alfajor de Fruta",            100,"img/fruta.png");
const alfajorMaicena            = new Alfajor(5,"Alfajor de Maicena",          170,"img/maicena.png");
const alfajorCoco               = new Alfajor(6,"Alfajor de Coco",             250,"img/coco.png");
const alfajorSantafesino        = new Alfajor(7,"Alfajor Santafesino",         160,"img/santafesino.png");


//Creo un array con todo el catalogo de los distintos alfajores:
const alfajores = [alfajorDDLchocolate, alfajorDDLchocolateBlanco, alfajorChocoAmargo, alfajorFruta, alfajorMaicena, alfajorCoco, alfajorSantafesino];

//Creo el array del carrito:
let carrito = [];

//Si hay algo en el localStorage, lo cargo en el carrito:
if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

//Modifico el DOM mostrando los alfajores:
const contenedorAlfajores = document.getElementById("contenedorAlfajores");

//Creo una funcion para mostrar los alfajores en stock:
const mostrarAlfajores = () => {
    alfajores.forEach(alfajor => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3" , "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                    <img src = " ${alfajor.img}" class = "card-img-tom imgAlfajores" alt=" ${alfajor.nombre}">
                    <div class = "card-body">
                        <h2 class = "nombreAlfajor"> ${alfajor.nombre} </h2>
                        <p> ${alfajor.precio} </p>
                        <button class = "btn colorBoton" id = "boton${alfajor.id}"> Agregar al Carrito </button>
                    </div>
                </div> `

        contenedorAlfajores.appendChild(card);

        //Agrego los alfajores al carrito:
        const boton = document.getElementById(`boton${alfajor.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(alfajor.id);
        })


    })
}

mostrarAlfajores();

//Creo una funcion para agregar los alfajores al carrito:
const agregarAlCarrito = (id) => {
    const alfajorEnCarrito = carrito.find(alfajor => alfajor.id === id);
    if(alfajorEnCarrito){
        alfajorEnCarrito.cantidad++;
    }else{
        const alfajor = alfajores.find(alfajor => alfajor.id === id);
        carrito.push(alfajor);
    }

    calcularTotal();

    //Trabajo con el localStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Muestro el carrito de compras:

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();

})

const mostrarCarrito = () => {

    //Para que no repitan los alfajores cada vez que toco ver carrito:
    contenedorCarrito.innerHTML = ""; 

    carrito.forEach(alfajor => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3" , "col-md-6", "col-sm-12");
        card.innerHTML = `
                <div class = "card" >
                    <img src = " ${alfajor.img}" class = "card-img-tom imgAlfajores" alt=" ${alfajor.nombre}">
                    <div class = "card-body">
                        <h2 class = "nombreAlfajor"> ${alfajor.nombre} </h2>
                        <p> ${alfajor.precio} </p>
                        <p> ${alfajor.cantidad} </p>
                        <button class = "btn colorBoton" id = "eliminar${alfajor.id}"> Eliminar</button>
                    </div>
                </div> `

        contenedorCarrito.appendChild(card);

        //Elimino alfajores del carrito:
        const boton = document.getElementById(`eliminar${alfajor.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(alfajor.id);
        
        })
    })
    calcularTotal();
}

//Funcion que elimina el alfajor del carrito:

const eliminarDelCarrito = (id) => {
    const alfajor = carrito.find(alfajor => alfajor.id === id);
    const indice = carrito.indexOf(alfajor);
    carrito.splice(indice,1);
    mostrarCarrito();

    //LocalStorage:
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Vacio todo el carrito de compras.

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = [];
    mostrarCarrito();

    //LocalStorage:
    localStorage.clear();
}

//Muestro un mensaje con el total de la compra.

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach(alfajor => {
        totalCompra += alfajor.precio * alfajor.cantidad;
    })
    total.innerHTML = `Total $${totalCompra}`;
}
