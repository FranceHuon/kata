function getPrice(books) {
  const total = books.length;
  
  const set = new Set(books);
  const different = set.size;

  const discount = computeDiscount(different);

  const price = (total - different) * 8 + different * (1 - discount) * 8;

  return price;
}

function computeDiscount(different) {
  let discount = 0;
  if (different === 2) {
    discount = 0.05;
  } else if (different === 3) {
    discount = 0.1;
  } else if (different === 4) {
    discount = 0.2;
  } else if (different === 5) {
    discount = 0.25;
  }
  return discount;
}


console.log("discount: " + computeDiscount(4));

console.log(getPrice([1]));
console.log(getPrice([1, 3]));
console.log(getPrice([1, 3, 4, 4]));