import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
      { id: 1, name: 'Apples', quantity: 5, notes: 'Get organic if possible', categories: 'Fruits', imageUrl: 'https://example.com/apple.jpg' },
      { id: 2, name: 'Milk', quantity: 2, notes: 'Whole milk', categories: 'Dairy', imageUrl: 'https://example.com/milk.jpg' },
      // Add more items here
    ],
  };

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, updateItem, deleteItem, setItems } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
