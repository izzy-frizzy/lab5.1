const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
let shoppingCart = [];
 

addProductButton.addEventListener("click", ()=> {
    let item = productNameInput.value;
    let price = Number(productPriceInput.value);
    let product = {
        item,price
    }
    console.log(price);
    console.log(typeof price)
if (item === "" || price === "") {
    alert("Please enter a product or price!");
    return;
  }
    let cartList = document.createElement("li");
    cartList.innerText = product

    shoppingCart.push(product);
    console.log(shoppingCart);
    updateTotalPrice(price)

    productNameInput.value = "";
    productPriceInput.value = "";
});
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
function render(){
    
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}