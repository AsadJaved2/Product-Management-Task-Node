// Function to map the incoming data (DTO) to the Category model
export const toModel = (categoryDTO) => {
  return {
    name: categoryDTO.name,
    products: categoryDTO.products || [],
  };
};

// Function to map the Category model to a DTO for sending back to the client
export const toDTO = (category) => {
  return {
    id: category._id,
    name: category.name,
    products: category.products,
  };
};
