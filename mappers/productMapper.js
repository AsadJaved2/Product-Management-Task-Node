// Function to map the incoming data (DTO) to the Product model
export const toModel = (productDTO) => {
  return {
    name: productDTO.name,
    description: productDTO.description,
    price: productDTO.price,
    category: productDTO.category,
    images: productDTO.images,
    user: productDTO.user,
  };
};

// Function to map the Product model to a DTO for sending back to the client
export const toDTO = (product) => {
  return {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    imageUrl: product.imageUrl,
  };
};
