import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD

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
=======
import axios from 'axios';

// API URL for the JSON-Server
const API_URL = 'http://localhost:5000/lists';

// Initial state with an empty list to start
const initialState = {
  lists: [],
  loading: false,
  error: null,
};

// Fetch all lists from the server
export const fetchLists = createAsyncThunk('shoppingList/fetchLists', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Add a new item to a specific list on the server
export const addItem = createAsyncThunk('shoppingList/addItem', async ({ listId, item }) => {
  const response = await axios.post(`${API_URL}/${listId}/items`, item);
  return { listId, item: response.data };
});

// Update an item in a specific list on the server
export const updateItem = createAsyncThunk('shoppingList/updateItem', async ({ listId, updatedItem }) => {
  const response = await axios.put(`${API_URL}/${listId}/items/${updatedItem.id}`, updatedItem);
  return { listId, updatedItem: response.data };
});

// Delete an item from a specific list on the server
export const deleteItem = createAsyncThunk('shoppingList/deleteItem', async ({ listId, itemId }) => {
  await axios.delete(`${API_URL}/${listId}/items/${itemId}`);
  return { listId, itemId };
});

// Add a new list on the server
export const addList = createAsyncThunk('shoppingList/addList', async (newList) => {
  const response = await axios.post(API_URL, newList);
  return response.data;
});

// Create the slice
const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    setItems: (state, action) => {
      const { listId, items } = action.payload;
      const list = state.lists.find(list => list.id === listId);
      if (list) {
        list.items = items;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.loading = false;
        state.lists = action.payload;
      })
      .addCase(fetchLists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        const { listId, item } = action.payload;
        const list = state.lists.find(list => list.id === listId);
        if (list) {
          list.items.push(item);
        }
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const { listId, updatedItem } = action.payload;
        const list = state.lists.find(list => list.id === listId);
        if (list) {
          const index = list.items.findIndex(item => item.id === updatedItem.id);
          if (index !== -1) {
            list.items[index] = updatedItem;
          }
        }
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        const { listId, itemId } = action.payload;
        const list = state.lists.find(list => list.id === listId);
        if (list) {
          list.items = list.items.filter(item => item.id !== itemId);
        }
      })
      .addCase(addList.fulfilled, (state, action) => {
        state.lists.push(action.payload);
      });
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04
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

<<<<<<< HEAD
// Export actions and reducer
=======
// Export the actions and reducer
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04
export const { setItems } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
