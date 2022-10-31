
const LXS_ADIDASALLSTAR_PRICE = 21000;
const COMPETITION_ADIDASALLSTAR_PRICE = 30000;

const LXS_ADIDASULTRABOST_PRICE = 30000;
const COMPETITION_ADIDASULTRABOST_PRICE = 42500;

const LXS_NWBALANCE574_PRICE = 32000;
const COMPETITION_NWBALANCE574_PRICE = 39000;

const LXS_NWBALANCE550_PRICE = 28300;
const COMPETITION_NWBALANCE550_PRICE = 33000;

const TOTAL_PRICE = (lxsProudctPrice, competitionProductPrice) => {fasTotal+=lxsProudctPrice; competitionTotal+=competitionProductPrice;}

let fasTotal = 0;
let competitionTotal = 0;
let productsOpt;
let menuOpt;

alert("Bienvenido al comparador de precios de Luxury Sport"); 

menuOpt = prompt("Desea comparar el precio de algún producto? (si/no)"); 

printMenuOptErrorMsg("algún"); 

while (menuOpt != "no" && menuOpt != null) {
    printProductMenu("", productsOpt == undefined); 

    switch (productsOpt) {
        case "1":
            TOTAL_PRICE(LXS_ADIDASALLSTAR_PRICE, COMPETITION_ADIDASALLSTAR_PRICE);
            showProducts("Adidas All Star", LXS_ADIDASALLSTAR_PRICE, COMPETITION_ADIDASALLSTAR_PRICE);
            showTotalPrice();
            break;
        case "2":
            TOTAL_PRICE(LXS_ADIDASULTRABOST_PRICE, COMPETITION_ADIDASULTRABOST_PRICE);
            showProducts("Adidas Utrabost", LXS_ADIDASULTRABOST_PRICE, COMPETITION_ADIDASULTRABOST_PRICE);
            showTotalPrice();
            break;
        case "3":
            TOTAL_PRICE(LXS_NWBALANCE574_PRICE, COMPETITION_NWBALANCE574_PRICE);
            showProducts("New Balance 574", LXS_NWBALANCE574_PRICE, COMPETITION_NWBALANCE574_PRICE);
            showTotalPrice();
            break;
        case "4":
            TOTAL_PRICE(LXS_NWBALANCE550_PRICE, COMPETITION_NWBALANCE550_PRICE);
            showProducts("New Balance 550", LXS_NWBALANCE550_PRICE, COMPETITION_NWBALANCE550_PRICE);
            showTotalPrice();
            break;
        default:
            alert("Opción inválida");
            break;
    }

    menuOpt = prompt("¿Desea comparar el precio de otro producto? (si/no)"); 

    printMenuOptErrorMsg("otro"); 

    printProductMenu("otro ", menuOpt === "si"); 
}

if (fasTotal <= 0 && competitionTotal <= 0 && productsOpt != undefined){
    showTotalPrice();
}else if (productsOpt == undefined || (fasTotal > 0 && competitionTotal > 0)){
    alert("Gracias por usar el comparador de precios de Luxury Sport");
}

function showProducts(name, price1, price2){
    alert("El precio de " + name + " en Luxury Sport es de: $" + price1 + " Arg" + "\n" + "El precio de " + name + " en la competencia es de: $" + price2 + " Arg");
}

function showTotalPrice(){
    if (fasTotal > 0 && competitionTotal > 0){
        alert("Si compra con nosotros usted pagará un total de: $" + fasTotal + " Arg" + "\n" + "Si compra con la competencia usted pagará un total de: $" + competitionTotal + " Arg" + "\n" + "Usted ahorrará: $" + (competitionTotal - fasTotal) + " Arg");
    }
    else {
        alert("No ha seleccionado ningún producto, gracias por usar el comparador de precios de Luxury Sport");
    }
}

function printMenuOptErrorMsg(errorString){
    while (menuOpt != "si" && menuOpt != "no") {
        menuOpt = prompt("Opción inválida, ¿desea comparar el precio de " + errorString + " producto? (si/no)");
    }
}

function printProductMenu(menuString, expression){
    if (expression){
        productsOpt = prompt("¿Qué " + menuString + "producto desea comparar? (Ingrese uno de los siguientes números)\n1 - Adidas All Star\n2 - Adidas Utrabost\n3 - New Balance 574\n4 - New Balance 550");
    }
}