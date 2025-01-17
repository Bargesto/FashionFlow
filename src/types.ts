export interface Product {
  id: string;
  name: string;
  image: string;
  type: 'clothing' | 'shoes';
  stock: {
    [key: string]: number;
  };
}

export interface Order {
  id: string;
  productId: string;
  size: string;
  instagramUsername: string;
  timestamp: number;
}