import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "/src/redux/slices/shoppinglistSlice";

const CATEGORIES = [
  'Fruits',
  'Vegetables',
  'Dairy',
  'Meat',
  'Grains',
  'Snacks',
  'Beverages',
  'Household',
];

function ShoppingListForm({ selectedItem, setSelectedItem, listId }) {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [form, setForm] = useState({ name: '', quantity: '', notes: '', categories: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = [
    "Groceries",
    "Household Items",
    "Electronics",
    "Clothing",
    "Other",
  ];
=======
  const [form, setForm] = useState({ name: '', quantity: '', notes: '', category: '' });
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04

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
<<<<<<< HEAD
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
=======
    if (selectedItem) {
      dispatch(updateItem({ listId, updatedItem: { ...form, id: selectedItem.id } }));
    } else {
      dispatch(addItem({ listId, item: { ...form, id: Date.now() } }));
    }
    setForm({ name: '', quantity: '', notes: '', category: '' });
    setSelectedItem(null);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          {selectedItem ? 'Update Item' : 'Add New Item'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Item Name"
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Notes (optional)</label>
            <input
              type="text"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Notes"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a category</option>
              {CATEGORIES.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {selectedItem ? 'Update Item' : 'Add Item'}
          </button>
        </form>
      </div>
    </div>
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04
  );
}

export default ShoppingListForm;
