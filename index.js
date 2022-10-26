let buying = true,
    total = 0,
    discount = 0

const getDiscount = total => {
    if (total > 20000) {
        discount = total * 0.2
        total = total - discount
    } else if (total <= 20000 && total > 10000) {
        discount = total * 0.15
        total = total - discount
    } else {
        discount = total * 0.1
        total = total - discount
    }
    return total
}

const addToCart = product => {
    switch (product) {
        case 1:
            total += 5000
            break;
        case 2:
            total += 8000
            break;
        case 3:
            total += 10000
            break;
        case 4:
            total += 7500
            break;
    }
}

while (buying) {
    let products = parseInt(prompt("Ingrese el numero del producto desea agregar al carrito: 1.Puma ($5000), 2.Adidas ($8000), 3.Jordan ($10000), 4.Nike ($7500)"))
    addToCart(products)

    let keepBuying = prompt("¿Desea seguir comprando? (si/no):")
    while (keepBuying !== "no" && keepBuying !== "si") {
        keepBuying = prompt("Responda: si/no")
    }

    if (keepBuying === "no") {
        buying = false
        total = getDiscount(total)
    }
}

alert(`El total de su compra es de: $${total}, el descuento aplicado es de: $${discount}`)