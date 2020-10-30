// Fetches the list of products and sets these in the state
const products = async (setProducts) => {
  const productsUrl = "/v1/plp/en_gb/2506/products.json";
  const productsList = await fetch(productsUrl)
    .then((res) =>
      res.json().then((data) => {
        return data.Products;
      })
    )
    .catch((err) => console.log(err));
  setProducts(productsList);
};

// Fetches the list of products and sets the product with the specified Id in the state
const product = async (name, setProduct) => {
  const productsUrl = "/v1/plp/en_gb/2506/products.json";
  const productsList = await fetch(productsUrl)
    .then((res) =>
      res.json().then((data) => {
        return data.Products;
      })
    )
    .catch((err) => console.log(err));
  setProduct(productsList.find((product) => product.name === formatProductName(name)));
};

// Fetches the list of products and sets the product with the specified Id in the state
const filteredProducts = async (searchParam, setProduct) => {
  const productsUrl = "/v1/plp/en_gb/2506/products.json";
  const productsList = await fetch(productsUrl)
    .then((res) =>
      res.json().then((data) => {
        return data.Products;
      })
    )
    .catch((err) => console.log(err));
  const filteredList = productsList.filter((product) =>
    product.name.includes(searchParam)
  );
  setProduct(filteredList);
};

const formatProductName = (productName) => {
  const addSpaces = productName.replace(/-/g, ' ');
  return addSpaces;
};

module.exports = { products, product, filteredProducts };
