
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './slices/shoppinglistSlice';
import authReducer from './slices/authSlice';


export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    auth: authReducer,
  },


});

export default store;
