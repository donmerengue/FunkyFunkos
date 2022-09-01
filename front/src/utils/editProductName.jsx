export const editProductName = (productName) => {
  return productName.toLowerCase().replace(" ", "_");
};

export const replaceUnderscore = (productName) => {
  return productName.replace("_", " ");
};


