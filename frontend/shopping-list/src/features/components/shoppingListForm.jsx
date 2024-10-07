import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "/src/redux/slices/shoppinglistSlice"; 

function ShoppingListForm({ selectedItem, setSelectedItem }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', quantity: '', notes: '', categories: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    "Groceries",
    "Household Items",
    "Electronics",
    "Clothing",
  ];

  useEffect(() => {
    if (selectedItem) {
      setForm(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!form.name || !form.quantity || !form.categories) {
      setError("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      if (selectedItem) {
        // Update item with the existing ID
        await dispatch(updateItem({ ...form, id: selectedItem.id }));
      } else {
        // Add new item with a unique ID
        await dispatch(addItem({ ...form, id: Date.now() }));
      }
      // Clear the form
      setForm({ name: '', quantity: '', notes: '', categories: '' });
      setSelectedItem(null);
    } catch (error) {
      setError("There was an error while saving the item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Item Name"
        required
        className="border rounded-lg p-2 mr-2 w-full"
        aria-label="Item Name"
      />
      <input
        type="number"
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
        placeholder="number of items"
        required
        className="border rounded-lg p-2 mr-2 w-full"
        aria-label="Quantity"
      />
      <input
        type="text"
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes (optional)"
        className="border rounded-lg p-2 mr-2 w-full"
        aria-label="Notes"
      />
      <select
        name="categories"
        value={form.categories}
        onChange={handleChange}
        className="border rounded-lg p-2 mr-2 w-full"
        required
        aria-label="Categories"
      >
        <option value="">Select a Category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button
        type="submit"
        className={`bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-200 hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Submitting...' : (selectedItem ? 'Update Item' : 'Add Item')}
      </button>
    </form>
  );
}

export default ShoppingListForm;
