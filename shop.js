// declaring empty arrays
let productName = [];
let productPrice = [];
let productSize = [];
let productQuantity = [];

function validateCart(e) {
  let event = e.target.parentElement;
  let size = event.getElementsByClassName("size")[0].value;
  let quantityVal = event.getElementsByClassName("cart-quantity")[0].value;
  // checks for empty fields and alerts if there is any
  if (size == "") {
    alert("Please enter a size");
    return false;
  }
  if (quantityVal == "") {
    alert("Please enter a quantity");
  } else {
    // adds elements to the array
    productName.push(event.getElementsByClassName("product-name")[0].innerText);
    productPrice.push(
      event.getElementsByClassName("product-price")[0].dataset.value
    ); //returns data value attribute
    productSize.push(size);
    productQuantity.push(quantityVal);

    let cart = "";
    
    for (let i = 0; i < productName.length; i++) {
      cart = `${cart}<br/>Product: ${productName[i]}`;
      cart = `${cart}<br/>Price: $${productPrice[i]}`;
      cart = `${cart}<br/>Size: ${productSize[i]}`;
      cart = `${cart}<br/>Quantity: ${productQuantity[i]}</br>`;
    }
    document.getElementById("invoice-box").innerHTML = cart;

    //calculating total price
    let totalPrice = 0;
    for (let i = 0; i < productName.length; i++) {
      let y = productPrice[i] * productQuantity[i];
      totalPrice += y;
      document.getElementById("invoiceTotal").innerHTML =
        "Total $" + totalPrice;
    }
  }
}

// function to scroll where the shopping cart is located
function openCart() {
  document.getElementById("shopping-cart").scrollIntoView();
}

//validation check for products added to cart
function checkout() {
  if (productName.length == 0) {
    alert("Please add a product to cart");
  } else {
    //direct to information page if products are added to cart
    location.href = "information.html";
  }
}
