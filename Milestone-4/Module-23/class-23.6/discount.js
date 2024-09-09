//Simple discount  Calculate

function productDiscount(quantity) {
  let regular = 100;
  let upTo100 = 90;
  let moreThan200 = 70;

  if (quantity <= 100) {
    return regular * quantity;
  } else if (quantity <= 200) {
    return quantity * upTo100;
  } else {
    return moreThan200 * quantity;
  }
}
console.log(productDiscount(50));
console.log(productDiscount(100));
console.log(productDiscount(101));
console.log(productDiscount(200));
console.log(productDiscount(201));
console.log(productDiscount(250));

//Multi layer Discount Price

/**
 * later because my time is short
 */
