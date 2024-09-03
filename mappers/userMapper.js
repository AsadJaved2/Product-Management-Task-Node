// Function to map the incoming data (DTO) to the User model
export const toModel = (userDTO) => {
  return {
    name: userDTO.name,
    email: userDTO.email,
    password: userDTO.password,
  };
};

// Function to map the User model to a DTO for sending back to the client
export const toDTO = (user) => {
  return {
    name: user.name,
    email: user.email,
  };
};
