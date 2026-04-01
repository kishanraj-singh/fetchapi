import { Api } from "@/types";

export const APIS: Api[] = [
  {
    id: 1,
    title: "Users API",
    description:
      "200 fake users with name, email, phone and other extra information.",
    endpoints: [
      { method: "GET", path: "/api/users?page=1&limit=10" },
      { method: "GET", path: "/api/users/1" },
      { method: "GET", path: "/api/users?city=Mumbai" },
      { method: "GET", path: "/api/users?gender=male" },
      { method: "GET", path: "/api/users?search=arjun" },
    ],
  },
  {
    id: 2,
    title: "Posts API",
    description:
      "200 blog posts - title, body, category, tags, likes, views. Filter by category or search by keyword.",
    endpoints: [
      { method: "GET", path: "/api/posts?page=1&limit=10" },
      { method: "GET", path: "/api/posts/1" },
      { method: "GET", path: "/api/posts?category=programming" },
      { method: "GET", path: "/api/posts?search=nextjs" },
    ],
  },
  {
    id: 3,
    title: "Product API",
    description:
      "200 e-commerce products - electronics, clothing, fitness etc. Filterby category, price and inStock.",
    endpoints: [
      { method: "GET", path: "/api/products?page=1&limit=10" },
      { method: "GET", path: "/api/products/1" },
      { method: "GET", path: "/api/products?category?electronics" },
      { method: "GET", path: "/api/products?minPrice=500&maxPrice=2000" },
      { method: "GET", path: "/api/products?inStock=true" },
    ],
  },
  {
    id: 4,
    title: "Jokes API",
    description:
      "200 jokes - programming, dad jokes and general categories. Fetch all or get a completely random one. ",
    endpoints: [
      { method: "GET", path: "/api/jokes?page=1&limit=10" },
      { method: "GET", path: "/api/jokes/random" },
      { method: "GET", path: "/api/jokes?type=programming" },
    ],
  },
  {
    id: 5,
    title: "Quotes API",
    description:
      "200 quotes from programming, motivation, learning and productivity. Get all or fetch a random.",
    endpoints: [
      { method: "GET", path: "/api/quotes?page=1&limit=10" },
      { method: "GET", path: "/api/quotes/random" },
      { method: "GET", path: "/api/quotes?category=programming" },
    ],
  },
  {
    id: 6,
    title: "Todos API",
    description: "200 todos with userId, title, completed status and priority.",
    endpoints: [
      { method: "GET", path: "/api/todos?page=1&limit=10" },
      { method: "GET", path: "/api/todos?userId=1" },
      { method: "GET", path: "/api/todos?completed=false" },
      { method: "GET", path: "/api/todos?priority=high" },
    ],
  },
  {
    id: 7,
    title: "Countries API",
    description:
      "64 real countries with flag, capital, population, currecncy, calling code and region. Filter by region or search by name.",
    endpoints: [
      { method: "GET", path: "/api/countries" },
      { method: "GET", path: "/api/countries/IN" },
      { method: "GET", path: "/api/countries?region=Asia" },
      { method: "GET", path: "/api/countries?search=india" },
    ],
  },
];
