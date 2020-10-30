// Gets a single parameter form the URL
const getSingle = (param) => {
  const queryString = window.location.search;
  return new URLSearchParams(queryString).get(param);;
};

module.exports = { getSingle };
