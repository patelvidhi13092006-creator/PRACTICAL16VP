import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !category ||
      price === "" ||
      quantity === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (Number(price) <= 0 || Number(quantity) < 0) {
      alert("Please enter valid price and quantity!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      category,
      quantity: Number(quantity),
    };

    onAddProduct(newProduct);

    setName("");
    setPrice("");
    setCategory("");
    setQuantity("");

    alert("Product added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Price (₹)</label>
        <input
          type="number"
          placeholder="Enter price"
          min="0.01"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Furniture">Furniture</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter quantity"
          min="0"
          step="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="add-button">
        + Add Product
      </button>
    </form>
  );
}

export default ProductForm;