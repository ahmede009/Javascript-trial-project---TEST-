export const cart = [];

export function addToCart(button) {
  const productId = button.dataset.productId;

  let matchingItem = "";

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelectorDOM = document.querySelector(
    `.js-product-quantity-selector-${productId}`
  );

  let quantitySelector = Number(quantitySelectorDOM.value);

  if (matchingItem) {
    matchingItem.quantity += quantitySelector;
  } else {
    cart.push({
      productId: productId,
      quantity: quantitySelector,
    });
  }
}
