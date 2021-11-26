let inputArr = [4, 6, 7, -10, -12, 13, 2, 5, 11, 8, 10];

let adjacentProducts = function (arr) {
  let maxProduct = arr[0] * arr[1];
  for (let i = 1; i < arr.length; i++) {
    product = arr[i] * arr[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return console.log(maxProduct);
};

adjacentProducts(inputArr);
