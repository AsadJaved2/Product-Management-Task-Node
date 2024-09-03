import express from 'express';
import authRoutes from '../routes/userRoutes.js';
import productRoutes from '../routes/productRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import categoryRoutes from '../routes/categoryRoutes.js';

const router = express.Router();

// all routes
router.use('/category', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

export default router;



