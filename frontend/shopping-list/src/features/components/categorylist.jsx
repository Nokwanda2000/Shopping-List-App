import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from './footer';
import Layoutpage from '../../pages/layoutpage';
import ShoppingListForm from './shoppingListForm'; // Assuming this is the form for editing

export default function Categorylist({ onEdit, onDelete }) {
  const { id } = useParams(); // Extract the ID from the URL
  const items = useSelector((state) => state.shoppingList.items); // Get all items from Redux store
  const item = items.find((item) => item.id === Number(id)); // Find the item with the matching ID
  const [editing, setEditing] = useState(false); // Manage edit mode state

  // If no item is found, return a not found message
  if (!item) {
    return <div className="text-center text-red-500">Item not found.</div>;
  }

  // Toggle edit mode
  const handleEditClick = () => {
    setEditing(!editing);
  };

  return (
    <>
      <Layoutpage />
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto transition-transform transform hover:scale-105 duration-300">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
          <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
          {item.notes ? <p className="text-gray-500 mb-1">Notes: {item.notes}</p> : <p>No notes available.</p>}
          {item.categories ? <p className="text-gray-500 mb-1">Categories: {item.categories}</p> : <p>No categories available.</p>}
        </div>

        <div className="flex justify-between p-4">
          <button
            onClick={handleEditClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
          >
            {editing ? 'Cancel' : 'Edit'}
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
          >
            Delete
          </button>
          <Link to="..">
            <button className="bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg px-4 transition-colors">
              Go back
            </button>
          </Link>
        </div>

        {/* Conditionally render the form for editing */}
        {editing && <ShoppingListForm item={item} onSubmit={() => setEditing(false)} />}
      </div>
      <Footer />
    </>
  );
}
