


function createProductCard(product) {
    //list of all the elements
    let card = document.createElement("div");
    const imageDiv = document.createElement("img")
    let productName = document.createElement("h3");
    let productPrice = document.createElement("p");
    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Add to Cart"
    let descriptionElm = document.createElement("h3")

    card.className = "card1";
    imageDiv.className = "imgBox";
    imageDiv.innerHTML = "IMAGE"
    imageDiv.src = product.image;
    card.appendChild(imageDiv)
    productName.innerText = product.title;
    card.appendChild(productName)
    productPrice.innerText = product.price;
    card.appendChild(productPrice)
    productPrice.className = "price"
    descriptionElm.innerText = product.description;
    card.appendChild(descriptionElm)
    descriptionElm.className = "descript"
    buttonEl.innerText = "Add to Card";
    buttonEl.id = "addToCartBtn";
    buttonEl.addEventListener("click", function () {
        addToCart(product)
    })
    card.append(buttonEl)


    return card;

}

let productContainer = document.getElementById("list")

for (let i = 0; i < products.length; i++) {
    let productCard = createProductCard(products[i]);
    productContainer.appendChild(productCard);

}

// let counter = 0;

// function addToCartFn() {

// const cartNum = document.getElementById("cartNumber");
// counter = counter+1; 
// cartNum.innerText = counter ;

// }



function addToCart(product) {
    let isProductinCart = false;
    if (cart.length > 0) {
        for (i = 0; i < cart.length; i++) {
            console.log(product.id, cart[i].id);
            if (product.id == cart[i].id) {
                cart[i].count = cart[i].count + 1;
                isProductinCart = true;
                break;
            } 
        }
        if (!isProductinCart) {
            product.count = 1;
            cart.push(product)
        }
    } else {
        product.count = 1
        cart.push(product);
    }

    renderCartListing()
    
}

function renderCartListing () {
    const cartBillElm = document.getElementById("cartBill");
    cartBillElm.innerHTML = "";
    for(i = 0; i < cart.length; i++){
        const cartDiv = document.createElement("div")
        cartDiv.innerHTML = `${cart[i].title} - ${cart[i].count}`
        cartBillElm.appendChild(cartDiv);
    }
    
}


function emptyCart() {

cart = [];
renderCartListing ();
}


