import React, { useState } from 'react';
import ListCard from '../features/components/listsCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '/src/redux/slices/shoppinglistSlice'; 
import Footer from '../features/components/footer';
import Layout from '../features/components/layout';
import ShoppingListForm from '../features/components/shoppingListForm'; 

function Listspage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [isFormVisible, setIsFormVisible] = useState(false); // State to control form visibility
  const [selectedItem, setSelectedItem] = useState(null); // For edit functionality
  const dispatch = useDispatch();
  const items = useSelector(state => state.shoppingList.items) || [];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleEdit = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    setSelectedItem(itemToEdit);
    setIsFormVisible(true);
  };

  const filteredItems = items
    .filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.categories && item.categories.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => a[sortOption].localeCompare(b[sortOption] || '')); // Handle undefined sort option

  return (
    <>
      <Layout/>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Shopping List</h1>

        {/* Search and Sort Inputs */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={handleSearch}
            className="border rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 w-full sm:w-64"
          />

          <select
            value={sortOption}
            onChange={handleSort}
            className="border rounded-lg px-4 py-2 shadow-sm w-full sm:w-64"
          >
            <option value="name">Sort by Name</option>
            <option value="categories">Sort by Category</option>
          </select>
        </div>

        {/* List of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <ListCard
                key={item.id}
                item={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>No items found.</p> // Handle case where there are no filtered items
          )}
        </div>

        {/* Add New Item Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              setSelectedItem(null); // Reset form for adding a new item
              setIsFormVisible(true); // Show the form
            }}
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            Add New Item
          </button>
        </div>

        {/* Shopping List Form - Only show if isFormVisible is true */}
        {isFormVisible && (
          <div className="mt-6">
            <ShoppingListForm 
              selectedItem={selectedItem} 
              setSelectedItem={setSelectedItem} 
        
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Listspage;
