// Write your code here
// Array of products
let products = ['Laptop', 'Phone', 'Headphones', 'Monitor'];

// Show the first product
function logFirstProduct(){
  console.log(products[0]);
}

//Add new product
function addProduct(product){
  products.push(product);

}

//update a product name
function updateProductName(index, newName){
  products[index] = newName;
}
//Remove the last product
function removeLastProduct(){
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
