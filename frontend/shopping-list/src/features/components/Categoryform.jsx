import React, { useState, useEffect } from 'react';

export default function CategoryForm({ item, onSubmit }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // For dropdown

  // Define your categories list (you can customize these categories)
  const categories = ['Grocery', 'Household', 'Electronics', 'Clothing', 'Office Supplies',];

  // Load existing item data if editing
  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity);
      setNotes(item.notes || '');
      setSelectedCategory(item.categories || ''); // Handle the case where category is set
    } else {
      setName('');
      setQuantity('');
      setNotes('');
      setSelectedCategory(''); // Clear the category when adding a new item
    }
  }, [item]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || quantity <= 0) {
      alert('Please enter a valid name and quantity.');
      return;
    }
    const newItem = { name, quantity, notes, categories: selectedCategory }; // Use selected category
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
          min="1" // Ensure quantity is always positive
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
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <select
          className="border rounded w-full py-2 px-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)} // Set the selected category
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
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
