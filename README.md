# 🛒 SmartCart AI

An AI-powered e-commerce platform built with the MERN Stack, Next.js, TypeScript, and Google Gemini AI. Users can browse products, manage their own products, and get AI-powered shopping recommendations.

## 🌐 Live Demo

### Client

https://smartcart-ai-client.vercel.app

### Server

https://smartcart-ai-server.vercel.app

---

# 🚀 Features

- JWT Authentication
- Google Authentication (Firebase)
- Product CRUD
- Dashboard
- Protected Routes
- Product Search
- Category Filter
- Price Filter
- Sort by Price
- Sort by Rating
- Pagination
- Skeleton Loading
- Featured Products
- Related Products
- AI Shopping Assistant (Google Gemini)
- Dark / Light Mode
- Responsive Design

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- React Hook Form
- React Hot Toast
- Firebase Authentication
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- TypeScript
- JWT Authentication
- Bcrypt
- Cookie Parser
- CORS
- Dotenv

## AI

- Google Gemini API

# 📂 Folder Structure

# ⚙ Environment Variables

## Client (.env.local)

NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_NAME=
NEXT_PUBLIC_APP_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

## Server (.env)

PORT=

NODE_ENV=

MONGODB_URI=

JWT_SECRET=

JWT_EXPIRES_IN=

GEMINI_API_KEY=

CLIENT_URL=

---

## Client

cd smartcart-ai-client

npm install

npm run dev

---

## Server

cd smartcart-ai-server

npm install

npm run dev

---

# API Routes

## Authentication

POST /api/auth/register

POST /api/auth/login

POST /api/auth/google

POST /api/auth/logout

GET /api/auth/me

PUT /api/auth/profile

## Products

GET /api/products

GET /api/products/featured

GET /api/products/:id

GET /api/products/:id/related

GET /api/products/my-products

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id

## AI

POST /api/ai/chat

# Future Improvements

- Wishlist
- Shopping Cart
- Order Management
- Payment Gateway
- Product Reviews
- Admin Dashboard
- Email Notifications
