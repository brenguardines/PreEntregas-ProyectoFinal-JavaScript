class Alfajor{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const alfajorDDLchocolate = new Alfajor(1,"Alfajor de dulce de leche con chocolate", 120,500);
const alfajorDDLchocolateBlanco = new Alfajor(2,"Alfajor de dulce de leche con chocolate blanco", 130,450);
const alfajorFruta = new Alfajor(3,"Alfajor de fruta", 100,300);
const alfajorCoco = new Alfajor(4,"Alfajor de coco", 250,300);

const arrayAlfajores = [alfajorDDLchocolate, alfajorDDLchocolateBlanco, alfajorFruta, alfajorCoco];

alert("Bienvenido/a a la tienda de Alfajores");

let alfajor = -1;
let totalGastado = 0;

while (alfajor != 0) {
    mostrarProductos();
    console.log(" ");
    console.log("Su gasto hasta el momento es de: $" + totalGastado);
    alfajor = parseInt(prompt("Ingrese el numero de alfajor que desea - para salir ingrese 0 - para consultar la existencia de algun alfajor ingrese 123"));

    switch (alfajor) {
        case 1:
            totalGastado += 120;
            break;
        case 2:
            totalGastado += 130;
            break;
        case 3:
            totalGastado += 100;
            break;
        case 4:
            totalGastado += 250;
            break;
        case 0:
            salir();
            break;
        case 123:
            buscarAlfajor();
            break;
        default:
            console.log("Por favor ingrese un numero de la lista");
            break;
    }

}

if (totalGastado >= 2000) {
    alert("Por haber superado $2000 obtuvo un %10 de descuento!!!");
    console.log("Su gasto total sin el descuento es de: $" + totalGastado);
    console.log("Su gasto total con el 10% de descuento es: $" + descuentoDel10(totalGastado));
} else {
    console.log("Su gasto total es de: $" + totalGastado);
}

//Funciones

function mostrarProductos(){
    arrayAlfajores.forEach(alfajor => {
        console.log("N°" + alfajor.id + " " + alfajor.nombre + " $" + alfajor.precio)
    })    
}

function buscarAlfajor() {
    let alf = prompt("Ingrese el nombre alfajor que esta buscando: ");
    let buscado = arrayAlfajores.find(alfajor => alfajor.nombre === alf);
    console.log(buscado);
}


function salir(){
    alert("Gracias, esperamos volverlo a ver!");
}

function descuentoDel10(monto){
    return monto * 0.9;
}