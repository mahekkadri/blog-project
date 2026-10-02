🛍️ Product Management System

A simple and responsive Product Management CRUD Application built
with React JS, Bootstrap, and JSON Server.

This project allows users to add, view, edit, and delete products using
a REST API.

🚀 Features

➕ Add new products

👀 View all products

✏️ Edit product details

🗑️ Delete products

🖼️ Add product image URL

💰 Display product price

🏷️ Display category and brand

📱 Responsive Bootstrap layout

🔄 Data stored using JSON Server REST API

🛠️ Technologies Used

React JS

JSX

Bootstrap

JavaScript

JSON Server

Vite

📂 Project Structure

product-project/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
└── README.md

⚙️ Installation & Setup

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_LINK

2. Open the project

cd product-project

3. Install dependencies

npm install

4. Start JSON Server

Open a separate terminal and run:

npx json-server db.json --port 3000

API endpoint:

http://localhost:3000/products

5. Start React

Open another terminal and run:

npm run dev

Then open the local URL shown by Vite in your browser.

📌 API

The application uses:

http://localhost:3000/products

The API supports:

GET -- Fetch products

POST -- Add product

PUT -- Update product

DELETE -- Delete product

🖥️ Main Functions

Add Product

Enter:

Product Name

Price

Category

Brand

Image URL

Edit Product

Click the Edit button to update an existing product.

Delete Product

Click the Delete button to remove a product.

📚 What I Learned

React useState

React useEffect

Fetch API

CRUD operations

REST API integration

JSON Server

Bootstrap components and layout

Handling forms in React

Adding, editing and deleting data

👩‍💻 Author

Mahek Kadri

Frontend Developer | React JS Learner


