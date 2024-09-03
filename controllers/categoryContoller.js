import asyncHandler from "express-async-handler";
import { createCategory } from "../services/categoryService.js";

const categoryController = {
  createCategory: asyncHandler(async (req, res) => {
    const categoryData = req.body;
    const category = await createCategory(categoryData);
    res.status(201).json(category);
  }),
};

export default categoryController;
