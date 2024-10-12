const getLocalStorageValue = () => {
  let cartContainer = {};
  const cart = localStorage.getItem("cart");
  if (cart) {
    cartContainer = JSON.parse(cart);
  }
  return cartContainer;
};

const setLocalStorageValue = (product, quantity) => {
  const cart = getLocalStorageValue();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  // console.log(cartStringify);
  localStorage.setItem("cart", cartStringify);
};

const displayLocalStorageValue = () => {
  const saveCart = getLocalStorageValue();
  for (const product in saveCart) {
    const quantity = saveCart[product];
    displayProductValue(product, quantity);
  }
};
displayLocalStorageValue();
