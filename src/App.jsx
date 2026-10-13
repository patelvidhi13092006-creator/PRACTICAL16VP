import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Product Management System</h1>
        <p>Create and manage your products</p>
      </header>

      <main className="container">
        <section className="card">
          <h2>Create New Product</h2>
          <p className="description">
            Enter product details in the form below.
          </p>

          <ProductForm onAddProduct={handleAddProduct} />
        </section>

        <section className="card">
          <div className="list-heading">
            <div>
              <h2>Product List</h2>
              <p className="description">
                View all your added products.
              </p>
            </div>

            <span className="count">
              Total Products: {products.length}
            </span>
          </div>

          <ProductList products={products} />
        </section>
      </main>

      <footer>
        <p>Product Management System | React Practical</p>
      </footer>
    </div>
  );
}

export default App;