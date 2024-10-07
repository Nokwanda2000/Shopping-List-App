import React, { useState, useEffect } from 'react';

export default function CatergoryForm({ item, onSubmit }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [categories, setCategories] = useState('');

  // Load existing item data if editing
  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity);
      setNotes(item.notes || '');
      setCategories(item.categories || '');
    }
  }, [item]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, notes, categories };
    if (item) {
      newItem.id = item.id; // Preserve ID when editing
    }
    onSubmit(newItem);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
        <input
          type="number"
          className="border rounded w-full py-2 px-3"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Notes</label>
        <textarea
          className="border rounded w-full py-2 px-3"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Categories</label>
        <input
          type="text"
          className="border rounded w-full py-2 px-3"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
      >
        {item ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
}
