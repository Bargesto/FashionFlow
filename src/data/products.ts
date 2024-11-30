import { Product } from '../types';

export const CLOTHING_SIZES = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL', '5XL', '6XL'];
export const SHOE_SIZES = ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'];

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Basic T-Shirt',
    price: 299.99,
    image: '/basic-tshirt.jpg', // This should be replaced with actual image URL
    type: 'clothing',
    stock: {
      'S': 10,
      'M': 15,
      'L': 20,
      'XL': 15,
      'XXL': 10,
      'XXXL': 5,
      '4XL': 0,
      '5XL': 0,
      '6XL': 0
    }
  },
  {
    id: '2',
    name: 'Classic Sneakers',
    price: 899.99,
    image: '/sneakers.jpg', // This should be replaced with actual image URL
    type: 'shoes',
    stock: {
      '36': 5,
      '37': 8,
      '38': 10,
      '39': 12,
      '40': 15,
      '41': 15,
      '42': 12,
      '43': 10,
      '44': 8,
      '45': 5
    }
  }
];