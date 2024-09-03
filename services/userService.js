import User from "../models/userModel.js";
import { toModel, toDTO } from "../mappers/userMapper.js";

export const createUser = async (userData) => {
  try {
    const userToCreate = userMapper.toModel(userData);
    const user = await User.create(userToCreate);
    return userMapper.toDTO(user);
  } catch (error) {
    throw new Error("Error creating user");
  }
};
