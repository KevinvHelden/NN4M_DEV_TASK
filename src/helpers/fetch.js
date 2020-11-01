// Fetches the list of products and sets these in the state
const products = async (setProducts) => {
  // Uses proxy and this path to get the product list
  const productsUrl = "/v1/plp/en_gb/2506/products.json";
  const productsList = await fetch(productsUrl)
    .then((res) =>
      res.json().then((data) => {
        return data.Products;
      })
    )
    .catch((err) => console.log(err));
  // Uses given set state function to store products result
  setProducts(productsList);
};

// Fetches the list of products and sets the product with the specified Id in the state
const product = async (identifier, setProduct) => {
  // Uses proxy and this path to get the product list
  const productsUrl = "/v1/plp/en_gb/2506/products.json";
  const productsList = await fetch(productsUrl)
    .then((res) =>
      res.json().then((data) => {
        return data.Products;
      })
    )
    .catch((err) => console.log(err));
  // Uses given set state function to store products result
  // Uses product prodid as identifier for finding the right product
  setProduct(productsList.find((product) => product.prodid === identifier));
};

// Fetches the list of products and sets the product with the specified Id in the state
const filteredProducts = async (searchParam, setProduct) => {
  // Uses proxy and this path to get the product list
  const productsUrl = "/v1/plp/en_gb/2506/products.json";
  const productsList = await fetch(productsUrl)
    .then((res) =>
      res.json().then((data) => {
        return data.Products;
      })
    )
    .catch((err) => console.log(err));
  // Uses filter to find all product names that include the searchParam
  const filteredList = productsList.filter((product) =>
    // Uses toLowerCase because safari on iPhone makes upper- and lower case distinctions
    product.name.toLowerCase().includes(searchParam.toLowerCase())
  );
  // Sets the list of all products that have the searchParam value in its name in the state
  setProduct(filteredList);
};

module.exports = { products, product, filteredProducts };
