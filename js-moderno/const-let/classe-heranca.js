class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('camiseta gola v', 50)
console.log(shirt.productWithDiscount(10))

const tenis = new Product('tenis verde', 100)
console.log(tenis.productWithDiscount(50))

class ProductWithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColor() {
        console.log('As cores sao:')
        this.colors.forEach(color => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAttributes('chapeu', 29.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.productWithDiscount(30))
hat.showColor()