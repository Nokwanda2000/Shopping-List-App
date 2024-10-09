
import { configureStore } from '@reduxjs/toolkit';
import shoppingListReducer from './slices/shoppinglistSlice';
import authReducer from './slices/authSlice';


export const store = configureStore({
  reducer: {
    shoppingList: shoppingListReducer,
    auth: authReducer,
  },
<<<<<<< HEAD


=======
 
>>>>>>> f4683752b1f5ed8b40c18c41ca1534cf43186b04
});

export default store;
