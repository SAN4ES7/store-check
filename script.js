const productsInShop = [
    {
        code: 1111,
        name: 'Oreo',
        priсe: 20,
        count: 1,
    },

    {
        code: 1112,
        name: 'Chips',
        priсe: 40,
        count: 1,
    },

    {
        code: 1113,
        name: 'Cola',
        priсe: 10,
        count: 1,
    },

    {
        code: 1114,
        name: 'Oranges',
        priсe: 25,
        count: 1,
    }
];

const promocodes = {
    PROMO20: 20,
    PROMO50: 50,
}


const checkOfProducts = {
    productsInCheck: [],

    addProduct(code) {
        const index = this.getIndexByCode(code, productsInShop);
        const uniqueness = this.getIndexByCode(code, this.productsInCheck);

        if (-1 === uniqueness) {
            this.productsInCheck.push(productsInShop[index]);
        } else {
            this.productsInCheck[uniqueness].count += 1;
        }
    },

    removeProduct(code, count) {
        const index = this.getIndexByCode(code, this.productsInCheck);
        const uniqueness = this.getIndexByCode(code, this.productsInCheck);
        this.productsInCheck[uniqueness].count -= count;
        if (this.productsInCheck[uniqueness].count <= 0) {
            this.productsInCheck.splice(index, 1);
        }
    },
    totalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.productsInCheck.length; i++) {
            totalPrice += this.productsInCheck[i].count * this.productsInCheck[i].priсe;
        }
        return totalPrice;
    },
    printCHeck(discount) {
        const check = {
            products: this.productsInCheck,
            totalPrice: this.applyDiscount(discount),
        }
        return check

    },
    applyDiscount(promocode) {
        return this.totalPrice() - this.totalPrice() * promocodes[promocode] / 100;
        // if (promocode === 'PROMO20') {
        //     return this.totalPrice() - this.totalPrice() * 20 / 100;
        // } else {
        //     return this.totalPrice();
        // }
    },

    getIndexByCode(code, productsIn) {
        return productsIn.findIndex((value) => value.code === code);
    }
}