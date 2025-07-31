import Product from '../models/Product.js';

export const getAllProducts = async () => {
  return await Product.getAll();
};

export const getProductById = async (id) => {
  return await Product.getById(id);
};

export const createProduct = async (productData) => {
  return await Product.create(productData);
};

export const updateProduct = async (id, productData) => {
  return await Product.update(id, productData);
};

export const deleteProduct = async (id) => {
  return await Product.delete(id);
};