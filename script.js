const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;
let shoppingCart = [];

addProductButton.addEventListener("click", () => {
  let item = productNameInput.value;
  let price = Number(productPriceInput.value);
  let product = {
    item,
    price,
  };

  if (item === "" || price === "") {
    alert("Please enter a product or price!");
    return;
  }
  shoppingCart.push(product);
  updateTotalPrice(price);
  showCart();

  productNameInput.value = "";
  productPriceInput.value = "";
});

cart.addEventListener("click", (event) => {
  if (event.target.innerText.includes("remove")) {
    let item = event.target.closest("li");
    let price = parseFloat(item.dataset.price);
    let index = parseFloat(item.dataset.index);

    shoppingCart.splice(index, 1);
    updateTotalPrice(-price);
    item.remove();
    showCart();
  }
});
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to show cart
function showCart() {
  cart.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    let cartItem = document.createElement("li");

    cartItem.innerText = `item: ${shoppingCart[i].item}, Price: ${shoppingCart[i].price} `;

    //adds index to the li
    cartItem.dataset.index = i;
    //added price value to the li
    cartItem.dataset.price = shoppingCart[i].price;
    //remove button on li
    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerText = "remove";
    cartItem.append(deleteButton);

    cart.appendChild(cartItem);
  }
}
