import Category from '../models/categoryModel.js';
import { toModel, toDTO } from '../mappers/categoryMapper.js'; 

export const createCategory = async (categoryData) => {
    try {
        const categoryToCreate = toModel(categoryData); 
        const category = await Category.create(categoryToCreate); // Create the category
        return toDTO(category); 
    } catch (error) {
        throw new Error('Error creating category');
    }
};
