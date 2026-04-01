# FetchAPI 🚀

> **Free REST APIs for testing and learning — no auth, no signup, just fetch and build.**

---

## What is FetchAPI?

FetchAPI is an open-source project that provides **free fake REST APIs** for developers who are learning or building projects. Instead of setting up a backend just to get some test data, you can directly fetch from FetchAPI and start building your UI.

Inspired by [JSONPlaceholder](https://jsonplaceholder.typicode.com) and [FakeStoreAPI](https://fakestoreapi.com) — but with more data, more filters, and a better developer experience.

---

## Available APIs

| API          | Endpoint         | Records | Description                                      |
| ------------ | ---------------- | ------- | ------------------------------------------------ |
| 👤 Users     | `/api/users`     | 200     | Fake user profiles with name, email, city, job   |
| 🛒 Products  | `/api/products`  | 200     | E-commerce products across 10 categories         |
| 📝 Posts     | `/api/posts`     | 200     | Developer blog posts with tags and likes         |
| ✅ Todos     | `/api/todos`     | 200     | Todo items with priority and due dates           |
| 😂 Jokes     | `/api/jokes`     | 200     | Programming, dad and general jokes               |
| 💬 Quotes    | `/api/quotes`    | 200     | Motivational and programming quotes              |
| 🌍 Countries | `/api/countries` | 64      | Real countries with flag, currency, calling code |

---

## Quick Start

No installation needed. Just call the API from anywhere:

```js
// Fetch all users
fetch("https://fetchapi.online/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

```js
// Fetch a random joke
fetch("https://fetchapi.online/api/jokes/random")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

```js
// Filter products by category
fetch("https://fetchapi.online/api/products?category=electronics&limit=5")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## API Reference

### 👤 Users

```
GET /api/users                     All users (paginated)
GET /api/users/:id                 Single user by ID
GET /api/users?page=1&limit=10     Pagination
GET /api/users?gender=female       Filter by gender
GET /api/users?city=Mumbai         Filter by city
GET /api/users?search=arjun        Search by name or email
```

**Response:**

```json
{
  "success": true,
  "total": 200,
  "page": 1,
  "limit": 10,
  "totalPages": 20,
  "data": [
    {
      "id": 1,
      "name": "Arjun Sharma",
      "email": "arjun@gmail.com",
      "username": "arjun_sharma1",
      "phone": "+91-9876543210",
      "avatar": "https://i.pravatar.cc/150?img=1",
      "age": 28,
      "gender": "male",
      "city": "Mumbai",
      "state": "Maharashtra",
      "company": "TCS",
      "jobTitle": "Software Engineer"
    }
  ]
}
```

---

### 🛒 Products

```
GET /api/products                          All products
GET /api/products/:id                      Single product
GET /api/products?category=electronics     Filter by category
GET /api/products?minPrice=500&maxPrice=2000  Filter by price
GET /api/products?inStock=true             Only available products
GET /api/products?search=headphones        Search by name
```

**Available categories:** `electronics` `clothing` `footwear` `furniture` `kitchen` `fitness` `stationery` `books` `beauty` `home`

---

### 📝 Posts

```
GET /api/posts                       All posts
GET /api/posts/:id                   Single post
GET /api/posts?category=frontend     Filter by category
GET /api/posts?search=nextjs         Search in title and body
```

**Available categories:** `technology` `programming` `frontend` `backend` `devops` `career` `tutorial` `database` `security` `tools`

---

### ✅ Todos

```
GET /api/todos                        All todos
GET /api/todos?userId=1               Filter by user
GET /api/todos?completed=false        Pending todos only
GET /api/todos?priority=high          Filter by priority
```

**Priority values:** `low` `medium` `high`

---

### 😂 Jokes

```
GET /api/jokes                        All jokes
GET /api/jokes/random                 One random joke
GET /api/jokes?type=programming       Filter by type
```

**Type values:** `programming` `dad` `general`

---

### 💬 Quotes

```
GET /api/quotes                           All quotes
GET /api/quotes/random                    One random quote
GET /api/quotes?category=motivation       Filter by category
```

**Category values:** `programming` `motivation` `learning` `productivity` `technology`

---

### 🌍 Countries

```
GET /api/countries                    All countries
GET /api/countries/:code              Single country by code (e.g. IN, US, JP)
GET /api/countries?region=Asia        Filter by region
GET /api/countries?search=india       Search by name
```

---

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) with App Router
- **Language** — [TypeScript](https://typescriptlang.org)
- **Styling** — [Tailwind CSS](https://tailwindcss.com)
- **Data** — Static JSON files (no database)
- **Deployment** — [Vercel](https://vercel.com)

---

## Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/fetchapi.git
cd fetchapi

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

That's it — no `.env` file needed, no database setup, nothing.

---

## Contributing

Contributions are welcome! If you want to add more APIs, fix bugs or improve the UI:

1. Fork the repo
2. Create a new branch — `git checkout -b feature/new-api`
3. Make your changes
4. Commit — `git commit -m "feat: add new api"`
5. Push — `git push origin feature/new-api`
6. Open a Pull Request

---

## License

MIT License — free to use in personal and commercial projects.

---

<p align="center">Made by Kishan Raj Singh</p>
