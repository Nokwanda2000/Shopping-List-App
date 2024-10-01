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
  const [form, setForm] = useState({ name: '', quantity: '', notes: '', category: '' });

  useEffect(() => {
    if (selectedItem) {
      setForm(selectedItem);
    }
  }, [selectedItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
  );
}

export default ShoppingListForm;
