<p align="center">

![Java](https://img.shields.io/badge/Java-21-red?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)

</p>

<h1 align="center">🛒 E-Commerce Web Application</h1>

<p align="center">
A responsive full-stack E-Commerce web application developed using <b>Java Spring Boot</b>, <b>ReactJS</b>, and <b>MySQL</b>. The application allows users to browse products, manage shopping cart items, switch between Light and Dark themes, and perform CRUD operations on products through REST APIs.
</p>

---

# 📖 Project Overview

The E-Commerce Web Application is a beginner-friendly full-stack project that demonstrates how a modern online shopping platform works. It follows a client-server architecture where the React frontend communicates with the Spring Boot backend using REST APIs.

The application provides product management, shopping cart functionality, and theme customization. All product information is stored in a MySQL database using Spring Data JPA.

> **Note:** This project focuses on product management and shopping cart functionality. User authentication, registration, payment gateway, and order management are intentionally excluded to keep the project simple and suitable for learning.

---

# ✨ Features

- 🛍️ View All Products
- ➕ Add New Products
- ✏️ Update Product Details
- ❌ Delete Products
- 🔍 Search Products
- 🛒 Add Products to Cart
- ➖ Remove Products from Cart
- 🔄 Update Product Quantity
- 💰 Automatic Cart Total Calculation
- 🌙 Light/Dark Theme Toggle
- 📱 Fully Responsive UI
- 🔗 REST API Integration
- 💾 MySQL Database

---

# 🛠️ Technology Stack

## Backend

- Java 21
- Spring Boot
- Spring MVC
- Spring Data JPA
- REST APIs
- Maven

## Frontend

- ReactJS
- HTML5
- CSS3
- Bootstrap
- Axios

## Database

- MySQL

## Tools

- IntelliJ IDEA
- VS Code
- MySQL Workbench
- Postman
- Git & GitHub

---

# ⚙️ How the Application Works

The application follows a simple workflow:

1. The user opens the application.
2. The Home page displays all available products.
3. Products are fetched from the Spring Boot backend through REST APIs.
4. Users can browse products and view product details.
5. Users can add products to the shopping cart.
6. The shopping cart automatically updates the quantity and total price.
7. Users can remove products from the cart whenever required.
8. Admin users (or the project owner) can add, edit, and delete products.
9. All changes are stored in the MySQL database.
10. Users can switch between Light Mode and Dark Mode without affecting application data.

---

# 🏗️ System Architecture

```
             ReactJS Frontend
                    │
                    │ REST API
                    ▼
        Spring Boot Backend
                    │
           Spring Data JPA
                    │
                    ▼
              MySQL Database
```

---

# 📂 Project Structure

```
ecommerce-web-application

│

├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   ├── config
│   └── application.properties
│

├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── assets
│   ├── App.jsx
│   └── main.jsx
│

└── README.md
```

---

# 🗄️ Database

Database Used:

**MySQL**

Example Product Fields

- Product ID
- Product Name
- Category
- Description
- Price
- Stock Quantity
- Product Image URL

---

# 🚀 Getting Started

Follow the steps below to run this project on your local machine.

## Prerequisites

Install the following software before running the project.

- Java 21
- Maven
- Node.js
- npm
- MySQL Server
- Git
- IntelliJ IDEA / Eclipse
- VS Code

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-web-application.git
```

Move into the project folder.

```bash
cd ecommerce-web-application
```

---

## Step 2: Create MySQL Database

Open MySQL and create a new database.

```sql
CREATE DATABASE ecommerce_db;
```

---

## Step 3: Configure Database

Open

```
backend/src/main/resources/application.properties
```

Update the database configuration.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

## Step 4: Run the Backend

Navigate to the backend folder.

```bash
cd backend
```

Start the Spring Boot application.

```bash
mvn spring-boot:run
```

The backend will run at

```
http://localhost:8080
```

---

## Step 5: Run the Frontend

Open another terminal.

Navigate to the frontend folder.

```bash
cd frontend
```

Install all dependencies.

```bash
npm install
```

Run the React application.

```bash
npm run dev
```

or

```bash
npm start
```

The frontend will run at

```
http://localhost:5173
```

or

```
http://localhost:3000
```

depending on your React configuration.

---

# 📌 Available Functionalities

### Product Management

- Add Product
- Update Product
- Delete Product
- View Product Details
- Search Products

### Shopping Cart

- Add to Cart
- Remove from Cart
- Increase Quantity
- Decrease Quantity
- Calculate Total Price

### User Interface

- Responsive Design
- Light Theme
- Dark Theme
- Bootstrap Components

---

# 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/products` | Get All Products |
| GET | `/products/{id}` | Get Product by ID |
| POST | `/products` | Add Product |
| PUT | `/products/{id}` | Update Product |
| DELETE | `/products/{id}` | Delete Product |

---

# 📸 Screenshots

Add screenshots of the following pages.

- Home Page
- Product Listing
- Add Product
- Edit Product
- Shopping Cart
- Dark Theme
- Light Theme

---

# 🎯 Learning Outcomes

This project helped in understanding:

- Spring Boot REST API Development
- CRUD Operations
- React Component-Based Architecture
- Axios API Integration
- MySQL Database Integration
- Spring Data JPA
- Bootstrap Responsive Design
- React State Management
- Shopping Cart Logic
- Theme Switching using React

---

# 🚀 Future Enhancements

- User Login
- User Registration
- JWT Authentication
- Wishlist
- Product Categories
- Product Filters
- Product Search
- Payment Gateway Integration
- Order Management
- Order History
- User Profile
- Product Reviews
- Image Upload
- Docker Deployment
- AWS Deployment

---

# 🤝 Contributing

Contributions are welcome.

If you would like to improve this project:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Srikanth S**

Java Full Stack Developer

⭐ If you found this project useful, consider giving it a star on GitHub.
