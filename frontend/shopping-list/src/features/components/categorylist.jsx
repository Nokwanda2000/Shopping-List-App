import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './footer';
import Layoutpage from '../../pages/layoutpage';
import CategoryForm from './Categoryform';
import { addItem, updateItem, deleteItem } from '/src/redux/slices/shoppinglistSlice'; // Import your Redux actions

export default function Categorylist() {
  const { id } = useParams(); // Extract the ID from the URL
  const itemsFromStore = useSelector((state) => state.shoppingList.items); // Get all items from Redux store
  const dispatch = useDispatch(); // Initialize dispatch for Redux actions

  // Local state to manage the list of items, including newly added ones
  const [items, setItems] = useState(itemsFromStore);
  const [editing, setEditing] = useState(false); // Manage edit mode state
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility
  const [selectedItem, setSelectedItem] = useState(null); // For tracking the item being edited or added

  // Sync local state with Redux state whenever itemsFromStore changes
  useEffect(() => {
    setItems(itemsFromStore);
  }, [itemsFromStore]);

  // Find the item with the matching ID
  const item = items.find((item) => item.id === Number(id));

  // If no item is found, return a not found message
  if (!item) {
    return <div className="text-center text-red-500">Item not found.</div>;
  }

  // Toggle edit mode
  const handleEditClick = () => {
    setEditing(!editing);
    setSelectedItem(item); // Set the selected item for editing
  };

  // Function to handle form submission for adding or updating items
  const handleFormSubmit = (newItem) => {
    if (newItem.id) {
      // Update existing item
      dispatch(updateItem(newItem)); // Dispatch update action to Redux
    } else {
      // Add new item
      const newItemWithId = { ...newItem, id: items.length + 1 }; // Assign a new unique ID
      dispatch(addItem(newItemWithId)); // Dispatch add action to Redux
    }
    setIsFormVisible(false); // Hide the form after submission
    setEditing(false); // Exit edit mode if applicable
  };

  // Handle deleting an item
  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId)); // Dispatch delete action to Redux
  };

  return (
    <>
      <Layoutpage />

      {/* Table structure for displaying item details */}
      <div className="container mx-auto my-8 p-4">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left text-sm">
              <th className="p-4 border-b">Name</th>
              <th className="p-4 border-b">Quantity</th>
              <th className="p-4 border-b">Notes</th>
              <th className="p-4 border-b">Categories</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr className="hover:bg-gray-50" key={item.id}>
                <td className="p-4 border-b">{item.name}</td>
                <td className="p-4 border-b">{item.quantity}</td>
                <td className="p-4 border-b">
                  {item.notes ? item.notes : 'No notes available.'}
                </td>
                <td className="p-4 border-b">
                  {item.categories ? item.categories : 'No categories available.'}
                </td>
                <td className="p-4 border-b flex space-x-4">
                  <button
                    onClick={() => {
                      handleEditClick();
                      setSelectedItem(item); // Set the selected item for editing
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg px-4 py-1"
                  >
                    {editing && selectedItem?.id === item.id ? 'Cancel' : 'Edit'}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Conditionally render the form for editing */}
        {editing && selectedItem && (
          <div className="mt-4">
            <CategoryForm item={selectedItem} onSubmit={handleFormSubmit} />
          </div>
        )}

        {/* Button for adding new items */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-2"
            onClick={() => {
              setSelectedItem(null); // Reset form for adding a new item
              setIsFormVisible(true); // Show the form
            }}
          >
            Add to list
          </button>
        </div>

        <Link to='..'><button className='bg-green-500 py-2 px-3 rounded-lg text-white'>Go back</button></Link>

        {/* Conditionally render the form for adding new items */}
        {isFormVisible && (
          <div className="mt-6">
            <CategoryForm
              selectedItem={selectedItem} // Pass null when adding a new item
              setSelectedItem={setSelectedItem}
              onSubmit={handleFormSubmit} // Handle form submission
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
