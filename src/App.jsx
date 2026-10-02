
import { useEffect, useState } from "react";

function App() {
  const API = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");

  const [id, setId] = useState(null);
  const [isAdd, setIsAdd] = useState(true);

  const getProducts = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      productName,
      price,
      category,
      brand,
      image
    };

    if (id) {
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then(() => {
        getProducts();
        clearForm();
      });

    } else {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then(() => {
        getProducts();
        clearForm();
      });
    }
  };

  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    }).then(() => {
      getProducts();
    });
  };

  const handleEdit = (product) => {
    setIsAdd(false);
    setId(product.id);
    setProductName(product.productName);
    setPrice(product.price);
    setCategory(product.category);
    setBrand(product.brand);
    setImage(product.image);
  };

  const clearForm = () => {
    setProductName("");
    setPrice("");
    setCategory("");
    setBrand("");
    setImage("");
    setId(null);
    setIsAdd(true);
  };

  return (
    <>
      {/* ADD PRODUCT SECTION */}

      <div className="container mt-4 mb-5">
        <div className="card shadow p-4">

          <h2 className="text-center mb-4">
            {isAdd ? "Add Product" : "Update Product"}
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />

            <input
              className="form-control mb-3"
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <button className="btn btn-primary">
              {isAdd ? "Add Product" : "Update Product"}
            </button>

          </form>

        </div>
      </div>


      {/* PRODUCTS SECTION */}

      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Products
        </h2>

        <div className="row">

          {products.map((product, index) => (

            <div
              className="col-md-4 mb-4"
              key={product.id}
            >

              <div className="card shadow h-100">

                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.productName}
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    padding: "15px"
                  }}
                />

                <div className="card-body">

                  <h4>
                    Product No. {index + 1}
                  </h4>

                  <p>
                    <b>Name:</b> {product.productName}
                  </p>

                  <p>
                    <b>Price:</b> ₹{product.price}
                  </p>

                  <p>
                    <b>Category:</b> {product.category}
                  </p>

                  <p>
                    <b>Brand:</b> {product.brand}
                  </p>

                  <div className="d-flex justify-content-between">

                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        handleDelete(product.id)
                      }
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        handleEdit(product)
                      }
                    >
                      Edit
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default App;
