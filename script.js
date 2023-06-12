//Funciones Producto "Bibliotecas"

function filtrarPorPrecioBibliotecas(precio){
    const filtradosPrecios = bibliotecas.filter((producto)=>producto.precio <= precio);
    return filtradosPrecios;
}

function filtrarPorStockBibliotecas(stock){
    const filtradosStock = bibliotecas.filter((prod)=>prod.stock >= stock);
    return filtradosStock;
}

//Funciones Producto "Mesas"

function filtrarPorPrecioMesas(precio1){
    const filtradosPrecios1 = mesas.filter((prod1)=>prod1.precio <= precio1);
    return filtradosPrecios1;
}

function filtrarPorStockMesas(stock1){
    const filtradosStock1 = mesas.filter((prod1)=>prod1.stock >= stock1);
    return filtradosStock1;
}


//Funciones Producto "Sillas"

function filtrarPorPrecioSillas(precio2){
    const filtradosPrecios2 = sillas.filter((prod2)=>prod2.precio <= precio2);
    return filtradosPrecios2;
}

function filtrarPorStockSillas(stock2){
    const filtradosStock2 = sillas.filter((prod2)=>prod2.stock >= stock2);
    return filtradosStock2;
}

//Funciones Producto "Sillones"

function filtrarPorPrecioSillones(precio){
    const filtradosPrecios = sillones.filter((producto)=>producto.precio <= precio);
    return filtradosPrecios;
}

function filtrarPorStockSillones(stock3){
    const filtradosStock3 = sillas.filter((prod3)=>prod3.stock >= stock3);
    return filtradosStock3;
}

let compra1 = prompt("¿Desea conocer nuestros artículos del catálogo?\n Presione 'Si' o 'No'")
while(compra1.toLowerCase() == "si")
{   
    let articulo = prompt("Seleccione el artículo. Tipear números:\n 1. Biblioteca \n 2. Mesa \n 3. Silla \n 4. Sillón")
    switch(articulo)
    {
        //Caso Producto "Bibliotecas"
        case "1":
            let prodBiblio = prompt("Elija un filtro para aplicar al artículo. Tipear números: \n 1. Precio \n 2. Stock");
            switch(prodBiblio)
            {
                //Filtrado por Precio "Biblioteca"
                case "1":
                    let precioMaximoBiblioteca = parseFloat(prompt("Ingrese el precio máximo para filtrar. Presione '0' para salir"));
                    while (precioMaximoBiblioteca != 0)
                    {
                        if(isNaN(precioMaximoBiblioteca) || precioMaximoBiblioteca < 0)
                        {
                            alert("Error. Ingrese un número válido. ")
                        }else{
                            const productosFiltrados = filtrarPorPrecioBibliotecas(precioMaximoBiblioteca);
                            console.table(productosFiltrados);
                            }
                        precioMaximoBiblioteca = parseFloat(prompt("Se ha generado el filtro por precio. \n Ingrese el precio máximo si desea generar un filtro nuevamente. Presione '0' para salir"));
                    }     
                break;
                
                //Filtado por Stock "Biblioteca"
                case "2":
                    let filtradoPorStock = parseFloat(prompt("Ingrese cantidad Stock deseada. Presione '0' para salir"));
                    if(filtradoPorStock >= 1){
                        const productosFiltradosStock = filtrarPorStockBibliotecas(filtradoPorStock);
                        console.table(productosFiltradosStock);
                    }else{
                        alert("Error. Ingrese un número válido. ");
                    }
                break;
                
                //Default case
                default:
                    alert("No existe el filtrado que intenta aplicar");
                break;
            }
        break;     

        //Caso Producto "Mesas"
        case "2":
            let prodMesa = prompt("Elija un filtro para aplicar al artículo. Tipear números: \n 1. Precio \n 2. Stock");
            switch(prodMesa)
            {
                //Filtrado por Precio "Mesas"
                case "1":
                    let precioMaximoMesa = parseFloat(prompt("Ingrese el precio máximo que desea abonar. Presione '0' para salir"));
                    while (precioMaximoMesa != 0)
                    {
                        if(isNaN(precioMaximoMesa) || precioMaximoMesa < 0)
                        {
                            alert("Error. Ingrese un número válido. ")
                        }else{
                            const prodFilt = mesas.filter((produ)=>produ.precio <= precioMaximoMesa);
                            console.table(prodFilt);
                            }
                        precioMaximoMesa = parseFloat(prompt("Se ha generado el filtro por precio. \n Ingrese el precio máximo si desea generar un filtro nuevamente. Presione '0' para salir"));
                    }
                break;

                //Filtado por Stock "Mesas"
                case "2":
                    let filtradoPorStock = parseFloat(prompt("Ingrese cantidad Stock deseada. Presione '0' para salir"));
                    if(filtradoPorStock >= 1){
                        const productosFiltradosStock = filtrarPorStockMesas(filtradoPorStock);
                        console.table(productosFiltradosStock);
                    }else{
                        alert("Error. Ingrese un número válido. ");
                    }
                break; 

                //Default case
                default:
                    alert("No existe el filtrado que intenta aplicar");
                break;
            }
        break;

        //Caso Producto "Sillas"
        case "3":
            let prodSillas = prompt("Elija un filtro para aplicar al artículo. Tipear números: \n 1. Precio \n 2. Stock");
            switch(prodSillas)
            {
                //Filtrado por Precio "Sillas"
                case "1":
                    let precioMaximoSillas = parseFloat(prompt("Ingrese el precio máximo que desea abonar. Presione '0' para salir"));
                    while (precioMaximoSillas != 0)
                    {
                        if(isNaN(precioMaximoSillas) || precioMaximoSillas < 0)
                        {
                            alert("Error. Ingrese un número válido. ")
                        }else{
                            const productosFiltrados = filtrarPorPrecioSillas(precioMaximoSillas);
                            console.table(productosFiltrados);
                            }
                        precioMaximoSillas = parseFloat(prompt("Se ha generado el filtro por precio. \n Ingrese el precio máximo si desea generar un filtro nuevamente. Presione '0' para salir"));
                    }
                break;

                //Filtrado por Stock "Sillas"
                case "2":
                    let filtradoPorStock = parseFloat(prompt("Ingrese cantidad Stock deseada. Presione '0' para salir"));
                    if(filtradoPorStock >= 1){
                        const productosFiltradosStock = filtrarPorStockSillas(filtradoPorStock);
                        console.table(productosFiltradosStock);
                    }else{
                        alert("Error. Ingrese un número válido. ");
                    }
                break;
                
                //Default case
                default:
                    alert("No existe el filtrado que intenta aplicar");
                break;
            }
        break;

        //Caso Producto "Sillones"
        case "4":
            let prodSillones = prompt("Elija un filtro para aplicar al artículo. Tipear números: \n 1. Precio \n 2. Stock");
            switch(prodSillones)
            {
                //Filtrado por Precio "Sillones"
                case "1":
                    let precioMaximoSillones = parseFloat(prompt("Ingrese el precio máximo que desea abonar. Presione '0' para salir"));
                    while (precioMaximoSillones != 0)
                    {
                        if(isNaN(precioMaximoSillones) || precioMaximoSillones < 0)
                        {
                            alert("Error. Ingrese un número válido. ")
                        }else{
                            const productosFiltrados = filtrarPorPrecioSillas(precioMaximoSillones);
                            console.table(productosFiltrados);
                            }
                        precioMaximoSillones = parseFloat(prompt("Se ha generado el filtro por precio. \n Ingrese el precio máximo si desea generar un filtro nuevamente. Presione '0' para salir"));
                    }
                break;

                //Filtrado por Stock "Sillones"
                case "2":
                    let filtradoPorStock = parseFloat(prompt("Ingrese cantidad Stock deseada. Presione '0' para salir"));
                    if(filtradoPorStock >= 1){
                        const productosFiltradosStock = filtrarPorStockSillones(filtradoPorStock);
                        console.table(productosFiltradosStock);
                    }else{
                        alert("Error. Ingrese un número válido. ");
                    }
                    break;

                    //Default case
                    default:
                        alert("No existe el filtrado que intenta aplicar");
                    break;
            }
            break;

            default:
                alert ("No existe el mueble que desea comprar.");
            break; 
    }  
            compra1 = prompt("¿Desea continuar viendo nuestro catálogo? Presione 'Si' o 'No'")
}