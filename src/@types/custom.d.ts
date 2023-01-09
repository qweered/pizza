declare module '*.scss';

export interface ISortByItem {
  name: string;
  key: string;
  order: 'desc' | 'asc';
}

export interface IProductItem {
  _id: number;
  image: string;
  title: string;
  description: string;
  category: number;
  size: string[];
  dough: string[];
  rating: number;
  price: number;
  date: number;
}

export interface ICartItem {
  _id: number;
  image: string;
  title: string;
  size: string;
  dough: string;
  price: number;
  count: number;
}
