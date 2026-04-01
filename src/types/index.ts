import { LucideIcon } from "lucide-react";

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  avatar: string;
  age: number;
  gender: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  company: string;
  jobTitle: string;
  website: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  readTime: number;
  createdAt: Date;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  stock: number;
  sku: string;
  image: string;
  tags: string[];
  unit: string;
  inStock: boolean;
}

export interface Joke {
  id: number;
  type: string;
  category: string;
  setup: string;
  punchline: string;
  rating: number;
  submittedBy: string;
}

export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
  likes: number;
  bookmarks: number;
}

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "heigh";
  dueDate: Date;
  createdAt: Date;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Country {
  id: number;
  name: string;
  code: string;
  capital: string;
  population: number;
  area: number;
  flag: string;
  region: string;
  subregion: string;
  currency: Currency;
  language: string;
  callingCode: string;
  timezone: string;
}

export interface ApiResponse<T> {
  success: boolean;
  total?: number;
  page?: number;
  limit?: number;
  data: T;
}

export interface ApiError {
  success: boolean;
  message: string;
}

export interface Api {
  id: number;
  title: string;
  description: string;
  endpoints: Endpoint[];
}

export interface Endpoint {
  method: string;
  path: string;
}
