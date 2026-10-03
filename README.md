# 🛍️ Product CRUD App

A simple **Product CRUD Application** built using **React JS, Bootstrap, and JSON Server**.

This project allows users to **Add, Display, Edit, and Delete products** using a local JSON Server API.

## 🚀 Technologies Used

* React JS
* JavaScript
* JSX
* Bootstrap
* JSON Server
* HTML

## ✨ Features

* ➕ Add new products
* 📋 Display all products
* ✏️ Edit existing products
* 🗑️ Delete products
* 🖼️ Add product image using Image URL
* 💰 Display product price
* 🏷️ Display category and brand
* 📱 Responsive Bootstrap cards
* 🔄 Data stored using JSON Server REST API

## 📂 Project Structure

```text
product-crud/
│
├── src/
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
```

## 🔧 Installation

First, install the required packages:

```bash
npm install
```

Install Bootstrap:

```bash
npm install bootstrap
```

Install JSON Server:

```bash
npm install json-server
```

## ▶️ Run the Project

### 1. Start JSON Server

Open a terminal and run:

```bash
npx json-server --watch db.json --port 3000
```

The API will run at:

```text
http://localhost:3000/products
```

### 2. Start React App

Open another terminal and run:

```bash
npm run dev
```

The React application will open on the Vite development URL shown in the terminal.

## 🔗 API

The application uses the following API:

```text
http://localhost:3000/products
```

The API supports:

* `GET` – Display products
* `POST` – Add product
* `PUT` – Update product
* `DELETE` – Delete product

## 📝 Product Fields

Each product contains:

```text
id
productName
price
category
brand
image
```

## 🎥 Video Demo

my project demonstration video link :
("https://drive.google.com/drive/folders/1fGanV5eD7ZqimOjLP_5EDqu9Y3E_U2Py?usp=sharing")

## 💡 How It Works

The React application uses `useState` to manage product and form data and `useEffect` to fetch products when the application loads.

The application communicates with JSON Server using the `fetch()` method.

When a product is added, the data is sent using `POST`.

When a product is edited, the updated data is sent using `PUT`.

When a product is deleted, the application sends a `DELETE` request.

After every operation, the product list is fetched again so that the latest data is displayed.

## 👩‍💻 Author

**Mahek Kadri**

Frontend Developer | BCA Student

## 📌 Project Purpose

This project was created to practice:

* React Hooks
* CRUD Operations
* REST API
* JSON Server
* Fetch API
* Bootstrap
* React Form Handling
* State Management

```

