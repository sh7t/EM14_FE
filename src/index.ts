import promptSync from 'prompt-sync';
import products from './products.json';

const prompt = promptSync();

type Product = {
    id: number,
    name: string,
    description: string,
    category: string,
    price: number,
    quantity: number,
    discount: number,
    reviewCount: number;
};

const productList: Product[] = products;

// 1.
const names = productList.map( (product: Product) => {
    return {
        name: product.name,
    }
});

// 2.
type twoFieldsObject = {
    name: string,
    price: number,
};

const twoFieldsObjects: twoFieldsObject[] = productList.map((product: Product): twoFieldsObject => {
    return  {
        name: product.name,
        price: product.price,
    }
});

// 3.
const moreThanTwenty: Product[] = productList.filter(product => product.quantity > 20);

// 4.
const moreExpensiveThanHunid: Product[] = productList.filter(product => product.price > 100);

// 5.
const electronics: Product[] = productList.filter(product => product.category === "Electronics");

// 6.
const moreExpensiveThanFiftyWithDiscount: Product[] = productList.filter(product => product.price * (1 - product.discount / 100) > 50);

// 7.
const shopProductsCost: number = productList.reduce((accumulator, product): number => {
    return accumulator + product.price;
}, 0);

// 8.
const averageIntegerCost: number = Math.round(shopProductsCost / productList.length);

// 9.
let expensive: Product = {
    id: 0,
    name: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
    discount: 0,
    reviewCount: 0
};
productList.forEach((product): void => {
    if (product.price > expensive.price)
        expensive = product;
});

let cheap: Product = expensive;
productList.forEach((product): void => {
    if (product.price < cheap.price)
        cheap = product;
});

// 10.
const shopProductsPrice: number = productList.reduce((accumulator, product): number => {
    return accumulator + product.price * (1 - product.discount / 100);
}, 0);

// 11.
productList.forEach((product): void => {
    if (product.quantity === 0) {
        console.log("Found a product that not in stock: " + product.name);
        return;
    }
});

// 12.
const shopReviews: number = productList.reduce((accumulator, product): number => {
    return accumulator + product.reviewCount;
}, 0);

// 13.
let uniqueCategories: string[] = [];
productList.forEach((product): void => {
    if (uniqueCategories.includes(product.category)) {
        uniqueCategories.splice(uniqueCategories.indexOf(product.category), 1);
    } else {
        uniqueCategories.push(product.category);
    }
})

// 14.
let longestDescription: Product = {
    id: 0,
    name: "",
    description: "",
    category: "",
    price: 0,
    quantity: 0,
    discount: 0,
    reviewCount: 0
};
productList.forEach((product): void => {
    if (product.description.trim().length > longestDescription.description.trim().length)
        longestDescription = product;
});
console.log(`Product with the longest description is \"${longestDescription.name}\":\nDescription: "${longestDescription.description}".` +
    `\nDescription length is ${longestDescription.description.trim().length} characters!`);

// 15.
productList.push({
    id: productList.length + 1,
    name: "Oculus Meta Quest 3S",
    description: "An innovative mixed reality headset",
    category: "Electronics",
    price: 14499,
    quantity: 130,
    discount: 15,
    reviewCount: 13
});









// -
function Func(str: string): void {
    return;
}

// ----------------------------------------

try {

} catch (Error) {
    console.error("Error occurred: " + Error.message);
}

