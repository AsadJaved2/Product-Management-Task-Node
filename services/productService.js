import Product from "../models/productModel.js";
import { toModel, toDTO } from "../mappers/productMapper.js";
import Category from "../models/categoryModel.js";
import User from "../models/userModel.js";

const productService = {
  createProduct: async (productData) => {
    try {
      const productToCreate = toModel(productData);
      const product = await Product.create(productToCreate); // Create the product
      await Category.findByIdAndUpdate(
        { _id: product.category },
        { $push: { products: product._id } }
      );
      await User.findByIdAndUpdate(
        { _id: product.user },
        { $push: { products: product._id } }
      );
      return toDTO(product);
    } catch (error) {
      throw new Error("Error creating product");
    }
  },

  updateProduct: async (id, updateData) => {
    try {
      const productToUpdate = toModel(updateData);
      const product = await Product.findByIdAndUpdate(id, productToUpdate, {
        new: true,
      });
      if (!product) throw new Error("Product not found");
      return toDTO(product);
    } catch (error) {
      throw new Error("Error updating product");
    }
  },

  deleteProduct: async (id) => {
    try {
      const product = await Product.findByIdAndDelete(id);
      console.log("delete", product);
      await Category.findByIdAndUpdate(
        { _id: product.category },
        { $pull: { products: product._id } }
      );
      await User.findByIdAndUpdate(
        { _id: product.user },
        { $pull: { products: product._id } }
      );
      if (!product) throw new Error("Product not found");
      return toDTO(product);
    } catch (error) {
      throw new Error("Error deleting product");
    }
  },

  getProductById: async (id) => {
    try {
      const product = await Product.findById(id)
        .populate("category")
        .populate("user");
      if (!product) throw new Error("Product not found");
      return toDTO(product);
    } catch (error) {
      throw new Error("Error retrieving product");
    }
  },

  getAllProducts: async () => {
    try {
      const products = await Product.find()
        .populate("category")
        .populate("user");
      return products.map(toDTO);
    } catch (error) {
      throw new Error("Error retrieving products");
    }
  },

  getProductsByUserId: async (userId) => {
    try {
      const products = await Product.find({ user: userId }).populate(
        "category"
      );
      if (!products) throw new Error("No products found for this user");
      return products.map(toDTO);
    } catch (error) {
      throw new Error("Error retrieving products by user");
    }
  },

  getProductsByCategoryId: async (categoryId) => {
    try {
      const products = await Product.find({ category: categoryId }).populate(
        "user"
      );
      if (!products) throw new Error("No products found for this category");
      return products.map(toDTO);
    } catch (error) {
      throw new Error("Error retrieving products by category");
    }
  },
};

export default productService;
