Mercora is a modern full-stack eCommerce web application built using the MERN stack. It provides a seamless shopping experience with secure authentication, role-based access control, dynamic product management, and integrated online payments.

Designed with scalability and real-world use cases in mind, Mercora simulates a production-grade online store with both user and admin functionalities.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login (JWT Authentication)
- Browse Products
- View Product Details
- Add to Cart
- Secure Checkout with PayPal
- Responsive UI for all devices

### 🛠️ Admin Features
- Role-Based Access Control (Admin/User)
- Add / Update / Delete Products
- Upload Product Images (Multer + Cloudinary)
- Manage Product Listings

### 💡 Core Functionalities
- State Management using Redux Toolkit
- Secure API handling with JWT
- Image storage via Cloudinary
- Payment Integration using PayPal
- Clean and responsive UI with Tailwind CSS

---

## 🧱 Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### Other Integrations
- JWT Authentication
- Multer (File Upload)
- Cloudinary (Image Storage)
- PayPal (Payment Gateway)

## 📁 Project Structure
Mercora/
│
├── client/
│ ├── public/
│ └── src/
│ ├── assets/
│ ├── components/
│ ├── config/
│ ├── lib/
│ ├── pages/
│ ├── store/
│ ├── App.jsx
│ └── main.jsx
│
├── server/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── server.js
│
└── README.md
## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Mayukh15/E-commerce-App.git
cd E-commerce-App

Run backend:

npm run dev
3️⃣ Setup Frontend
cd client
npm install
npm run dev

🔌 API Endpoints (Overview)
Auth
POST /api/auth/register
POST /api/auth/login
Products
GET /api/products
POST /api/products (Admin)
PUT /api/products/:id (Admin)
DELETE /api/products/:id (Admin)
Orders
POST /api/orders
GET /api/orders
