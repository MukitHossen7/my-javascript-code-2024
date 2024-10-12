const getProductValue = () => {
  const productName = document.getElementById("product-name");
  const productQuantity = document.getElementById("product-quantity");
  const productNameValue = productName.value;
  const productQuantityValue = productQuantity.value;
  productName.value = "";
  productQuantity.value = "";
  displayProductValue(productNameValue, productQuantityValue);
  setLocalStorageValue(productNameValue, productQuantityValue);
};

const displayProductValue = (product, quantity) => {
  const productList = document.getElementById("productList");
  const li = document.createElement("li");
  li.innerHTML = `${product} : ${quantity}`;
  productList.append(li);
};

const getLocalStorageValue = () => {
  let cart = {};
  const cartValue = localStorage.getItem("cart");
  if (cartValue) {
    cart = JSON.parse(cartValue);
  }
  return cart;
};

const setLocalStorageValue = (product, quantity) => {
  const cart = getLocalStorageValue();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const displayLocalStorageValue = () => {
  const cartSave = getLocalStorageValue();
  for (const product in cartSave) {
    const quantity = cartSave[product];
    displayProductValue(product, quantity);
  }
};
displayLocalStorageValue();
