import express from 'express';
import categoryController from '../controllers/categoryContoller.js'; 
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/createCategory', protect, categoryController.createCategory); // Use the correct method from the controller

export default router;
