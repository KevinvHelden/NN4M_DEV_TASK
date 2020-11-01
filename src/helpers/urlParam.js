// Gets a single parameter form the URL
const getSingle = (param) => {
  // Put the query string part of the Url in a variable
  const queryString = window.location.search;
  // Use the query string to get the param query and return the result
  return new URLSearchParams(queryString).get(param);;
};

module.exports = { getSingle };
