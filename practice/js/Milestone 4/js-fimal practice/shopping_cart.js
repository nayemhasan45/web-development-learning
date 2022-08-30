const products = [
    {name:'shirt',      price:1200, quantity:3  },
    {name:'shoe',       price:2200, quantity:5  },
    {name:'belt',       price:800, quantity:2  },
    {name:'pant',       price:1900, quantity:6  },
    {name:'watch',      price:2000, quantity:7  },
    {name:'sunglass',   price:900, quantity:8  },
    {name:'walet',      price:1200, quantity:2  },
]
function shopping_cart(price){
    let sum = 0;
    for(let i = 0; i<price.length; i++){
        const element = price[i];
        const totlaQuantity = element.price*element.quantity;
        sum = totlaQuantity + sum;
    }
    return sum;
}

const output = shopping_cart(products);
console.log(output);
