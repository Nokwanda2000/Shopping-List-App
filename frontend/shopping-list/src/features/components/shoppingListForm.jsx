import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "/src/redux/slices/shoppinglistSlice"; 

function ShoppingListForm({ selectedItem, setSelectedItem }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', quantity: '', notes: '', categories: '' });

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
      dispatch(updateItem({ ...form, id: selectedItem.id }));
    } else {
      dispatch(addItem({ ...form, id: Date.now() }));
    }
    setForm({ name: '', quantity: '', notes: '', categories: '' });
    setSelectedItem(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Item Name"
        required
        className="border rounded-lg p-2 mr-2 w-full"
      />
      <input
        type="number"
        name="quantity"
        value={form.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
        className="border rounded-lg p-2 mr-2 w-full"
      />
      <input
        type="text"
        name="notes"
        value={form.notes}
        onChange={handleChange}
        placeholder="Notes (optional)"
        className="border rounded-lg p-2 mr-2 w-full"
      />
      <input
        type="text"
        name="categories"
        value={form.categories}
        onChange={handleChange}
        placeholder="Categories (optional)"
        className="border rounded-lg p-2 mr-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-200 hover:bg-blue-600"
      >
        {selectedItem ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
}

export default ShoppingListForm;
