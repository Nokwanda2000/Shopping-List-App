import React from 'react';
import Footer from './footer';
import Layout from './layout';
import { Link } from 'react-router-dom';

function ListCard({ item, onEdit, onDelete }) {
  return (
    <>
   
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto transition-transform transform hover:scale-105 duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
        {item.notes && <p className="text-gray-500 mb-1">Notes: {item.notes}</p>}
        {item.categories && <p className="text-gray-500 mb-1">Categories: {item.categories}</p>}
      </div>

      <div className="flex justify-between p-4">
        {/* <button
          onClick={() => onEdit(item.id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
        >
          Delete
        </button> */}
      <Link to={`${item.id}`}><button className='bg-green-700 hover:bg-green-600 text-white font-semibold rounded-lg px-4 transition-colors'>View List</button></Link>
        
      </div>

      {/* <figure className="h-48 overflow-hidden">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </figure> */}
    </div>


    </>
  );
}

export default ListCard;
