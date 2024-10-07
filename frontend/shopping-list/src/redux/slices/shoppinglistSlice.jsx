import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Base URL for your JSON server
const BASE_URL = 'http://localhost:5000/products';

// Async actions

// Fetch items from JSON server
export const fetchItems = createAsyncThunk('shoppingList/fetchItems', async () => {
  const response = await fetch(BASE_URL);
  return await response.json();
});

// Add item to JSON server
export const addItem = createAsyncThunk('shoppingList/addItem', async (newItem) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });
  return await response.json();
});

// Update item on JSON server
export const updateItem = createAsyncThunk('shoppingList/updateItem', async (updatedItem) => {
  const response = await fetch(`${BASE_URL}/${updatedItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedItem),
  });
  return await response.json();
});

// Delete item from JSON server
export const deleteItem = createAsyncThunk('shoppingList/deleteItem', async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return id;
});

// Create slice
const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch items
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // Add item
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    // Update item
    builder.addCase(updateItem.fulfilled, (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });

    // Delete item
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    });
  },
});

// Export actions and reducer
export const { setItems } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
