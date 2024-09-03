import asyncHandler from "express-async-handler";
import productService from "../services/productService.js"; // Fixed import name

const productController = {
  createProduct: asyncHandler(async (req, res) => {
    const productData = {
      ...req.body,
      images: req.files.map((file) => file.path),
      user: req.user._id,
    };
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  }),

  updateProduct: asyncHandler(async (req, res) => {
    const updateData = {
      ...req.body,
      images: req.files ? req.files.map((file) => file.path) : undefined,
    };
    const product = await productService.updateProduct(
      req.params.id,
      updateData
    );
    res.json(product);
  }),

  deleteProduct: asyncHandler(async (req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    res.json({ message: "Product removed", product });
  }),

  getProductById: asyncHandler(async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  }),

  getAllProducts: asyncHandler(async (req, res) => {
    const products = await productService.getAllProducts();
    res.json(products);
  }),

  getProductsByUserId: asyncHandler(async (req, res) => {
    const products = await productService.getProductsByUserId(
      req.params.userId
    );
    res.json(products);
  }),

  getProductsByCategoryId: asyncHandler(async (req, res) => {
    const products = await productService.getProductsByCategoryId(
      req.params.id
    );
    res.json(products);
  }),
};

export default productController;
