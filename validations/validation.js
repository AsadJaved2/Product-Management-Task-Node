import { check } from "express-validator";

const validation = {
  validateProduct: [
    check("name")
      .isString()
      .withMessage("Name must be a string")
      .notEmpty()
      .withMessage("Product name is required"),
    check("description")
      .notEmpty()
      .withMessage("Product description is required"),
    check("price").isNumeric().withMessage("Price must be a number"),
    check("category")
      .isMongoId()
      .withMessage("Category must be a valid MongoDB ID"),
  ],

  validateSignUp: [
    check("name").notEmpty().withMessage("User name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],

  validateUser: [
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],

  validateCategory: [
    check("name").notEmpty().withMessage("Category name is required"),
  ],
};

export default validation;
