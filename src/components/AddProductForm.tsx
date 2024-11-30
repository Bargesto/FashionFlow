import { useState } from 'react';
import { Product } from '../types';
import { CLOTHING_SIZES, SHOE_SIZES } from '../data/products';
import toast from 'react-hot-toast';

interface AddProductFormProps {
  onComplete: () => void;
}

export default function AddProductForm({ onComplete }: AddProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    type: 'clothing',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const sizes = formData.type === 'clothing' ? CLOTHING_SIZES : SHOE_SIZES;
    const stock = Object.fromEntries(sizes.map(size => [size, 0]));

    const newProduct: Product = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image,
      type: formData.type as 'clothing' | 'shoes',
      stock,
    };

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    toast.success('Ürün başarıyla eklendi');
    onComplete();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ürün Adı
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Fiyat (TL)
        </label>
        <input
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Görsel URL
        </label>
        <input
          type="url"
          required
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ürün Tipi
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="clothing">Giyim</option>
          <option value="shoes">Ayakkabı</option>
        </select>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onComplete}
          className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          İptal
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Ürün Ekle
        </button>
      </div>
    </form>
  );
}