import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'; 

function ListCard({ item, onEdit, onDelete }) {
  const handleShare = () => {
    const listUrl = `https://yourapp.com/list/${item.id}`;
    navigator.clipboard.writeText(listUrl)
      .then(() => {
        alert('List link copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto transition-transform transform hover:scale-105 duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
        {item.notes && <p className="text-gray-500 mb-1">Notes: {item.notes}</p>}
        {item.categories && (
          <p className="text-gray-500 mb-1">
            Categories: {item.categories.join(', ')}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center p-4">
        {/* Edit Button */}
        <button
          onClick={() => onEdit(item.id)}
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          aria-label={`Edit ${item.name}`}
        >
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(item.id)}
          className="bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          aria-label={`Delete ${item.name}`}
        >
          Delete
        </button>

        {/* Share Icon */}
        <FontAwesomeIcon
          icon={faShareAlt}
          onClick={handleShare}
          className="text-blue-500 text-xl cursor-pointer transition-transform transform hover:scale-110"
          title="Share this list"
          aria-label={`Share ${item.name}`}
        />
      </div>
    </div>
  );
}

export default ListCard;
