import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';
import productController from '../controllers/productController.js';
import validation from '../validations/validation.js'; // Import validation rules
import { handleValidationErrors } from '../middlewares/validationResult.js'; // Import error handling middleware

const router = express.Router();

router.post(
  '/createProduct',
  protect,
  upload.array('images', 5),
  validation.validateProduct, // Apply validation rules
  handleValidationErrors, // Handle validation errors
  productController.createProduct
);

router.put(
  '/updateProduct/:id',
  protect,
  upload.array('images', 5),
  validation.validateProduct, // Optionally apply validation rules for update
  handleValidationErrors, // Handle validation errors
  productController.updateProduct
);

router.delete('/deleteProduct/:id', protect, productController.deleteProduct);
router.get('/user/:id', protect, productController.getProductsByUserId);
router.get('/category/:id', protect, productController.getProductsByCategoryId);
router.get('/:id', protect, productController.getProductById);
router.get('/', protect, productController.getAllProducts);

export default router;
